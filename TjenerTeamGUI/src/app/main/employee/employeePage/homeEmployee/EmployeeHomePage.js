import React, {Component} from 'react';
import {Card, CardContent} from "@material-ui/core";
import './EmployeeHomePage.css';
import AppHeader from "../../../common/header/Header";
import './EmployeeHomePage.css';
import StatusBar from "./components/StatusBar";
import AdminConfirmation from "./components/AdminConfirmation";
import {connect} from "react-redux";
import * as bookingActions from "../../../corporation/booking/actions/Booking.actions";
import {bindActionCreators} from "redux";
import Active from "../../../corporation/corporationPage/homeCorporation/myBookings/components/active/Active";

class EPage extends Component {

    componentDidMount() {
        this.props.actions.loadBookings();
    }

    selectedBookingHandler = () => {
        alert('Hello world')
    };


    render() {
        const {bookings} = this.props;

        return (
            <div className="flex flex-col custom-bg flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                <Card className="w-full max-w-lg mx-auto m-16 md:m-0" square>
                    <AppHeader
                        changePage={this.changePage}
                    />
                    <CardContent className="flex flex-col">
                        <h1 className="font-sans text-gray-800 pl-24 pr-24" style={{fontSize: '40px'}}>Velkommen til
                            JobButler</h1>
                        <p className="text-16 pl-28">Søg freelance arbejde på få minutter</p>
                        <StatusBar/>
                        <AdminConfirmation/>
                        {/*<p className="text-20 mb-10 font-bold text-teal-darkest">Venter på godkendelse fra admin</p>*/}

                        <Active
                            selectedBookingHandler={this.selectedBookingHandler}
                            showSpinner={bookings.length <= 0}
                            activeBookings={bookings.length > 0 ? bookings : []}
                        />
                    </CardContent>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bookings: state.bookings.allBookings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadBookings: bindActionCreators(bookingActions.loadAllBookings, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EPage);
