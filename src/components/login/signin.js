// Modules
import React, { Component } from 'react';


import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme/theme';
import { signIn } from "../actions/authAction";

import "../../assets/fonts/stylesheet.css";
import './login.css';

import { connect } from 'react-redux'
const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});


// Services
/* import { login, set_user_detail, toastDisplay, Base64 } from '../services/global';
import { NodeAPI, thirdPartyAPI } from '../services/webServices';
import { initSocket } from '../services/socket'; */

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            checked: false,
            email: '',
            password: '',
            errorMessage: '',
            emailErrStatus: '',
            emailErrMessage: '',
            passwordErrStatus: '',
            passwordErrMessage: '',
        };
    }



    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => console.log(
            "Input value is   ", this.state.email, "     ", this.state.password
        ))

    }


    login(e) {


        if (this.state.email != 'demo' && this.state.password != 'demo') {
            this.setState({ errorMessage: "Invalid Email or Password" });
            return;
        } else {
            this.props.authAction(this.state)
            this.props.history.push('/dashboard');

        }
        // e.preventDefault();


    }

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <main className="loginMainWrap">
                    <CssBaseline />
                    <Paper className="loginBoxWrap">

                        <Typography component="h1" variant="h5">
                            LOGIN
        </Typography>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus name="email"
                                onChange={(e) => this.handleChange(e)} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password"
                                onChange={(e) => this.handleChange(e)} />
                        </FormControl>
                        <div className="keepMesingin">
                            <FormControlLabel
                                className="keepMeSignIn"
                                control={<Checkbox value="remember" color="primary" />}
                                label="Keep me signed in"
                            />
                            <span className="forGotPassword"><a href="#">Forgot Password?</a></span>
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.login()}
                            className="LoginBtn"
                        >
                            Login
                         </Button>
                        <div className="registerHereText">
                            <p>Yet not a register member, click here for <a href="#">register</a>.</p>
                        </div>



                    </Paper>
                </main>
            </MuiThemeProvider>
        )
    }


}

//export default Login;

// export default withStyles(styles)(Login);
const mapStateToProps = state => {

    return {
        // type: state.type,
        // data: state.data,
        // status: state.status,
    }
}

const mapDispatchToProps = dispatch => ({
    // drawAction: data => dispatch(draw(data)),
    authAction: data => dispatch(signIn(data))
})
// export default withStyles(styles)(Dashboard);
export default withStyles(styles)(connect(
    mapStateToProps, mapDispatchToProps,
)(Login));