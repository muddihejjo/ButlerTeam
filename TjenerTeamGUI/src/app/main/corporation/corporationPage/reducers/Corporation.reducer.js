import * as actionsTypes from '../actions/ActionTypes';

let initialState = {

    editCorporation: {
        userDeleteConfirm: "",
    },
    error: null,
    changePage: false
};

export default function corporation(state = initialState, action) {
    switch (action.type) {

        case actionsTypes.CHANGE_PAGE:
            return {...state, changePage: true};

        case actionsTypes.CREATE_CORPORATION_USER_SUCCESS:
            return {...state};

        case actionsTypes.CREATE_CORPORATION_USER_FAILED:
            return {...state, error: action.error};

        case actionsTypes.DELETE_CORPORATION_USER_SUCCESS:
            return {...state};

        case actionsTypes.DELETE_CORPORATION_USER_FAILED:
            return {...state, error: action.error};

        case actionsTypes.UPDATE_CORPORATION_USER_SUCCESS:
            return {...state};

        case actionsTypes.UPDATE_CORPORATION_USER_FAILED:
            return {...state, error: action.error};

        case actionsTypes.CREATE_CORPORATION_USER_AND_BOOKING_SUCCESS:
            return {...state};

        case actionsTypes.CREATE_CORPORATION_USER_AND_BOOKING_FAILED:
            return {...state, error: action.error};

        default:
            return {...state};
    }
}
