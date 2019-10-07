import React, {Component} from 'react';
import {Card, CardContent} from "@material-ui/core";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookingActions from "../../corporation/booking/actions/Booking.actions";
import Active from "../../corporation/corporationPage/homeCorporation/myBookings/components/active/Active";
import * as GlobalPaths from '../../../GlobalPaths';
import {FacebookButton} from "../../common/styled-components/CustomButtons";

class EFrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBookings: [],
            showSpinner: true
        }
    }

    componentDidMount() {
        this.props.actions.loadMyBookings(this.props.user);
    }

    componentWillReceiveProps(prevProps) {
        if (prevProps.bookings !== this.props.bookings) {
            const tempBookings = [...prevProps.bookings];
            this.setState({activeBookings: tempBookings, showSpinner: false});
        }
    }

    navigateToLogin = () => {
        this.props.history.push(GlobalPaths.employeeLogin)
    };


    changePage = (page) => {
        this.props.history.push(page)
    };


    render() {
        const {activeBookings, showSpinner} = this.state;

        return (
            <div className="flex flex-col custom-bg flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                <Card className="w-full max-w-lg mx-auto m-16 md:m-0" square>
                    <div className="flex md:justify-end justify-center">
                        <FacebookButton style={{color: 'white'}} className="min-w-200 min-h-44 m-10"
                                        onClick={() => this.changePage(GlobalPaths.employeeLogin)}>Begynd
                            nu</FacebookButton>
                    </div>
                    <CardContent className="flex flex-col">
                        <h1 className="font-sans text-gray-800 pl-24 pr-24" style={{fontSize: '40px'}}>Velkommen til
                            JobButler</h1>
                        <h4 className="font-sans text-gray-600 pl-40 pr-24" style={{fontSize: '20px'}}>Søger freelance
                            arbejde på få minutter</h4>
                        <Card className="p-24 max-w-lg"
                              style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
                            <Active
                                activeBookings={activeBookings}
                                selectedBookingHandler={this.navigateToLogin}
                                showSpinner={showSpinner}
                            />
                        </Card>
                    </CardContent>
                </Card>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        bookings: state.bookings.allBookings,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadMyBookings: bindActionCreators(bookingActions.loadAllBookings, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(EFrontPage);
