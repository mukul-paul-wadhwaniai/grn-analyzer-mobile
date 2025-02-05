import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import Header from '@components/header/Header';
import leftArrow from '@assets/images/arrow-left.png';

const AssessmentScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleBackToHomeClick = () => {
    navigation.replace('Home');
  };

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          header={{
            title: 'Back to Home',
            iconPrefix: leftArrow,
            leftHeaderClick: handleBackToHomeClick,
          }}>
          <Header.LeftHeader />
          <Header.RightHeader />
        </Header>
      ),
    });
  }, [navigation]);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AssessmentScreen;
