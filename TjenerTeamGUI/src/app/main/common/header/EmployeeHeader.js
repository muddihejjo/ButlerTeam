import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Icon, withStyles} from "@material-ui/core";
import * as GlobalPaths from "../../../GlobalPaths";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


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


const EmployeeHeader = (props) => {

    const {
        menuShowHandler,
        logOutHandler,
        classes,
        menuOption,
        anchorEl,
        changePage
    } = props;

    return (
        <AppBar position="static" color="default">
            <Toolbar>

                <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                            className={classes.menuButton}
                            onClick={() => changePage(GlobalPaths.homeCorporation)} color="inherit"
                            aria-label="menu">
                    <Icon fontSize="default">home</Icon>
                    <p style={{fontSize: '17px'}}>Hjem</p>

                </IconButton>

                <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                            className={classes.menuButton} onClick={menuShowHandler} color="inherit"
                            aria-label="menu">
                    <Icon fontSize="default"
                          className="">person</Icon>
                    <p style={{fontSize: '17px'}}>Profil</p>

                </IconButton>

                <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                            className={classes.menuButton} onClick={menuShowHandler} color="inherit"
                            aria-label="menu">
                    <Icon fontSize="default"
                          className="">person</Icon>
                    <p style={{fontSize: '17px'}}>Mine jobs</p>
                </IconButton>

                <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                            className={classes.menuButton} onClick={menuShowHandler} color="inherit"
                            aria-label="menu">
                    <Icon fontSize="default"
                          className="">person</Icon>
                    <p style={{fontSize: '17px'}}>Find arbejde</p>
                </IconButton>

                <Typography variant="h6" className={classes.title}>
                </Typography>

                {/*<SubmitButton style={{color: 'white'}} onClick={() => changePage(GlobalPaths.createBooking)}>Book personale</SubmitButton>*/}

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={menuOption}
                    onClose={menuShowHandler}
                >
                    <MenuItem className="min-w-224">Rediger Profil</MenuItem>
                    <MenuItem>Kontakt</MenuItem>
                    <MenuItem>Hjælp</MenuItem>
                    <div className="w-full pl-2 pr-2">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>
                    <MenuItem onClick={logOutHandler}>Log ud</MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    );
};

export default (withStyles(styles)(EmployeeHeader));
