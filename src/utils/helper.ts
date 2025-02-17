import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

export const getFormatedDatetime = () => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  return now.toLocaleString('en-GB', options).replace(',', ' |');
};

export const getSelectedLanguage = async (): Promise<string | null> => {
  const language = await AsyncStorage.getItem('language');
  return language ? language : 'en'; // Return 'en' as the default language
};

export const validateNumbers = (value: string, length: number) => {
  return value === '' || (/^\d+$/.test(value) && value.length <= length);
};

export const uploadImageUsingPresignedUrl = async (
  imageUri: string,
  presignedUrl: string,
) => {
  try {
    if (!imageUri) {
      throw new Error('media doesnot exists');
    }
    const fileData = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const binaryData = await Buffer.from(fileData, 'base64');
    await axios.put(presignedUrl, binaryData, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Length': binaryData.length,
      },
    });
    console.log('Image uploaded successfully!');
    return true;
  } catch (error) {
    console.error('Upload failed:', error);
    return false;
  }
};
