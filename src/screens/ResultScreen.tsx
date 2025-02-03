import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@navigation/types';
import Header from '@components/header/Header';
import closeIcon from '@assets/close.png';
import { getFormatedDatetime } from '@utils/helper';

const ResultScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleBackToHomeClick = () => {
    navigation.replace('Home');
  };

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          header={{
            title: 'Result',
            iconPrefix: closeIcon,
            rightText: getFormatedDatetime(),
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
      <Text>ResultScreen</Text>
    </View>
  );
};

export default ResultScreen;
