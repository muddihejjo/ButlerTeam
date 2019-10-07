import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../../../auth/store/actions/user.actions"
import * as loginActions from "../../../auth/store/actions/login.actions"
import * as bookingActions from '../../corporation/booking/actions/Booking.actions';
import * as GlobalPaths from "../../../GlobalPaths";
import CorporationHeader from "./CorporationHeader";
import {LoginButton} from "../styled-components/CustomButtons";
import EmployeeHeader from "./EmployeeHeader";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
});

const corporation = 'corporation';
const employee = 'staff';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOption: false,
            anchorEl: undefined
        };
    }

    logOutHandler = () => {
        this.props.actions.hideFullCreateBookingPage();
        this.props.actions.logOut();
        this.props.actions.logUserOut();
    };


    menuShowHandler = (e) => {
        this.setState({menuOption: !this.state.menuOption, anchorEl: e.currentTarget})
    };

    render() {

        const {classes, changePage} = this.props;
        const {menuOption, anchorEl} = this.state;

        return (
            <>
                {this.props.user.role.includes(corporation) &&
                <CorporationHeader
                    menuShowHandler={this.menuShowHandler}
                    logOutHandler={this.logOutHandler}
                    menuOption={menuOption}
                    anchorEl={anchorEl}
                    changePage={changePage}
                />
                }
                {this.props.user.role.includes(employee) &&
                <EmployeeHeader
                    menuShowHandler={this.menuShowHandler}
                    logOutHandler={this.logOutHandler}
                    menuOption={menuOption}
                    anchorEl={anchorEl}
                    changePage={changePage}
                />
                }
                {this.props.user.role.length <= 0 &&
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            className={classes.title}>
                        </Typography>
                        <LoginButton
                            style={{color: 'white'}}
                            className="min-w-96"
                            onClick={() => changePage(GlobalPaths.login)}>Login</LoginButton>
                    </Toolbar>
                </AppBar>
                }
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.auth.login.success,
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            logUserOut: bindActionCreators(userActions.logoutUser, dispatch),
            logOut: bindActionCreators(loginActions.logout, dispatch),
            hideFullCreateBookingPage: bindActionCreators(bookingActions.hideFullCreateBookingPage, dispatch)

        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(withStyles(styles)(Header));
