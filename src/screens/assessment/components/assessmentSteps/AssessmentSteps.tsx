import { StyleSheet } from 'react-native';
import React from 'react';
import Wrapper from '@components/wrapper/Wrapper';
import AssessmentProgressStep from '@components/assessmentProgressStep/AssessmentProgressStep';

interface AssessmentStepsProps {
  currentStep: number;
}

const AssessmentSteps: React.FC<AssessmentStepsProps> = ({ currentStep }) => {
  return (
    <Wrapper style={styles.background}>
      <AssessmentProgressStep currentStep={currentStep} />
    </Wrapper>
  );
};

export default AssessmentSteps;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
  },
});
