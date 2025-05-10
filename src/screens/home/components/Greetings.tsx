import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TextBox from '@components/text/TextBox';
import { FontSize } from '@styles/global';

const Greetings = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TextBox
        text={`${t('HOME_SCREEN.USER_GREET.HI')} Rohan, `}
        style={styles.text}
      />
      <TextBox
        text={`${t('HOME_SCREEN.USER_GREET.WELCOME')}`}
        style={[styles.text, styles.bold]}
      />
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingBottom: 15,
  },
  text: {
    fontSize: FontSize.size_xl,
  },
  bold: {
    fontWeight: '600',
  },
});
