import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Wrapper from '@components/wrapper/Wrapper';
import TextBox from '@components/text/TextBox';
import { Color, FontSize } from '@styles/global';
import { useTranslation } from 'react-i18next';
import ImageBox from './ImageBox';
import Button from '@components/button/Button';
import { ImageStatus, Media } from '@screens/assessment/type';
import addIcon from '@assets/images/addIcon.png';
import warningIcon from '@assets/images/warning.png';
import rejectedIcon from '@assets/images/dangerTriangleIcon.png';
import successIcon from '@assets/images/check.png';

interface UploadImagesProps {
  images: Media[];
  onAdd: (idx: number) => void;
  onRetake: (idx: number) => void;
  onRetry: (idx: number) => void;
  onDeleteAll: () => void;
}

const getImageStatusText = (media: Media) => {
  switch (media.status) {
    case ImageStatus.uploading:
      return 'ASSESSMENT_SCREEN.ASSESSMENT.UPLOADING';
    case ImageStatus.uploadFailed:
      return 'ASSESSMENT_SCREEN.ASSESSMENT.UPLOADING';
    case ImageStatus.validating:
      return 'ASSESSMENT_SCREEN.ASSESSMENT.VALIDATING';
    case ImageStatus.success:
      return 'ASSESSMENT_SCREEN.ASSESSMENT.SUCCESSFUL';
    case ImageStatus.rejected:
      return 'ASSESSMENT_SCREEN.ASSESSMENT.REJECTED';
    case ImageStatus.empty:
      return '';
  }
};

const getMidImageIcon = (media: Media) => {
  switch (media.status) {
    case ImageStatus.empty:
      return addIcon;
    case ImageStatus.uploading:
      return;
    case ImageStatus.uploadFailed:
      return warningIcon;
    case ImageStatus.validating:
      return;
    case ImageStatus.rejected:
      return rejectedIcon;
  }
};

const isAllImagesRejected = (images: Media[]) => {
  return images.every((media: Media) => media.status === ImageStatus.rejected);
};

const UploadImages: React.FC<UploadImagesProps> = ({
  images,
  onAdd = () => {},
  onDeleteAll = () => {},
}) => {
  const imageNum = 1;
  const { t } = useTranslation();
  return (
    <Wrapper>
      <ScrollView>
        <View style={styles.container}>
          <TextBox
            text={`${t('ASSESSMENT_SCREEN.ASSESSMENT.UPLOAD_IMAGES')} (${imageNum} / ${images.length})`}
            style={[styles.title]}
          />
          <TextBox
            text={t('ASSESSMENT_SCREEN.ASSESSMENT.UPLOAD_IMAGES_HEADING')}
            style={[styles.heading]}
          />
          <View style={styles.imagesContainer}>
            {images.map((image, index) => (
              // <View>
              //   <TextBox text={(index + 1).toString()} />
              <ImageBox
                key={index}
                title={t(getImageStatusText(image))}
                titleIcon={
                  images[index].status === ImageStatus.success
                    ? successIcon
                    : undefined
                }
                image={image.url}
                imageIcon={getMidImageIcon(image)}
                imageIconClickable={image.status === ImageStatus.empty}
                loader={
                  image.status === ImageStatus.uploading ||
                  image.status === ImageStatus.validating
                }
                onClick={() => onAdd(index)}
              />
              // </View>
            ))}
          </View>
          {isAllImagesRejected(images) && (
            <View style={styles.actionable}>
              <TextBox text="Validation Failed" />
              <Button
                title={t('ASSESSMENT_SCREEN.ASSESSMENT.DELETE_RETAKE')}
                onClick={onDeleteAll}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default UploadImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: FontSize.size_2xl,
    fontWeight: '700',
    color: Color.primaryGray,
  },
  heading: {
    fontSize: FontSize.size_lg,
  },
  imagesContainer: {
    flex: 1,
    width: '100%',
    columnGap: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionable: {
    paddingVertical: 10,
    alignItems: 'center',
    rowGap: 20,
  },
});
