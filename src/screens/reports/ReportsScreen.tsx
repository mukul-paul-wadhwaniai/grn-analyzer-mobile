import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Header from '@components/header/Header';
import { useNavigation } from '@react-navigation/native';
import leftArrow from '@assets/images/arrow-left.png';
import { NavigationProp } from '@navigation/types';

const ReportsScreen = () => {
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

  return (
    <View>
      <Text>ReportsScreen</Text>
    </View>
  );
};

export default ReportsScreen;
