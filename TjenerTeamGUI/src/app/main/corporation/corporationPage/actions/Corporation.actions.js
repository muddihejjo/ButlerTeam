import * as actionsTypes from './ActionTypes';
import * as corporationApi from '../../../../services/api/CorporationUserApi';
import * as bookingApi from '../../../../services/api/BookingsApi'
import {showMessage} from "../../../../store/actions/fuse";
import snackbarConfig from "../../../../config/snackbarConfig";
import {logout, logoutUser, setUserData} from "../../../../auth/store/actions";

const createCorporationUserSuccess = (user) => {
    return {type: actionsTypes.CREATE_CORPORATION_USER_SUCCESS, user}
};
const createCorporationUserFailed = (error) => {
    return {type: actionsTypes.CREATE_CORPORATION_USER_FAILED, error}
};

const deleteCorporationSuccess = (user) => {
    return {type: actionsTypes.DELETE_CORPORATION_USER_SUCCESS, user}
};
const deleteCorporationFailed = (error) => {
    return {type: actionsTypes.DELETE_CORPORATION_USER_FAILED, error}
};

const updateCorporationSuccess = (user) => {
    return {type: actionsTypes.UPDATE_CORPORATION_USER_SUCCESS, user}
};
const updateCorporationFailed = (error) => {
    return {type: actionsTypes.UPDATE_CORPORATION_USER_FAILED, error}
};

const createCorporationAndBookingSuccess = (successMessage) => {
    return {type: actionsTypes.CREATE_CORPORATION_USER_AND_BOOKING_SUCCESS, successMessage}
};
const createCorporationAndBookingFailed = (error) => {
    return {type: actionsTypes.CREATE_CORPORATION_USER_AND_BOOKING_FAILED, error}
};

const changePasswordSuccess = () => {
    return {type: actionsTypes.CHANGE_CORPORATION_PASSWORD_SUCCESS}
};
const changePasswordFail = (error) => {
    return {type: actionsTypes.CHANGE_CORPORATION_PASSWORD_FAILED, error}
};

const changePage = () => {
    return {type: actionsTypes.CHANGE_PAGE}
};

export const changePassword = (passwordData, user) => {
    return (dispatch) => {
        return corporationApi.changePasswordCorporationUser(passwordData, user)
            .then((res) => {
                if (res.error) {
                    dispatch(showMessage({
                        message: res.error,
                        ...snackbarConfig.errorMessage
                    }));
                } else {
                    dispatch(showMessage({
                        message: res.success,
                        ...snackbarConfig.successMessage
                    }));
                    dispatch(changePasswordSuccess);
                    dispatch(changePage);
                }
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget gik galt. Kunne ikke updatere kodeordet',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(changePasswordFail(error))
            })
    }
};


export function createCorporationUser(user) {
    return function (dispatch) {
        return corporationApi.createCorporationUser(user)
            .then(user => {
                dispatch(showMessage({
                    message: 'Virksomhedsprofil oprettet',
                    ...snackbarConfig.successMessage
                }));
                dispatch(createCorporationUserSuccess(user))
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget gik galt ved oprettelsen af en ny virksomhed',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(createCorporationUserFailed(error))
            })
    }
}

export function deleteCorporationUser(user) {
    return function (dispatch) {
        return corporationApi.deleteCorporationUser(user)
            .then(user => {
                dispatch(deleteCorporationSuccess(user));
                dispatch(logoutUser());
                dispatch(logout());
                dispatch(showMessage({
                    message: 'Virksomhedsprofil slettet',
                    ...snackbarConfig.successMessage
                }));
            })
            .catch(error => {
                dispatch(deleteCorporationFailed(error))
                dispatch(showMessage({
                    message: 'Virksomhedsprofilen kunne ikke slettes',
                    ...snackbarConfig.errorMessage
                }));
            })
    }
}

export function updateCorporationUser(user) {
    return function (dispatch) {
        return corporationApi.updateCorporationUser(user)
            .then(user => {
                dispatch(setUserData(user));
                dispatch(updateCorporationSuccess(user));
                dispatch(showMessage({
                    message: 'Virksomhedsprofil updateret',
                    ...snackbarConfig.successMessage
                }));
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget gik galt ved updateringen af en profilen',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(updateCorporationFailed(error))
            })
    }
}

export function createCorporationAndBooking(Corporation, bookings) {
    return function (dispatch) {
        return corporationApi.createCorporationUser(Corporation)
            .then(user => {
                debugger;

                bookings.forEach(b => b.createdByCorporation_user = user.user._id);

                bookingApi.createBooking(bookings)
                    .then(bookings => {
                        dispatch(createCorporationAndBookingSuccess(bookings))
                        dispatch(showMessage({
                            message: 'Ny booking og bruger opret',
                            ...snackbarConfig.successMessage
                        }));

                    })
                    .catch(error => {
                        dispatch(createCorporationAndBookingFailed(error));
                        dispatch(showMessage({
                            message: 'Noget gik galt ved oprettelsen',
                            ...snackbarConfig.errorMessage
                        }));
                    })
            })
            .catch(error => {
                dispatch(createCorporationAndBookingFailed(error))
            })
    }
}


