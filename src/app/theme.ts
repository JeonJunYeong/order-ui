'use client';

import { createTheme } from '@mui/material/styles';
// Create a theme instance.
const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: "light",
    },
});
export default theme;