import { View, TextStyle, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import { SupportedLanguages } from 'src/config';
import Button from '@components/button/Button';
import { Color, FontSize } from '@styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { i18next } from '../../../i18n';
import { useTranslation } from 'react-i18next';
import TextBox from '@components/text/TextBox';
import { getSelectedLanguage } from '@utils/helper';
import { useAxios } from '@context/AxiosConfigContext';

type LanguageKey = keyof typeof SupportedLanguages;

const LanguageSelectionScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();
  const { setLanguage } = useAxios();

  const handleLanguageSelection = async (selectedLanguageVal: LanguageKey) => {
    navigation.replace('Login');
    await AsyncStorage.setItem('language', selectedLanguageVal);
    i18next.changeLanguage(selectedLanguageVal);
    setLanguage(selectedLanguageVal);
  };

  useEffect(() => {
    const initLanguage = async () => {
      const selectedLangVal = await getSelectedLanguage();
      setSelectedLanguage(selectedLangVal);
    };
    initLanguage();
  }, []);

  return (
    <View style={[styles.container]}>
      <TextBox
        style={[styles.headerText]}
        text={t('LANGUAGE_SELECTION')}></TextBox>
      <View style={[styles.selectionWrapper]}>
        {(Object.keys(SupportedLanguages) as LanguageKey[]).map(langKey => (
          <View key={langKey} style={styles.buttonAndTextWrapper}>
            <Button
              onClick={() => handleLanguageSelection(langKey)}
              title={SupportedLanguages[langKey].key}
              style={[
                styles.button,
                selectedLanguage === langKey && styles.selectedButton,
              ]}
              labelStyle={[
                styles.buttonLabel,
                selectedLanguage === langKey && styles.selectedButtonLabel,
              ]}
            />
            <TextBox
              text={SupportedLanguages[langKey].value}
              style={[
                styles.fullLanguage,
                selectedLanguage === langKey && styles.selectedFullLanguage,
              ]}></TextBox>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
  },
  headerText: {
    fontWeight: '600',
    fontSize: FontSize.size_5xl,
    color: Color.secondaryGray,
    marginBottom: 20,
  } as TextStyle,
  selectionWrapper: {
    flexDirection: 'row',
    columnGap: 20,
  },
  buttonAndTextWrapper: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: Color.tertiaryGray,
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  buttonLabel: {
    fontSize: FontSize.size_4xl,
    color: Color.secondaryGray,
  },
  selectedButton: {
    backgroundColor: Color.primaryGray,
  },
  selectedButtonLabel: {
    color: Color.colorWhite,
  },
  fullLanguage: {
    fontSize: FontSize.size_xl,
    color: Color.secondaryGray,
  },
  selectedFullLanguage: {
    color: Color.primaryGray,
    fontWeight: '600',
  },
});

export default LanguageSelectionScreen;
