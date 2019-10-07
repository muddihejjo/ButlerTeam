import React from 'react';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import {NextGreenButton} from "../../../../common/styled-components/CustomButtons";

const BookingModal = (props) => {

    const {
        displayModal,
        displayBookingModalHandler,
        addBooking,
        createBooking,
        bookingLength,
        loggedIn,
        nextStepBooking
    } = props;

    return (
        <div>
            <Dialog
                open={displayModal}
                onClose={displayBookingModalHandler}
            >
                <div>
                    <Card className="p-32">
                        <h2>Tak for din booking!</h2>
                        <h3 className="mt-24">{bookingLength === 3 ? "Du kan ikke tilføje flere bookings. Tryk videre" : "Du har nu følgende muligheder"}</h3>
                        <div className="flex flex-row my-2 ">
                            <div className="w-full sm:w-1/2 p-4">
                                <Button
                                    disabled={bookingLength === 3}
                                    onClick={addBooking}
                                    color="primary"
                                    variant="contained"
                                    className="w-full  sm:max-h-52 sm:min-h-52">
                                    <span style={{fontSize: "12px"}}>Tilføj ekstra personale+</span>
                                </Button>
                            </div>
                            <div className="w-full sm:w-1/2 p-4">
                                {loggedIn ?
                                    <NextGreenButton
                                        variant="contained"
                                        className="w-full min-h-72 sm:max-h-52 sm:min-h-52"
                                        style={{color: "white"}}
                                        onClick={createBooking}
                                    ><span style={{fontSize: "12px"}}>Opret</span></NextGreenButton>
                                    :
                                    <NextGreenButton
                                        variant="contained"
                                        className="w-full min-h-72 sm:max-h-52 sm:min-h-52"
                                        style={{color: "white"}}
                                        onClick={nextStepBooking}
                                    ><span style={{fontSize: "12px"}}>Videre</span></NextGreenButton>
                                }
                            </div>
                        </div>
                    </Card>
                </div>
            </Dialog>
        </div>
    );
};


export default BookingModal;
