import React, {Component} from 'react';
import {BackRedButton} from "../../../../common/styled-components/CustomButtons";
import {Dialog} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import * as corporationUser from "../../actions/Corporation.actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class DeleteProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteModal: false,
            editCorporation: {
                userDeleteConfirm: "",
            },
        }
    }

    deleteCorpHandler = (e) => {
        let tempState = {...this.state.editCorporation};
        tempState[e.target.name] = e.target.value;
        this.setState({editCorporation: tempState})
    };

    deleteModalHandler = () => {
        this.setState({showDeleteModal: !this.state.showDeleteModal})
    };

    deleteCorporation = () => {
        this.props.actions.deleteUser(this.props.user);
    };

    render() {
        const {showDeleteModal, editCorporation} = this.state;

        return (
            <>
                {showDeleteModal &&
                <Dialog open={showDeleteModal} onClose={this.deleteModalHandler}>
                    <div>
                        <Card className="p-32">
                            <h3 className="w-full text-center mb-8">Er du sikker på at du vil slette din
                                virksomhedsprofil?</h3>
                            <p className="w-full text-center mb-8">Tast "slet" for at bekræfte</p>
                            <div>
                                <TextField
                                    name="userDeleteConfirm"
                                    value={editCorporation.userDeleteConfirm}
                                    label="Bekræftelse"
                                    className="w-full"
                                    variant="outlined"
                                    onChange={(e) => this.deleteCorpHandler(e)}
                                />
                            </div>
                            <div className="flex justify-center my-2 ">
                                <div className="w-1/2 p-4">
                                    <Button
                                        disabled={editCorporation.userDeleteConfirm !== 'slet'}
                                        color="primary"
                                        variant="contained"
                                        className="w-full mr-5 sm:max-h-52 sm:min-h-52"
                                        onClick={this.deleteCorporation}>
                                        <span className="text-12">Ja</span>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Dialog>
                }

                <div className="flex flex-col justify-center mb-20">
                    <div className="flex justify-center">
                        <p className="font-bold text-center text-15 sm:text-20">Alle dine informationer vil blive
                            slette</p>
                    </div>
                    <div className="flex justify-center mb-20">
                        <p className="font-bold text-center text-15 sm:text-20">Er du sikker på at du gerne vil slette
                            din
                            profil?</p>
                    </div>
                    <div className="flex justify-center">
                        <BackRedButton className="min-w-200 min-h-44" onClick={this.deleteModalHandler}>Slet
                            Profil</BackRedButton>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            deleteUser: bindActionCreators(corporationUser.deleteCorporationUser, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(DeleteProfile);
