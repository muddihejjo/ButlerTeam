import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {CardContent, Icon} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';
import 'moment/locale/da';
import './Active.css';

const Active = (props) => {

    const {
        activeBookings,
        showSpinner,
        selectedBookingHandler,
    } = props;

    return (
        <>

            {showSpinner &&

            <div className="flex flex-col my-auto items-center bgimg bg-cover">
                <CircularProgress className="mt-40" size={60}/>
                <h3 className="mt-10">Indlæser bookings</h3>
            </div>
            }

            {(!showSpinner && activeBookings.length > 0) &&
            <>
                {activeBookings.map((b, i) => (
                    <Card onClick={() => selectedBookingHandler(b)} key={i} className="min-h-160 m-5 booking">
                        <CardContent>
                            {/* DATE */}
                            <div className="w-full mt-20">
                                <div className="flex flex-col sm:flex-row">

                                    <div className="flex flex-col justify-center sm:w-1/6 sm:justify-start">
                                        <div className="flex justify-center">
                                            <span
                                                className="day-header">{moment(b.date).format('dddd').slice(0, 3).toUpperCase()}</span>
                                        </div>
                                        <div className="flex justify-center">
                                            <Typography color="textSecondary" gutterBottom>
                                            <span
                                                className="date-header">{moment(b.date).format('ll').slice(1, 2).toUpperCase() === '.' ?
                                                moment(b.date).format('ll').slice(0, 1).toUpperCase() : moment(b.date).format('ll').slice(0, 2).toUpperCase()}
                                            </span>
                                            </Typography>
                                        </div>
                                        <div className="flex justify-center">
                                            <span
                                                className="month-header">{moment(b.date).format('ll').slice(1, 2).toUpperCase() === '.' ?
                                                moment(b.date).format('ll').slice(3, 6).toUpperCase() : moment(b.date).format('ll').slice(4, 7).toUpperCase()}
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="flex flex-col justify-center sm:pl-12 sm:w-3/6 sm:justify-start mb-10 sm:pl-10">
                                        <div className="">
                                                <span
                                                    className="text-15 sm:text-20 font-bold">{b.arrangementType}</span>
                                        </div>

                                        <div className="min-w-full">
                                            <span
                                                className="text-10 sm:text-15 font-bold">{b.startTime + " - " + b.endTime}</span>
                                            <span
                                                className="text-10 sm:text-15 font-bold">{" + " + b.transportWage + " time transport"}</span>
                                        </div>
                                        <div className="mt-5 min-w-full ">
                                            <p className="text-10 sm:text-12">{b.hourlyWage + "/t [" + b.wageTotal + "] (inkl. feriepenge, " + b.priceTotal + " DKK)"}</p>
                                        </div>
                                        <div className="min-w-full mt-3">
                                            <Icon fontSize="default" className="float-left">room</Icon>
                                            <p className="text-10 sm:text-12 pt-2 float-left">{b.address + ", " + b.zipCode + " "}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center sm:w-2/6 sm:justify-start ">

                                        <div className="min-w-full">
                                            <div className="">
                                                <span
                                                    className="text-15 sm:text-20 font-bold">{b.numberOfStaff + " " + b.staffType}</span>
                                            </div>
                                        </div>
                                        <div className="min-w-full">
                                            <div className="">
                                                <span
                                                    className="text-10 sm:text-15 font-bold">{b.selectedStaff.length + " Booket"}</span>
                                            </div>
                                            <div className="">
                                                <span
                                                    className="text-10 sm:text-15">{b.appliedStaff.length + " Ansøgere"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                ))}
            </>
            }
            {(!showSpinner && activeBookings.length === 0) &&

            <div className="flex justify-center mt-40">
                <p className="text-20 font-600 ">Ingen bookings oprettet endnu</p>
            </div>

            }
        </>
    );
};

export default Active;
