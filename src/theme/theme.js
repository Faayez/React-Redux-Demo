import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import red from 'material-ui/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: red// Switching the dark mode on is a single property value change.
    },
    typography: { useNextVariants: true },
});

export default theme;