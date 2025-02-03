import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import Header from '@components/header/Header';
import scannerIcon from '@assets/scanner.png';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          header={{
            title: t('HOME_SCREEN.HEADER'),
            iconPrefix: scannerIcon,
          }}>
          <Header.LeftHeader />
          <Header.RightHeader />
        </Header>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Assessment')}
        title="Go to Assessment"
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Result')}
        title="Go to Result"
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Reports')}
        title="Go to Reports"
      />
    </View>
  );
};

export default HomeScreen;
