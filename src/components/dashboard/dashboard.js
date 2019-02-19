import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme/theme';
import { Sidebar } from '../../common-components/sidebar';
import colorIcon from "../../assets/images/color-image.png";

import TextField from '@material-ui/core/TextField';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import NativeSelect from '@material-ui/core/NativeSelect';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { draw } from "../actions/draw";
import { signIn } from "../actions/authAction";

import './style.css';


//import Cube from 'react-cube';

const cubePosition = { x: 10, y: 10, z: 10 };
const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        position: 'relative'
    },
    toolbar: {
        paddingRight: 24,
        background: '#000'
    },

    // toolbarIcon: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'flex-end',
    //     padding: '0 8px',
    //     ...theme.mixins.toolbar,
    // },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        // width: drawerWidth,
        width: '290px',
        paddingTop: '67px',
        paddingLeft: '25px',
        paddingRight: '25px',
        background: '#f3f1f2',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,

        }),

    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
        position: 'relative'
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },


    customSidebar: {
        paddingTop: '67px',
        background: '#dedede',
        width: '65px'
    },
    cube: {
        marginTop: '421px',
        display: 'block'
    }

});

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            x: '',
            y: '',
            z: '',
            t: '',
            rotation: '',
            borderColor: '',
            faceColor: '',
            labelWidth: 50
        };
        console.log("PRPS DAshB ", props, "  dsf ", this.props.signInData)
        if (!this.props.signInData) {
            this.props.history.push('/');
        }
    }


    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => console.log(
            "Input value is   ", this.state
        ))

        if (name == 'rotation') {

        }
    }

    submitData() {
        var data = {
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
            t: this.state.t,
            rotation: this.state.rotation,
            borderColor: this.state.borderColor,
            faceColor: this.state.faceColor
        };
        this.props.drawAction(data)
    }
    componentDidMount() {

    }
    render() {
        const { classes } = this.props;


        var btnClass = classNames('cube', this.state.rotation);



        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar)}
                    >

                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar} >
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(
                                    classes.menuButton,
                                    this.state.open && classes.menuButtonHidden,
                                )}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                className={classes.title}>
                                Company Logo
                            </Typography>
                            {/* <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton> */}
                            <div className="darkTopBarRightSec">
                                <Select placeholder="Select"
                                    native
                                    value={this.state.profile}
                                    input={
                                        <OutlinedInput
                                            name="profile"
                                            labelWidth={this.state.labelWidth}
                                            d="outlined-age-native-simple"
                                        />
                                    }
                                >
                                    <option value={1}>Foyez Ibharim</option>
                                    <option value={2}>Lorem Ipsum</option>
                                    <option value={3}>Lorem Ipsum</option>
                                </Select>
                                <Button onClick={() => this.props.history.push('/')} variant="contained" color="secondary logOutBtn" className={classes.button}>
                                    LOGOUT
                            </Button>
                            </div>
                        </Toolbar>
                    </AppBar>



                    <div className={classNames(classes.customSidebar)}>{Sidebar}</div>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className="sidebarHeading">
                            <h2>Add Value</h2>
                            <div className="toolbarIcon">
                                {/* <IconButton onClick={this.handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton> */}

                                <i className="fas fa-times"></i>
                            </div>
                            <div className="steplist">
                                <ul>
                                    <li className="active-step">1</li>
                                    {/* <li>2</li> */}
                                    {/*  <li className="active-step">3</li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="inputValueField">
                            <label className="customLabelField">Select Object</label>
                            <div className="selectBoxField">
                                <FormControl variant="outlined" className={classes.formControl}>
                                    {/* <InputLabel
                                            ref={ref => {
                                            this.InputLabelRef = ref;
                                            }}
                                            htmlFor="outlined-age-native-simple"
                                        >
                                            Rectangle
                                        </InputLabel> */}
                                    <Select
                                        native
                                        value={this.state.age}
                                        className="selectObjectOption"
                                        input={
                                            <OutlinedInput
                                                name="age"
                                                labelWidth={this.state.labelWidth}
                                                id="outlined-age-native-simple"
                                            />
                                        }
                                    >

                                        <option value={1}>Cube</option>
                                        {/* <option value={1}>Rectangle</option> */}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="inputValueFieldRow">
                                <div className="customLabel">X=</div>
                                <div className="inputTxtField">
                                    {/* <TextField
                                    id="outlined-name"
                                    label="Enter Length"
                                    value={this.state.name}
                                    margin="normal"
                                    variant="outlined"
                                /> */}
                                    <TextField
                                        id="outlined-adornment-weight"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        label="Enter Lenght"
                                        value={this.state.weight}
                                        name="x"
                                        onChange={(e) => this.handleInput(e)}
                                        //helperText="Weight"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">cm/Inch</InputAdornment>,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="inputValueFieldRow">
                                <div className="customLabel">Y=</div>
                                <div className="inputTxtField">
                                    <TextField
                                        id="outlined-adornment-weight"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        label="Enter Height"
                                        value={this.state.weight}
                                        name="y"
                                        onChange={(e) => this.handleInput(e)}
                                        //helperText="Weight"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">cm/Inch</InputAdornment>,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="inputValueFieldRow">
                                <div className="customLabel">Z=</div>
                                <div className="inputTxtField">
                                    <TextField
                                        id="outlined-adornment-weight"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        label="Enter Width"
                                        value={this.state.weight}
                                        name="z"
                                        onChange={(e) => this.handleInput(e)}
                                        //helperText="Weight"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">cm/Inch</InputAdornment>,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="inputValueFieldRow">
                                <div className="customLabel">T=</div>
                                <div className="inputTxtField">
                                    <TextField
                                        id="outlined-adornment-weight"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        label="Animation Time"
                                        value={this.state.weight}
                                        name="t"
                                        onChange={(e) => this.handleInput(e)}
                                        //helperText="Weight"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">eg. 2 min</InputAdornment>,
                                        }}
                                    />
                                </div>
                            </div>

                            <Divider></Divider>

                            <div className="rotationFieldWrap">
                                <div className="inputValueField">
                                    <label className="customLabelField">Rotation</label>
                                    <RadioGroup
                                        aria-label="Rotation"
                                        name="rotation"
                                        value={this.state.value}
                                        onChange={(e) => this.handleInput(e)}
                                        className="rotationRadioWarp"
                                    >
                                        <FormControlLabel value="rorate360" control={<Radio />} label="360" />

                                        <FormControlLabel value="rorate250" control={<Radio />} label="250" />

                                    </RadioGroup>
                                </div>
                            </div>

                            <Divider></Divider>

                            <div className="strokeBorderColorWrap">
                                <div className="inputValueField">
                                    <label className="customLabelField">Stroke/Border Color</label>
                                    <TextField
                                        id="outlined-bare"
                                        className={classes.textField}
                                        defaultValue="#104598"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(e) => this.handleInput(e)}
                                        name='borderColor'
                                    />
                                    <img src={colorIcon} />
                                </div>
                            </div>
                            <div className="faceColorWrap">
                                <div className="inputValueField">
                                    <label className="customLabelField">Face Color</label>
                                    <TextField
                                        id="outlined-bare"
                                        className={classes.textField}
                                        defaultValue="#104598"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(e) => this.handleInput(e)}
                                        name='faceColor'
                                    />
                                    <img src={colorIcon} />
                                </div>
                            </div>

                            <div className="addMoreRectangleSec">
                                <label className="customLabelField">Add More Rectangle</label>
                                <div className="customAddRectangleBtn"><span><i className="fas fa-plus"></i></span></div>
                            </div>

                            <div className="submitBtnWrap">
                                <Button onClick={() => this.submitData()} variant="contained" color="secondary customSubmitBtn" className={classes.button}>
                                    SUBMIT
                            </Button>
                            </div>
                        </div>
                    </Drawer>

                    <main className={classes.content}>
                        <div className="mainConTopSec">
                            <Typography variant="h4" gutterBottom component="h2" className="mainConHeading">
                                Demo in React JS
                        </Typography>
                            <div className="mainConTopSecBtnWrap">
                                <Button variant="contained" className={classes.button}>
                                    Add Value
                        </Button>
                                <Button variant="contained" className={classes.button}>
                                    Edit
                        </Button>
                            </div>
                        </div>

                        <div className={classes.tableContainer}>

                        </div>


                        <div className="wrapper">
                            <div className={btnClass} >
                                <b className="front" title="front" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></b>
                                <b className="back" title="back" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></b>
                                <b className="top" title="top" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></b>
                                <b className="bottom" title="bottom" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></b>
                                <b className="left" title="left" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></b>
                                <b className="right" title="right" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></b>
                                <i className="front" title="front" style={{ backgroundColor: this.state.faceColor, backgroundColor: this.state.faceColor }}></i>
                                <i className="back" title="back" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></i>
                                <i className="top" title="top" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}> </i>
                                <i className="bottom" title="bottom" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></i>
                                <i className="left" title="left" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></i>
                                <i className="right" title="right" style={{ borderColor: this.state.borderColor, backgroundColor: this.state.faceColor }}></i>
                            </div>
                        </div>
                    </main>


                    {/* <div >

                        

                     <Cube size={300} colours={['', '', '', '', '', '']} position={cubePosition} /> 
                    </div> */}
                </div>
            </MuiThemeProvider >
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {

    return {
        type: state.type,
        data: state.data,
        signInData: state.signIn.signInData,
        status: state.status,
    }
}

const mapDispatchToProps = dispatch => ({
    drawAction: data => dispatch(draw(data)),
    authAction: data => dispatch(signIn(data))
})
// export default withStyles(styles)(Dashboard);
export default withStyles(styles)(connect(
    mapStateToProps, mapDispatchToProps,
)(Dashboard));

