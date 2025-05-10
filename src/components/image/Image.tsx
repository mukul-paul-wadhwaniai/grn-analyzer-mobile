import {
  Image as RNImage,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from 'react-native';
import React from 'react';

interface ImageProps {
  src: ImageSourcePropType;
  style?: object;
  wrapperStyle?: object;
}

const Image: React.FC<ImageProps> = ({ src, style, wrapperStyle }) => {
  return (
    <View style={[wrapperStyle]}>
      <RNImage source={src} style={[styles.icon, style]} />
    </View>
  );
};

export default Image;

const styles = StyleSheet.create({
  icon: {
    width: 12,
    height: 12,
    objectFit: 'contain',
  },
});
