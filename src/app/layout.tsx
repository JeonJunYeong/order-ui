import "./globals.css";
import React from "react";
import localFont from "next/font/local";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {LinearProgress, ThemeProvider} from "@mui/material";
import {NextAppProvider} from "@toolpad/core/nextjs";
import {DashboardLayout, Navigation, PageContainer} from "@toolpad/core";
import theme from "@/app/theme";



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
        segment: 'order',
        title: '주문',
        children: [{
            segment: 'btOrder',
            title: '1',
        },
        {
            segment: 'twoWayOrder',
            title: '2',
        }
        ]
    },

];
const BRANDING = {
    title: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`} suppressHydrationWarning={true}>
      <body className={pretendard.className}>
          <AppRouterCacheProvider options={{ enableCssLayer: true,key:'css' }}>
            <ThemeProvider theme={theme}>
                <React.Suspense fallback={<LinearProgress />}>
                    <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
                        <DashboardLayout>
                            <PageContainer>{children}</PageContainer>
                        </DashboardLayout>
                    </NextAppProvider>
                </React.Suspense>
            </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
