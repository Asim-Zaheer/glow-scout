// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A154B', // Replace with the primary color from your Figma design
    },
    secondary: {
      main: '#FFFFFF', // Replace with the secondary color from your Figma design
    },
    text: {
      primary: '#000000', // Replace with the text color from your Figma design
      secondary: '#FFFFFF', // Replace with secondary text color if any
    },
  },
  typography: {
    h6: {
      fontWeight: 700,
      color: '#4A154B', // Title color
    },
    button: {
      textTransform: 'none', // Ensure buttons do not transform text
    },
  },
});

export default theme;
