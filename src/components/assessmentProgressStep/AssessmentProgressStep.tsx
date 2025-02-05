import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  type ImageSourcePropType,
} from 'react-native';
import cameraIcon from '@assets/images/camera.png';
import assessmentIcon from '@assets/images/assessment.png';
import resultIcon from '@assets/images/result.png';
import { Color, FontSize } from '@styles/global';
import TextBox from '@components/text/TextBox';
import { useTranslation } from 'react-i18next';

type Step = {
  id: number;
  label: string;
  image: ImageSourcePropType;
};

type AssessmentProgressStepProps = {
  currentStep?: number;
};

const steps: Step[] = [
  {
    id: 0,
    label: 'HOME_SCREEN.START_ASSESSMENT.UPLOAD_IMAGE',
    image: cameraIcon,
  },
  {
    id: 1,
    label: 'HOME_SCREEN.START_ASSESSMENT.ASSESSMENT',
    image: assessmentIcon,
  },
  {
    id: 2,
    label: 'HOME_SCREEN.START_ASSESSMENT.RESULT',
    image: resultIcon,
  },
];

const AssessmentProgressStep: React.FC<AssessmentProgressStepProps> = ({
  currentStep = 0,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {index !== 0 && <View style={styles.dashedLine} />}

          <View style={styles.stepContainer}>
            <View
              style={[
                styles.stepCircle,
                currentStep === step.id && styles.activeStep,
              ]}>
              <Image
                source={step.image}
                style={[
                  styles.stepImage,
                  currentStep === step.id && styles.activeImage,
                ]}
                resizeMode="contain"
              />
            </View>
            <TextBox text={t(step.label)} style={styles.stepLabel}></TextBox>
          </View>
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  stepContainer: {
    alignItems: 'center',
    width: 100,
  },
  stepCircle: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: Color.tertiaryGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeStep: {
    backgroundColor: Color.tertiaryGray,
    borderWidth: 1,
    borderColor: Color.primaryGray,
  },
  stepImage: {
    width: 25,
    height: 25,
    tintColor: Color.colorGray_50,
  },
  activeImage: {
    tintColor: Color.primaryGray,
  },
  stepLabel: {
    marginTop: 6,
    fontSize: FontSize.size_sm,
    fontWeight: '400',
  },
  dashedLine: {
    width: 35,
    // height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Color.colorGrayLite,
    marginTop: -10,
  },
});

export default AssessmentProgressStep;
