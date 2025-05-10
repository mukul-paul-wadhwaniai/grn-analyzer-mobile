import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import Header from '@components/header/Header';
import leftArrow from '@assets/images/arrow-left.png';
import TutorialModel from './components/modals/TutorialModel';
import BasePriceModel from './components/modals/BasePriceModel';
import { useTranslation } from 'react-i18next';
import Camera from './components/camera/Cemera';
import { Color } from '@styles/global';
import AssessmentSteps from './components/assessmentSteps/AssessmentSteps';
import UploadImages from './components/uploadImages/UploadImages';
import Button from '@components/button/Button';
import { useApis } from '@hooks/useApis';
import {
  CreateAssessmentResponse,
  CreateMediaResponse,
  defaultMediaArray,
  ImageStatus,
  Media,
} from './type';
import { uploadImageUsingPresignedUrl } from '@utils/helper';

const AssessmentScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();
  const { createAssessment, createMedia } = useApis();
  const [modalState, setModelState] = useState<number | undefined>(0);
  const [basePrice, setBasePrice] = useState<string>('');
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(1);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [capturedImages, setCaturedImages] =
    useState<Media[]>(defaultMediaArray);
  const [assessmentStep, setAssessmentStep] = useState<number>(0);
  const [createAssessmentResponse, setcCreateAssessmentResponse] =
    useState<CreateAssessmentResponse | null>(null);

  const onChangeBasePrice = (value: string) => {
    const filteredValue = value.match(/^\d*\.?\d*$/) ? value : '';
    setBasePrice(filteredValue);
  };

  const onBasePriceSubmit = async () => {
    setModelState(undefined);
    const createAssessmentResp = await createAssessment(Number(basePrice));
    if (createAssessmentResp) {
      setcCreateAssessmentResponse(createAssessmentResp);
    } else {
      Alert.alert('Failed to create Assessment!: ');
    }
  };

  const handleUploadImage = async () => {
    try {
      setCaturedImages(prev => {
        return prev.map((media: Media, index) =>
          index === currentImage
            ? { ...media, url: imageUri || '', status: ImageStatus.uploading }
            : media,
        );
      });
      const mediaPresignedUrl: CreateMediaResponse = await createMedia(
        createAssessmentResponse?.id || -1,
        currentImage,
        false,
      );

      setShowCamera(false);
      setCaturedImages(prev => {
        return prev.map((media: Media, index) =>
          index === currentImage
            ? { ...media, id: mediaPresignedUrl.media_id }
            : media,
        );
      });
      if (mediaPresignedUrl.upload_url && imageUri) {
        const mediaUploadResponse = await uploadImageUsingPresignedUrl(
          imageUri || '',
          mediaPresignedUrl.upload_url,
        );
        if (!mediaUploadResponse) {
          setCaturedImages(prev => {
            return prev.map((media: Media, index) =>
              index === currentImage
                ? { ...media, status: ImageStatus.validating }
                : media,
            );
          });
          const validateImageResponse = true;
          if (!validateImageResponse) {
            setTimeout(() => {
              setCaturedImages(prev => {
                return prev.map((media: Media, index) =>
                  index === currentImage
                    ? { ...media, status: ImageStatus.success }
                    : media,
                );
              });
            }, 2000);
          } else {
            setCaturedImages(prev => {
              return prev.map((media: Media, index) =>
                index === currentImage
                  ? { ...media, status: ImageStatus.rejected }
                  : media,
              );
            });
          }
        } else {
          setCaturedImages(prev => {
            return prev.map((media: Media, index) =>
              index === currentImage
                ? { ...media, status: ImageStatus.uploadFailed }
                : media,
            );
          });
        }
      } else {
        // Add code if failed to get preseinged url
      }
    } catch (error) {
      console.log('error during assessment: ', error);
    } finally {
      setImageUri(null);
    }
  };

  const handleDeleteAllMedia = () => {
    setCaturedImages(defaultMediaArray);
  };

  const handleAddImage = (index: number) => {
    if (index > 0 && capturedImages[index - 1].status === ImageStatus.empty)
      return;
    setShowCamera(true);
    setCurrentImage(index);
  };

  const handleRetakeImage = (index: number) => {
    console.log(index);
  };

  const handleRetryImage = (index: number) => {
    console.log(index);
  };

  const handleAnalyseButtonClick = () => {
    setAssessmentStep(prev => prev + 1);
  };

  console.log('media: ', capturedImages);

  return (
    <>
      <View style={styles.container}>
        <Header
          header={{
            title: t('HEADER.BACK_TO_HOME'),
            iconPrefix: leftArrow,
            leftHeaderClick:
              modalState === undefined
                ? () => navigation.replace('Home')
                : () => {},
          }}>
          <Header.LeftHeader />
          <Header.RightHeader />
        </Header>

        <ScrollView>
          <View style={styles.wrapper}>
            <AssessmentSteps currentStep={assessmentStep} />
            <UploadImages
              images={capturedImages}
              onAdd={handleAddImage}
              onRetake={handleRetakeImage}
              onRetry={handleRetryImage}
              onDeleteAll={handleDeleteAllMedia}
            />
          </View>
        </ScrollView>

        <View style={styles.analyseButtonWrapper}>
          <Button
            title={t('ASSESSMENT_SCREEN.ASSESSMENT.ANALYSE_BUTTON')}
            style={styles.analyseButton}
            onClick={handleAnalyseButtonClick}
          />
        </View>

        {modalState === 0 && (
          <TutorialModel onSubmit={() => setModelState(1)} />
        )}
        {modalState === 1 && (
          <BasePriceModel
            basePrice={basePrice}
            onChangeBasePrice={onChangeBasePrice}
            onSubmit={onBasePriceSubmit}
          />
        )}
        {modalState === 2 && (
          <BasePriceModel
            basePrice={basePrice}
            onChangeBasePrice={onChangeBasePrice}
            onSubmit={onBasePriceSubmit}
          />
        )}
        {showCamera && (
          <Camera
            ImageNumber={currentImage}
            imageUri={imageUri}
            setShowCamera={setShowCamera}
            setImageUri={setImageUri}
            upload={handleUploadImage}
          />
        )}
      </View>
      ;
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: Color.colorWhite,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 20,
  },
  analyseButtonWrapper: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  analyseButton: {
    width: '90%',
    margin: 'auto',
  },
});

export default AssessmentScreen;
