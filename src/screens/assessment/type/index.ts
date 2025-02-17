export interface CreateAssessmentResponse {
  id: number;
  language: string;
  base_price: number;
  feedback_rating: number | null;
  feedback_message: string | null;
  created_at: string;
  updated_at: string;
}

export enum ImageStatus {
  empty,
  uploading,
  uploadFailed,
  validating,
  success,
  rejected,
}

export interface Media {
  id: number;
  url: string;
  retry: boolean;
  status: ImageStatus;
}

export const defaultMediaArray: Media[] = [
  { id: -1, url: '', retry: false, status: ImageStatus.empty },
  { id: -1, url: '', retry: false, status: ImageStatus.empty },
  { id: -1, url: '', retry: false, status: ImageStatus.empty },
];

export interface CreateMediaResponse {
  media_id: number;
  upload_url: string;
}
