import axios from 'axios';

export interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

export const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    return {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    };
  } else {
    return {
      message: 'An unknown error occurred',
    };
  }
};

export const apiRequestHandler = async <T>(
  callback: () => Promise<T>,
): Promise<T> => {
  try {
    return await callback();
  } catch (error) {
    const apiError: ApiError = handleApiError(error);
    throw apiError;
  }
};
