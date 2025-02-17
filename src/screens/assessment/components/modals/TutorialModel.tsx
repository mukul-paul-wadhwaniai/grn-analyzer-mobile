import { View, StyleSheet } from 'react-native';
import React from 'react';
import BottomModal from '@components/modal/BottomModal';
import TextBox from '@components/text/TextBox';
import { useTranslation } from 'react-i18next';
import { Color, FontSize } from '@styles/global';

type Step = {
  id: number;
  label: string;
};

const steps: Step[] = [
  {
    id: 0,
    label: 'ASSESSMENT_SCREEN.TUTORIAL.STEP1',
  },
  {
    id: 1,
    label: 'ASSESSMENT_SCREEN.TUTORIAL.STEP2',
  },
  {
    id: 2,
    label: 'ASSESSMENT_SCREEN.TUTORIAL.STEP3',
  },
];

interface TutorialModelProps {
  onSubmit: () => void;
}

const TutorialModel: React.FC<TutorialModelProps> = ({
  onSubmit = () => {},
}) => {
  const { t } = useTranslation();
  return (
    <BottomModal
      isVisible={true}
      onClose={onSubmit}
      buttonLabel={t('ASSESSMENT_SCREEN.TUTORIAL.GET_STARTED')}>
      <View style={styles.container}>
        <TextBox
          text={t('ASSESSMENT_SCREEN.TUTORIAL.TITLE')}
          style={styles.title}
        />
        {steps.map((step: Step) => (
          <View style={styles.centerSpaceBetween} key={step.id}>
            <View style={styles.circle}></View>
            <TextBox text={t(step.label)} style={styles.stepsLabel} />
          </View>
        ))}
      </View>
    </BottomModal>
  );
};

export default TutorialModel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  centerSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginTop: 25,
    width: '100%',
  },
  title: {
    fontWeight: '700',
    fontSize: FontSize.size_lg,
  },
  stepsLabel: {
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    fontSize: FontSize.size_base,
  },
  circle: {
    backgroundColor: Color.tertiaryGray,
    height: 45,
    width: 45,
    borderRadius: 25,
  },
});
