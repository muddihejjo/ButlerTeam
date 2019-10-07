import {withStyles} from "@material-ui/core";
import {blueGrey, green, red, yellow} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

export const LoginButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(blueGrey[800]),
        backgroundColor: blueGrey[800],
        '&:hover': {
            backgroundColor: blueGrey[700],
        },
    },
}))(Button);


export const NextGreenButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);


export const BackRedButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);

export const FacebookButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText("#3B5999"),
        backgroundColor: "#3B5999",
        '&:hover': {
            backgroundColor: "#334e87",
        },
    },
}))(Button);




export const NewBookingButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(yellow[800]),
        backgroundColor: yellow[800],
        '&:hover': {
            backgroundColor: yellow[700],
        },
    },
}))(Button);
