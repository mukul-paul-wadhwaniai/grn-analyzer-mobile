import { Color, FontFamily, FontSize } from '@styles/global';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextBoxProps {
  text?: string;
  style?: object;
}

const TextBox: React.FC<TextBoxProps> = ({ text, style }: TextBoxProps) => {
  return (
    <Text style={[styles.text, style]} numberOfLines={4} ellipsizeMode="tail">
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: 'inherit',
  },
  text: {
    color: Color.secondaryGray,
    fontWeight: '400',
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.groteskRegular,
  },
});

export default TextBox;
