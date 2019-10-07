import React, {Component} from 'react';
import Photo from "../../../static/tjenerTeam2.png";
import {Card, CardContent, Icon} from "@material-ui/core";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import EditCorporationProfile from "./components/EditCorporationProfile";
import AppHeader from "../../../common/header/Header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import ChangePassword from "./components/ChangePassword";
import DeleteProfile from "./components/DeleteProfile";

class CorporationProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 2,
        }
    }

    changeTab = (e, tab) => {
        this.setState({selectedTab: tab})
    };

    changePage = (url) => {
        this.props.history.push(url);
    };

    changePageHandler = (page) => {
        this.props.history.push(page)
    };


    render() {
        const { selectedTab} = this.state;
        return (
            <>
                <AppHeader
                    changePage={this.changePage}
                />
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Photo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">

                    <Card className="w-full max-w-lg mx-auto m-16 md:m-0" square>
                        <Paper style={{backgroundColor: '#ffffff'}} square>
                            <Tabs value={selectedTab} indicatorColor="primary" variant="scrollable" onChange={this.changeTab}>
                                <Tab label={<span><Icon className="float-left" fontSize="small">info</Icon><span className="ml-2 float-left" style={{fontSize: '12px'}}>Firmaoplysninger</span></span>}/>
                                <Tab label={<span><Icon className="float-left" fontSize="small">payment</Icon><span className="ml-2 float-left" style={{fontSize: '12px'}}>Betalingsoplysninger</span></span>}/>
                                <Tab label={<span><Icon className="float-left" fontSize="small">lock</Icon><span className="ml-2 float-left" style={{fontSize: '12px'}}>Skift kodeord</span></span>}/>
                                <Tab label={<span><Icon className="float-left" fontSize="small">delete</Icon><span className="ml-2 float-left" style={{fontSize: '12px'}}>Slet profil</span></span>}/>
                            </Tabs>
                        </Paper>
                        <CardContent className="flex flex-col items-center ">
                            {/*<h1 className="font-sans text-4xl text-gray-800 mt-20">Firmaoplysninger</h1>*/}
                            {selectedTab === 0 && <EditCorporationProfile changePageHandler={this.changePageHandler}/>}
                            {selectedTab === 2 && <ChangePassword changePageHandler={this.changePageHandler}/>}
                            {selectedTab === 3 && <DeleteProfile/>}

                        </CardContent>
                    </Card>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CorporationProfile);
