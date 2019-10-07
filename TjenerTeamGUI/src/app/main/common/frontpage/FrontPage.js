import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {lightBlue} from "@material-ui/core/colors";
import * as globalPaths from '../../../GlobalPaths';
import './FrontPage.css'

const styles = () => ({
    layoutRoot: {}
});

class FrontPage extends Component {

    routeCreateAccountCorp = () => {
        this.props.history.push(globalPaths.createBooking);
    };

    routeCreateAccountEmpl = () => {
        this.props.history.push(globalPaths.employeeFrontPage);
    };

    render() {
        return (
            <div className="flex flex-row">
                <div className="custom-bg w-1/2" >
                    <div className="flex h-screen">
                        <div className="m-auto ">
                            <div className="text-center ">
                                <h1 className="text-6xl font-serif text-white">Virksomhed</h1>
                            </div>
                            <div className="mt-16 min-w-320">
                                <div className="text-center">
                                    <SubmitButton
                                        onClick={this.routeCreateAccountCorp}
                                        className="w-full h-full min-h-48"
                                        style={{color: "white", textTransform: "none"}}>
                                        Kom igang
                                    </SubmitButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-bg w-1/2" style={{backgroundImage: "url(http://www.tjenerteamet.dk/uploads/2/5/9/3/25935474/background-images/1469395321.png)"}}>
                    <div className="flex h-screen">
                        <div className="m-auto ">
                            <div className="text-center ">
                                <h1 className="text-6xl font-serif text-white">Personale</h1>
                            </div>
                            <div className="mt-16 min-w-320">
                                <div className="text-center">
                                    <SubmitButton
                                        onClick={this.routeCreateAccountEmpl}
                                        className="w-full h-full min-h-48"
                                        style={{color: "white", textTransform: "none"}}>
                                        Kom igang
                                    </SubmitButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const SubmitButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(lightBlue[500]),
        backgroundColor: lightBlue[500],
        '&:hover': {
            backgroundColor: lightBlue[700],
        },
    },
}))(Button);



export default withStyles(styles, {withTheme: true})(FrontPage);
