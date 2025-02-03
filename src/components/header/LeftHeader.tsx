import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useHeaderContext } from './Header';
import Button from '@components/button/Button';
import { Color, FontSize } from '@styles/global';

const LeftHeader = () => {
  const { header } = useHeaderContext();
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        iconPrefix={header.iconPrefix}
        iconStyle={styles.icon}
        disabled={header.leftDisabled}
        onClick={header.leftHeaderClick}
      />
      {header.title && <Text style={styles.text}>{header.title}</Text>}
    </View>
  );
};

export default LeftHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Color.colorWhite,
  },
  text: {
    fontSize: FontSize.size_lg,
    color: Color.primaryGray,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
