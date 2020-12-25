import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#770000',
      main: '#aa0000',
      light: '#dd0000',
    },
    secondary: {
      dark: '#000000',
      main: '#686868',
      light: '#cccccc',
    },
    type: 'light',
    text: {
      primary: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#ececec',
    },
    action: {
      hoverOpacity: 0.2,
    },
  },
});
