import React, {Component} from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Active from "./components/active/Active";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookingActions from "../../../booking/actions/Booking.actions";
import Dialog from "@material-ui/core/Dialog";
import ShowBooking from "./components/active/ShowBooking";
import {DialogContent} from "@material-ui/core";

class MyBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
            showDeleteModal: false,
            bookings: [],
            showSpinner: true
        }
    }

    editBookingHandler = () => {
        this.props.nextPage()
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.bookings !== this.props.bookings) {
            this.setState({bookings: nextProps.bookings, showSpinner: false})
        }
    }

    deleteBookingHandler = () => {
        this.props.actions.deleteBooking(this.props.booking);
        this.setState({showModal: false, showDeleteModal: false})
    };

    showDeleteModalHandler = () => {
        this.setState({showDeleteModal: !this.state.showDeleteModal})
    };

    showModalHandler = () => {
        this.setState({showModal: !this.state.showModal})
    };

    selectedBookingHandler = (book) => {
        this.setState({booking: book, showModal: true}, function () {
            this.props.actions.selectBooking(book)
        });
    };

    componentDidMount() {
        this.props.actions.loadMyBookings(this.props.user);
    }

    changeHandler = (e, tab) => {
        this.setState({selectedTab: tab});
    };

    render() {
        const {bookings, showSpinner} = this.state;
        const {selectedTab, showModal, showDeleteModal} = this.state;
        return (
            <div>
                <Tabs TabIndicatorProps={{style: {backgroundColor: "white"}}} className="mt-5" variant="scrollable"
                      value={selectedTab} onChange={this.changeHandler}>
                    <Tab label={<span style={{fontSize: '11px'}}>Aktive</span>}/>
                    <Tab label={<span style={{fontSize: '11px'}}>Venter Godkendelse</span>}/>
                    <Tab label={<span style={{fontSize: '11px'}}>Kladde</span>}/>
                </Tabs>
                {selectedTab === 0 &&
                <Active
                    selectedBookingHandler={this.selectedBookingHandler}
                    showSpinner={showSpinner}
                    activeBookings={bookings}
                />}
                {selectedTab === 1 && <h1>Venter Godkendelse</h1>}
                {selectedTab === 2 && <h1>Kladder</h1>}

                <Dialog
                    onClose={this.showModalHandler}
                    croll={'paper'}
                    aria-labelledby="simple-dialog-title"
                    open={showModal}>
                    <DialogContent style={{padding: '0px', margin: '0px'}} className="w-full" >
                        <ShowBooking
                            editBookingHandler={this.editBookingHandler}
                            booking={this.props.booking}
                            showDeleteModal={showDeleteModal}
                            showDeleteModalHandler={this.showDeleteModalHandler}
                            deleteBookingHandler={this.deleteBookingHandler}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bookings: state.bookings.allBookings,
        booking: state.bookings.booking,
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadMyBookings: bindActionCreators(bookingActions.loadCorporationBookings, dispatch),
            deleteBooking: bindActionCreators(bookingActions.deleteBooking, dispatch),
            selectBooking: bindActionCreators(bookingActions.selectBooking, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBookings);
