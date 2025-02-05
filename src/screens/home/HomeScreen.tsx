import { StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import Header from '@components/header/Header';
import scannerIcon from '@assets/images/scanner.png';
import { useTranslation } from 'react-i18next';
import Greetings from './components/Greetings';
import StartAssessment from './components/StartAssessment';
import { Margin } from '@styles/global';

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
    <ScrollView style={styles.container}>
      <Greetings />
      <StartAssessment />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: Margin.screen,
    marginBottom: 30,
  },
});
