import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import { Color, FontSize } from '@styles/global';
import { useTranslation } from 'react-i18next';
import { validateNumbers } from '@utils/helper';
import { useAxios } from '@context/AxiosConfigContext';
import { useApis } from '@hooks/useApis';

const LanguageSelectionScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();
  const { login } = useApis();
  const { setJwtToken } = useAxios();
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');

  const handleMobileNumberChange = (value: string) => {
    if (validateNumbers(value, 10)) {
      setMobileNumber(value);
    }
  };

  const handleMobileOtpChange = (value: string) => {
    if (validateNumbers(value, 6)) {
      setOtp(value);
    }
  };

  const handleLogin = async () => {
    if (mobileNumber?.length >= 4 && otp?.length === 6) {
      const response = await login(mobileNumber, 'otp');
      if (response?.jwt_token) {
        setJwtToken(response?.jwt_token);
        navigation.replace('Home');
      } else {
        navigation.navigate('Registration');
      }
    }
  };

  return (
    <View style={[styles.container]}>
      <Text>{t('LOGIN_SCREEN.TITLE')}</Text>
      <TextInput
        style={styles.mobileInput}
        onChangeText={handleMobileNumberChange}
        value={mobileNumber}
        placeholder={t('LOGIN_SCREEN.MOBILE_NUMBER_LABEL')}
        placeholderTextColor="#9292929292"
        keyboardType="numeric"
      />
      <Button onPress={handleLogin} title={t('LOGIN_SCREEN.GENERATE_OTP')} />
      <TextInput
        style={styles.mobileInput}
        onChangeText={handleMobileOtpChange}
        value={otp}
        placeholder="00000"
        placeholderTextColor="#9292929292"
        keyboardType="numeric"
      />
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
  mobileInput: {
    marginTop: 20,
    borderWidth: 1,
    height: 60,
    width: '60%',
    paddingHorizontal: 20,
    fontSize: FontSize.size_xl,
    borderColor: '#E1E1E1',
    color: Color.secondaryGray,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
  },
});

export default LanguageSelectionScreen;
