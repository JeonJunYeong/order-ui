import "./globals.css";
import React from "react";
import localFont from "next/font/local";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {LinearProgress} from "@mui/material";
import theme from "@/app/theme";
import {NextAppProvider} from "@toolpad/core/nextjs";
import {Navigation} from "@toolpad/core";



const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});
const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'page',
        title: 'Page',

    },
    {
        segment: 'page-2',
        title: 'Page 2',

    },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <React.Suspense fallback={<LinearProgress />}>
          <NextAppProvider navigation={NAVIGATION} >
            {children}
          </NextAppProvider>
        </React.Suspense>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
