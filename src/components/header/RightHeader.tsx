import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useHeaderContext } from './Header';
import Button from '@components/button/Button';
import { Color, FontSize } from '@styles/global';
import TextBox from '@components/text/TextBox';

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
      {header.rightText && (
        <TextBox style={styles.text} text={header.rightText}></TextBox>
      )}
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
    color: Color.secondaryGray,
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
