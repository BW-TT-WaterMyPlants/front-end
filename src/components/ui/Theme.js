import { createMuiTheme } from '@material-ui/core/styles';

/**
 * initializes colors and font settings for app theme
 *
 *
 * @returns {default theme css}
 * @constructor
 */

// * fonts

const mulishFont = 'Mulish sans-serif';
const ralewayFont = 'Raleway, sans-serif';
const robotoFont = 'Roboto, sans-serif';

// * colors
const lightGreen = '#869965';
const green = '#66724C';
const yellow = '#FDBD17';
const pink = '#E86895';
const lightPink = '#FAD6F6';

export default createMuiTheme({
  palette: {
    common: {
      green: green,
      lightGreen: lightGreen,
      yellow: yellow,
      pink: pink,
      lightPink: lightPink,
    },
    action: {
      //       active:
      // rgba(0, 0, 0, 0.54)
      // hover:
      // rgba(0, 0, 0, 0.04)
      // hoverOpacity: 0.04
      // selected:
      // rgba(0, 0, 0, 0.08)
      // selectedOpacity: 0.08
      // disabled:
      // rgba(0, 0, 0, 0.26)
      // disabledBackground:
      // rgba(0, 0, 0, 0.12)
      // disabledOpacity: 0.38
      // focus:
      // rgba(0, 0, 0, 0.12)
      // focusOpacity: 0.12
      // activatedOpacity: 0.12
    },
    primary: {
      main: lightGreen,
    },
    secondary: {
      main: yellow,
    },
  },
  typography: {
    h1: {},
    h2: {
      fontFamily: 'Mulish',
      color: green,
      fontWeight: 'bold',
    },
    h3: {},
    h4: {
      fontFamily: ralewayFont,
      color: green,
    },
    h5: {
      fontFamily: ralewayFont,
      color: green,
    },
    h6: {
      fontFamily: ralewayFont,
      color: green,
    },
    plantCardHeader: {
      fontFamily: 'Mulish',
      color: pink,
      fontSize: 16,
    },
    p: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {
      color: 'white',
      fontSize: '1.2em',
      fontFamily: ralewayFont,
      textTransform: 'capitalize',
    },
    caption: {},
  },
});
