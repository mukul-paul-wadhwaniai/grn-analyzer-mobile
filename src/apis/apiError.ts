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
