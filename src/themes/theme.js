// theme.js
import { createTheme } from '@mui/material/styles';

// Define color palette
const colors = {
  greenLight: '#A1CCA5',
  green: '#8FB996',
  greenDark: '#709775',
  greenDarker: '#415D43',
  greenDarkest: '#111D13',
  blueAccent: '#38a3a5',
};

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.greenDark,
    },
    secondary: {
      main: colors.greenDarker,
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: colors.greenDarker,
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
      main: colors.greenDarker,
    },
    background: {
      default: '#000000',
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
