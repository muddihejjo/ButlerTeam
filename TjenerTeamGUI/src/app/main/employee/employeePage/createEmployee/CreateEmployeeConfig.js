import CreateEmployeePage from "./CreateEmployee";


export const createEmployeeConfig = {
    settings: {
        layout: {
            config: {
                navbar         : {
                    display: false
                },
                toolbar        : {
                    display: false
                },
                footer         : {
                    display: false
                },
                leftSidePanel  : {
                    display: false
                },
                rightSidePanel : {
                    display: false
                }
            }
        }
    },
    routes  : [
        {
            path     : '/createEmployee',
            component: CreateEmployeePage
        }
    ]
};
