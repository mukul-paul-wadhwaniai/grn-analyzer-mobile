import React from 'react';
import TextBox from '@components/text/TextBox';
import Wrapper from '@components/wrapper/Wrapper';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import AssessmentProgressStep from '@components/assessmentProgressStep/AssessmentProgressStep';
import { Color, FontSize } from '@styles/global';
import Button from '@components/button/Button';
import imageIcon from '@assets/images/image.png';
import Image from '@components/image/Image';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';

const StartButtonCover = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp>();

  return (
    <Wrapper
      components={{
        section1: (
          <React.Fragment>
            <View style={styles.imageContainer}>
              <Image src={imageIcon} style={styles.startAssessmentImage} />
            </View>
            <Button
              title={t('HOME_SCREEN.START_ASSESSMENT.START_ASSESSMENT')}
              style={{ width: '100%' }}
              onClick={() => navigation.navigate('Assessment')}
            />
          </React.Fragment>
        ),
        style: [styles.startAssessmentCover],
      }}>
      <Wrapper.Section1 />
    </Wrapper>
  );
};

const StartAssessment = () => {
  const { t } = useTranslation();
  return (
    <Wrapper
      components={{
        section1: (
          <React.Fragment>
            <TextBox
              text={t('HOME_SCREEN.START_ASSESSMENT.TITLE')}
              style={[styles.title]}
            />
            <AssessmentProgressStep />
            <StartButtonCover />
          </React.Fragment>
        ),
        style: styles.flex1,
      }}>
      <Wrapper.Section1 />
    </Wrapper>
  );
};

export default StartAssessment;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    fontWeight: '500',
    paddingTop: 30,
    paddingBottom: 10,
  },
  startAssessmentCover: {
    backgroundColor: Color.colorWhite,
  },
  imageContainer: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startAssessmentImage: {
    height: 35,
    width: 35,
  },
});
