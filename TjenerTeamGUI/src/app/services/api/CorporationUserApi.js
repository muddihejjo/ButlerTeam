import axios from 'axios';
import {handleError, handleResponse} from './ApiUtils';
import setup from "../../config/setup";

export function createCorporationUser(user){
    return axios.post(setup.apiEndPoint + '/corporation_users', user)
        .then(handleResponse)
        .catch(handleError)
}

export function deleteCorporationUser(user){
    return axios.delete(setup.apiEndPoint + '/corporation_users/' + user._id)
        .then(handleResponse)
        .catch(handleError)
}

export function updateCorporationUser(user){
    return axios.put(setup.apiEndPoint + '/corporation_users/' + user._id, user)
        .then(handleResponse)
        .catch(handleError)
}

export const changePasswordCorporationUser = (passwordData, user) => {
    return axios.put(setup.apiEndPoint + '/corporation_users/changePassword/' + user._id, passwordData)
        .then(handleResponse)
        .catch(handleError)
};
