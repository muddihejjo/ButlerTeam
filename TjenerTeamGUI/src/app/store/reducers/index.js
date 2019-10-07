import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';
import bookings from '../../main/corporation/booking/reducers/Bookings.reducer';
import corporations from "../../main/corporation/corporationPage/reducers/Corporation.reducer";
import employees from "../../main/employee/employeePage/reducers/Employee.reducer";

const createReducer = (asyncReducers) =>
    combineReducers({
            auth,
            bookings,
            fuse,
            employees,
            corporations,
            ...asyncReducers
    });

export default createReducer;
