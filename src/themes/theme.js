// theme.js
import { createTheme } from '@mui/material/styles';

// Define color palette
const colors = {
  greenLight: '#A1CCA5',
  green: '#8FB996',
  greenDark: '#709775',
  greenDarker: '#415D43',
  greenDarkest: '#111D13',
};

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.green,
    },
    secondary: {
      main: colors.greenDark,
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#111D13',
      secondary: '#415D43',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.greenLight,
    },
    secondary: {
      main: colors.greenDark,
    },
    background: {
      default: '#111D13',
      paper: '#1c1c1c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#A1CCA5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export { lightTheme, darkTheme };
