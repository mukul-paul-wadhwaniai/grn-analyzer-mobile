import { AxiosInstance } from 'axios';
import { ApiError, handleApiError } from './apiError';

export const createAssessmentApi = async (
  axiosInstance: AxiosInstance,
  basePrice: number,
) => {
  try {
    const response = await axiosInstance.post('/quality-assessment/create', {
      base_price: basePrice,
    });
    console.log('/quality-assessment/create response: ', response?.data);
    return response.data;
  } catch (error) {
    const apiError: ApiError = handleApiError(error); // Use the utility function
    throw apiError; // Throw a structured error
  }
};

export const assessmentResultApi = async (axiosInstance: AxiosInstance) => {
  try {
    const response = await axiosInstance.get('/quality-assessment/get-result');
    return response.data;
  } catch (error) {
    const apiError: ApiError = handleApiError(error); // Use the utility function
    throw apiError; // Throw a structured error
  }
};
