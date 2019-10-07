import React, {Component} from 'react';
import Top from "../../createCorporation/components/Top";
import Bottom from "../../createCorporation/components/Bottom";
import {Card} from "@material-ui/core";
import {NextGreenButton} from "../../../../common/styled-components/CustomButtons";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as corporationUser from "../../actions/Corporation.actions";
import FormValidator from "../../../../validator/FormValidator";
import {EditCorparationFormValidator} from "../../../../validator/forms/EditCorporationFormValidator";
import * as GlobalPaths from "../../../../../GlobalPaths";

class EditCorporationProfile extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(EditCorparationFormValidator);
        this.submitted = false;
        this.state = {
            selectedTab: 2,
            corporation: {
                _id: "",
                name: "",
                cvr: "",
                address: "",
                zipCode: "",
                city: "",
                contactPerson: "",
                department: "",
                email: "",
                phoneNumber: "",
                billingEmail: "",
                ean: "",
                gdpr: "",
                role: "",
                validation: this.validator.valid()
            },
        }
    }

    submitHandler = () => {
        let corp = this.state.corporation;
        const validation = this.validator.validate(corp);
        const tempCorporation = {...this.state.corporation};
        tempCorporation.validation = validation;
        this.submitted = true;
        if (validation.isValid) {
            this.props.actions.updateUser(this.state.corporation);
            this.props.changePageHandler(GlobalPaths.homeCorporation)
        }
        this.setState({state: this.state});
    };

    changeHandler = (e) => {
        let tempState = {...this.state.corporation};
        tempState[e.target.name] = e.target.value;
        this.setState({corporation: tempState})

    };

    componentDidMount() {
        let user = this.props.user;
        if(user != null) {
            let tempState = {...this.state.corporation};
            for (let key in tempState) {
                if (tempState.hasOwnProperty(key)) {
                    if (tempState[key] === "") {
                        tempState[key] = user[key];
                    }
                }
            }
            this.setState({corporation: tempState});
        }
    }

    render() {

    const {corporation} = this.state;
    let validation = this.submitted ? this.validator.validate(this.state.corporation) : this.state.corporation.validation;

    return (
            <Card className="p-24 max-w-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>

                <div className="w-full">
                    <Top
                        email={corporation.email}
                        cvr={corporation.cvr}
                        address={corporation.address}
                        zipCode={corporation.zipCode}
                        city={corporation.city}
                        changeHandler={this.changeHandler}
                        validation={validation}
                    />
                </div>

                <div className="w-full mt-12">
                    <hr style={{borderTop: '1px solid #cccccc'}}/>
                </div>


                <div className="flex flex-wrap ">
                    <Bottom
                        contactPerson={corporation.contactPerson}
                        department={corporation.department}
                        name={corporation.name}
                        phoneNumber={corporation.phoneNumber}
                        billingEmail={corporation.billingEmail}
                        ean={corporation.ean}
                        password={corporation.password}
                        confirmPassword={corporation.confirmPassword}
                        gdpr={corporation.gdpr}
                        validation={validation}
                        changeHandler={this.changeHandler}
                    />
                </div>

                <div className="w-full mt-10">
                    <div className="flex-wrap flex my-2">
                        <div className="w-full">
                            <div className="flex justify-center p-4">
                                <NextGreenButton
                                    onClick={this.submitHandler}
                                    color="secondary"
                                    variant="contained"
                                    className="min-w-216 min-h-48 "
                                    style={{color: "white"}}>
                                    Updater
                                </NextGreenButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            updateUser: bindActionCreators(corporationUser.updateCorporationUser, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(EditCorporationProfile);

