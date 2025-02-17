import { View, StyleSheet } from 'react-native';
import React from 'react';
import Image from '@components/image/Image';
import uploadIcon from '@assets/images/check.png';
import retakeIcon from '@assets/images/refresh.png';
import { Color, FontSize } from '@styles/global';
import Button from '@components/button/Button';
import { useTranslation } from 'react-i18next';

interface PreviewProps {
  imageUri: string;
  retakeImage: () => void;
  upload: () => void;
}

const Preview: React.FC<PreviewProps> = ({
  imageUri,
  retakeImage = () => {},
  upload = () => {},
}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Image src={{ uri: imageUri }} style={styles.previewImage} />
      <View style={styles.buttonsWrapper}>
        <Button
          title={t('ASSESSMENT_SCREEN.CAPTURE_IMAGE.RETAKE')}
          iconPrefix={retakeIcon}
          onClick={retakeImage}
          style={[styles.actionButton, styles.retakeButton]}
          labelStyle={[styles.buttonText, styles.retakeText]}
          iconStyle={[styles.actionIcon, styles.retakeIcon]}
        />
        <Button
          title={t('ASSESSMENT_SCREEN.CAPTURE_IMAGE.UPLOAD')}
          iconPrefix={uploadIcon}
          onClick={upload}
          style={[styles.actionButton, styles.uploadButton]}
          labelStyle={[styles.buttonText, styles.uploadText]}
          iconStyle={[styles.actionIcon, styles.uploadIcon]}
        />
      </View>
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  buttonsWrapper: {
    position: 'absolute',
    bottom: 50,
    left: 35,
    right: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '45%',
    height: 60,
    flexDirection: 'row',
    columnGap: 15,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Color.colorWhite,
  },
  retakeButton: {},
  uploadButton: {
    backgroundColor: Color.colorWhite,
  },
  buttonText: {
    fontSize: FontSize.size_lg,
    fontWeight: '500',
  },
  retakeText: {
    color: 'white',
  },
  uploadText: {
    color: Color.darkBlack,
  },
  actionIcon: {
    width: FontSize.size_3xl,
    height: FontSize.size_3xl,
  },
  retakeIcon: {},
  uploadIcon: {
    tintColor: Color.darkBlack,
  },
});
