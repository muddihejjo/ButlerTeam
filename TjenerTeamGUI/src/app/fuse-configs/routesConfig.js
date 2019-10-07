import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {LoginConfig} from "../main/corporation/login/LoginConfig";
import {CreateBookingConfig} from "../main/corporation/booking/createBooking/CreateBookingConfig";
import {CreateCorporationConfig} from "../main/corporation/corporationPage/createCorporation/CreateCorporationConfig";
import {FrontPageConfig} from "../main/common/frontpage/FrontPageConfig";
import {HomeCorporationConfig} from "../main/corporation/corporationPage/homeCorporation/HomeCorporationConfig";
import {EditBookingConfig} from "../main/corporation/booking/editBooking/EditBookingConfig";
import {CorporationProfileConfig} from "../main/corporation/corporationPage/profile/CorporationProfileConfig";
import {EmployeeFrontPageConfig} from "../main/employee/frontPage/EmployeeFrontPageConfig";
import {EmployeeLoginConfig} from "../main/employee/employeePage/employeeLogin/EmployeeLoginConfig";
import {EmployeeHomePageConfig} from "../main/employee/employeePage/homeEmployee/EmployeeHomePageConfig";
import {createEmployeeConfig} from "../main/employee/employeePage/createEmployee/CreateEmployeeConfig";


const routeConfigs = [
    ExampleConfig,
    LoginConfig,
    CreateBookingConfig,
    CreateCorporationConfig,
    FrontPageConfig,
    HomeCorporationConfig,
    EditBookingConfig,
    EmployeeFrontPageConfig,
    EmployeeLoginConfig,
    EmployeeHomePageConfig,
    createEmployeeConfig,
    CorporationProfileConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        component: () => <Redirect to="/frontPage"/>
    }
];

export default routes;
