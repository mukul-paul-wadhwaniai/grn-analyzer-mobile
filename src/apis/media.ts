import { AxiosInstance } from 'axios';
import { ApiError, handleApiError } from './apiError';

export const createMediaApi = async (
  axiosInstance: AxiosInstance,
  assessmentId: number,
  mediaIdx: number,
  mediaRetry: boolean,
) => {
  try {
    const response = await axiosInstance.post('/media/create-media', {
      assessment_id: assessmentId,
      media_index: mediaIdx,
      media_retry: mediaRetry,
    });
    console.log('/media/create-media response: ', response?.data);
    return response.data;
  } catch (error) {
    const apiError: ApiError = handleApiError(error);
    throw apiError;
  }
};

export const validateMediaApi = async (axiosInstance: AxiosInstance) => {
  try {
    const response = await axiosInstance.get('/media/validate-segment');
    return response.data;
  } catch (error) {
    const apiError: ApiError = handleApiError(error);
    throw apiError;
  }
};
