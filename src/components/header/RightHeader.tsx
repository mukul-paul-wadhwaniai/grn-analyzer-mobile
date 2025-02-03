import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useHeaderContext } from './Header';
import Button from '@components/button/Button';
import { Color, FontSize } from '@styles/global';

const RightHeader = () => {
  const { header } = useHeaderContext();
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        iconSuffix={header.iconSuffix}
        iconStyle={styles.icon}
        disabled={header.rightDisabled}
        onClick={header.rightHeaderClick}
      />
      {header.rightText && <Text style={styles.text}>{header.rightText}</Text>}
    </View>
  );
};

export default RightHeader;

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
    fontSize: FontSize.size_sm,
    color: Color.primaryGray,
    backgroundColor: Color.tertiaryGray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
