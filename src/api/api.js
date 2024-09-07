import axios from 'axios';
import {BaseURL} from './ApiConstant';

export const postApiCall = async (apiPoint,data) => {
  console.log("apiPoint",apiPoint)
  console.log("data",data)
  await axios
    .post(BaseURL + apiPoint, {
      data,
    })
    .then(function (response) {
      console.log("res",response)
      return response;
    })
    .catch(function (error) {
      console.log("error",error)
      return error;
    });
};

export const getApiCall = async () => {
  await axios
    .get(BaseURL + apiPoint)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
