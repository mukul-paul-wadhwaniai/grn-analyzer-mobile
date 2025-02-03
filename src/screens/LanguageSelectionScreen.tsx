import { View, Text, TextStyle, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import { SupportedLanguages } from 'src/config';
import Button from '@components/button/Button';
import { Color, FontSize } from '@styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { i18next } from '../../i18n';
import { useTranslation } from 'react-i18next';

type LanguageKey = keyof typeof SupportedLanguages;

const LanguageSelectionScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp>();

  const handleLanguageSelection = async (selectedLanguage: LanguageKey) => {
    navigation.replace('Login');
    await AsyncStorage.setItem('language', selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const language = AsyncStorage.getItem('language');
    // if (language) {
    //   navigation.replace("Login")
    // }
    console.log(language);
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.headerText]}>{t('LANGUAGE_SELECTION')}</Text>
      <View style={[styles.selectionWrapper]}>
        {(Object.keys(SupportedLanguages) as LanguageKey[]).map(langKey => (
          <View key={langKey}>
            <Button
              onClick={() => handleLanguageSelection(langKey)}
              title={SupportedLanguages[langKey].key}
            />
            <Text>{SupportedLanguages[langKey].value}</Text>
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
    fontWeight: '500',
    fontSize: FontSize.size_lg,
  } as TextStyle,
  selectionWrapper: {
    flexDirection: 'row',
    columnGap: 20,
  },
});

export default LanguageSelectionScreen;
