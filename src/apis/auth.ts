import { AxiosInstance } from 'axios';
import { ApiError, handleApiError } from './apiError';

export const firebaseAuthApi = async (
  axiosInstance: AxiosInstance,
  mobileNumber: string,
) => {
  try {
    const response = await axiosInstance.post('/firebase/auth', {
      params: {
        mobile_number: mobileNumber,
      },
    });
    return response.data;
  } catch (error) {
    const apiError: ApiError = handleApiError(error); // Use the utility function
    throw apiError; // Throw a structured error
  }
};

export const loginApi = async (
  axiosInstance: AxiosInstance,
  mobileNumber: string,
  firebaseToken: string,
) => {
  try {
    console.log('baseurl: ', axiosInstance.defaults.baseURL);
    const response = await axiosInstance.post('/user/login', null, {
      params: {
        mobile_number: mobileNumber,
        firebase_token: firebaseToken,
      },
    });
    console.log('loginApi response: ', response?.data);
    return response.data;
  } catch (error) {
    const apiError: ApiError = handleApiError(error);
    console.log('loginApi error: ', apiError);
    throw apiError;
  }
};

export const registerApi = async (axiosInstance: AxiosInstance) => {
  try {
    const response = await axiosInstance.post('/user/register');
    return response.data;
  } catch (error) {
    const apiError: ApiError = handleApiError(error);
    throw apiError;
  }
};

// export const firebaseAuthApi = async (axiosInstance: AxiosInstance, mobileNumber: string) => {
//     return await apiRequestHandler(async () => {
//       const response = await axiosInstance.post('/firebase/auth', {
//         params: { mobile_number: mobileNumber }
//       });
//       return response.data;
//     });
//   };

//   export const loginApi = async (axiosInstance: AxiosInstance, mobileNumber: string, firebaseToken: string) => {
//     return await apiRequestHandler(async () => {
//       console.log('baseurl: ', axiosInstance.defaults.baseURL);
//       const response = await axiosInstance.post('/user/login', null, {
//         params: { mobile_number: mobileNumber, firebase_token: firebaseToken }
//       });
//       console.log('loginApi response: ', response?.data);
//       return response.data;
//     });
//   };

//   export const registerApi = async (axiosInstance: AxiosInstance) => {
//     return await apiRequestHandler(async () => {
//       const response = await axiosInstance.post('/user/register');
//       return response.data;
//     });
//   };
