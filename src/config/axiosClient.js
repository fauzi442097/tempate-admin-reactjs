import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'https://gutendex.com';
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.withCredentials = false;

const getRequest = (url) => {
    return axiosClient.get(`/${url}`).then((response) => response);
}

const postRequest = (url, data) => {
    return axiosClient.get(`/${url}`, data).then((response) => response);
}

const patchRequest = (URL, data) => {
  return axiosClient.patch(`/${URL}`, data).then((response) => response);
}

const deleteRequest = (URL) => {
  return axiosClient.delete(`/${URL}`).then((response) => response);
};

export {
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest
};