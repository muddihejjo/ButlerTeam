import EditProfile from "./CorporationProfile";
import authRoles from "../../../../auth/authRoles";

export const CorporationProfileConfig = {
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
    // auth: authRoles.corporation,
    routes  : [
        {
            // path     : '/corporationProfile',
            component: EditProfile
        }
    ]
};
