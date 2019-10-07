import E_FrontPage from './EmployeeFrontPage';

export const EmployeeFrontPageConfig = {
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
            path     : '/employeeFrontPage',
            component: E_FrontPage
        }
    ]
};
