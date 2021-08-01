import { createTheme } from "@material-ui/core";

const Theme = createTheme({
  palette: {
    primary: {
      main: '#BEC23F',
    },
    secondary: {
      main: '#9B90C2',
    }
  },
  text: {
    primary: '#FFFFFF',
  },
  background: {
    paper: '#1C1C1C',
    default: '#1C1C1C',
  },
  typography: {
    fontFamily: 'Raleway',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }

});

export default Theme;
