import { useAxios } from '@context/AxiosConfigContext';
import { assessmentResultApi, createAssessmentApi } from 'src/apis/assessment';
import { firebaseAuthApi, loginApi, registerApi } from 'src/apis/auth';
import { createMediaApi, validateMediaApi } from 'src/apis/media';

export const useApis = () => {
  const { axiosInstance } = useAxios();

  const firebaseAuth = async (mobileNumber: string) => {
    return await firebaseAuthApi(axiosInstance, mobileNumber);
  };

  const login = async (
    mobileNumber: string,
    firebaseToken: string,
  ): Promise<any> => {
    return await loginApi(axiosInstance, mobileNumber, firebaseToken);
  };

  const register = async () => {
    return await registerApi(axiosInstance);
  };

  const createAssessment = async (basePrice: number) => {
    return await createAssessmentApi(axiosInstance, basePrice);
  };

  const assessmentResult = async () => {
    return await assessmentResultApi(axiosInstance);
  };

  const createMedia = async (
    assessmentId: number,
    mediaIdx: number,
    mediaRetry: boolean,
  ) => {
    return await createMediaApi(
      axiosInstance,
      assessmentId,
      mediaIdx,
      mediaRetry,
    );
  };

  const validateMedia = async () => {
    return await validateMediaApi(axiosInstance);
  };

  return {
    firebaseAuth,
    login,
    register,
    createAssessment,
    assessmentResult,
    createMedia,
    validateMedia,
  };
};
