import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Color, FontSize } from '@styles/global';
import Button from '@components/button/Button';
import TextBox from '@components/text/TextBox';
import closeIcon from '@assets/images/close.png';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  imageNumber: number;
  close: () => void;
}

const Header: React.FC<HeaderProps> = ({ imageNumber, close = () => {} }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Button
        iconPrefix={closeIcon}
        style={styles.closeIconWrapper}
        iconStyle={[styles.closeIcon]}
        onClick={close}
      />
      <TextBox
        text={`${t('ASSESSMENT_SCREEN.CAPTURE_IMAGE.IMAGE')} ${imageNumber}`}
        style={styles.imageText}
      />
      <View style={styles.headerRightIcon}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    left: 20,
    right: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeIconWrapper: {
    backgroundColor: 'transparent',
  },
  closeIcon: {
    tintColor: Color.colorWhite,
    width: FontSize.size_5xl,
    height: FontSize.size_5xl,
  },
  imageText: {
    fontSize: FontSize.sixe_2xl,
    color: Color.colorWhite,
  },
  headerRightIcon: {
    width: 30,
  },
});
