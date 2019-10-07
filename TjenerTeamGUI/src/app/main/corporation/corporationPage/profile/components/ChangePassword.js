import React, {Component} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import {NextGreenButton} from "../../../../common/styled-components/CustomButtons";
import {connect} from "react-redux";
import * as corporationUser from "../../actions/Corporation.actions";
import {bindActionCreators} from "redux";
import FormValidator from "../../../../validator/FormValidator";
import {NewPasswordValidator} from "../../../../validator/forms/NewPasswordValidator";
import * as GlobalPaths from "../../../../../GlobalPaths";
import corporations from "../../reducers/Corporation.reducer";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(NewPasswordValidator);
        this.submitted = false;
        this.state = {
            password: {
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                validation: this.validator.valid()
            },
        }
    }

    changeHandler = (e) => {
        let password = {...this.state.password};
        password[e.target.name] = e.target.value;
        this.setState({password});
    };

    submitHandler = () => {
        const password = this.state.password;
        const validation = this.validator.validate(password);
        const tempPassword = {...this.state.password};
        tempPassword.validation = validation;
        this.submitted = true;
        if (validation.isValid) {
            this.changePassword();
        }
        this.setState({state: this.state})
    };

    changePassword = () => {
        const {oldPassword, newPassword} = this.state.password;
        let passwordData = {oldPassword: oldPassword, newPassword: newPassword};
        this.props.actions.changePassword(passwordData, this.props.user);
    };


    render() {
        const {oldPassword, newPassword, confirmPassword} = this.state;
        let validation = this.submitted ? this.validator.validate(this.state.password) : this.state.password.validation;

        return (
            <>
                {this.props.changePage ? this.props.changePageHandler(GlobalPaths.login) :
                <div className="w-full max-w-lg mx-auto m-16 md:m-0">
                    {/*<CardContent className="flex flex-col items-center ">*/}
                    {/*<Card className="p-24 max-w-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>*/}
                    <div className="w-full mb-10">
                        <p className="font-sans text-4xl font-bold text-gray-800 mt-20 text-center mb-40">Skift
                            kodeord</p>
                        <div className="flex flex-wrap sm:my-2">
                            <div className="flex justify-center p-2 w-full">
                                <TextField
                                    name="oldPassword"
                                    label="Indtast dit gamle kodeord"
                                    helperText={<span style={{color: 'red'}}>{validation.oldPassword.message}</span>}
                                    className="w-2/3"
                                    value={oldPassword}
                                    onChange={this.changeHandler}
                                    variant="outlined"
                                />
                            </div>
                            <div className="flex justify-center p-2 w-full">
                                <TextField
                                    name="newPassword"
                                    label="Indtast dit nye kodeord"
                                    helperText={<span style={{color: 'red'}}>{validation.newPassword.message}</span>}
                                    className="w-2/3"
                                    value={newPassword}
                                    onChange={this.changeHandler}
                                    variant="outlined"
                                />
                            </div>
                            <div className="flex justify-center p-2 w-full">
                                <TextField
                                    name="confirmPassword"
                                    label="Bekræft dit nye kodeord"
                                    helperText={<span
                                        style={{color: 'red'}}>{validation.confirmPassword.message}</span>}
                                    className="w-2/3"
                                    value={confirmPassword}
                                    onChange={this.changeHandler}
                                    variant="outlined"
                                />
                            </div>
                        </div>
                        <div className="flex p-2 w-full justify-center">
                            <NextGreenButton
                                color="secondary"
                                variant="contained"
                                className="min-w-216 min-h-48"
                                style={{color: "white"}}
                                onClick={this.submitHandler}>
                                Opdater
                            </NextGreenButton>
                        </div>
                    </div>
                    {/*</Card>*/}
                    {/*</CardContent>*/}
                </div>
                }
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        changePage: state.corporations.changePage,
        user: state.auth.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            changePassword: bindActionCreators(corporationUser.changePassword, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ChangePassword);
