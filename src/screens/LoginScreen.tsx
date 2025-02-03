import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import { Color } from '@styles/global';
import { useTranslation } from 'react-i18next';

const LanguageSelectionScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();
  const handleLogin = () => {
    navigation.replace('Home');
  };
  return (
    <View style={[styles.container]}>
      <Text>{t('LOGIN_SCREEN.TITLE')}</Text>
      <Button onPress={handleLogin} title={t('LOGIN_SCREEN.VERIFY')} />
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
});

export default LanguageSelectionScreen;
