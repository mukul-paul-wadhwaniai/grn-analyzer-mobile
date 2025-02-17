import {
  View,
  StyleSheet,
  type ImageSourcePropType,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { Color, FontSize } from '@styles/global';
import TextBox from '@components/text/TextBox';
import Image from '@components/image/Image';
import Button from '@components/button/Button';

interface ImageBoxProps {
  title: string;
  image?: string;
  onClick?: () => void;
  imageIcon?: ImageSourcePropType;
  imageIconClickable?: boolean;
  loader?: boolean;
  style?: {
    title?: object;
  };
  titleIcon?: ImageSourcePropType;
}
const ImageBox: React.FC<ImageBoxProps> = ({
  title,
  style,
  image,
  titleIcon,
  imageIcon,
  imageIconClickable,
  loader,
  onClick = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {image && <Image src={{ uri: image }} style={styles.image} />}
        {imageIconClickable && (
          <Button
            iconPrefix={imageIcon}
            style={styles.button}
            iconStyle={styles.imageIcon}
            onClick={onClick}
          />
        )}
        <View style={{ position: 'absolute', left: 50 }}>
          {imageIcon && !imageIconClickable && (
            <Image src={imageIcon} style={styles.imageIcon} />
          )}
          {loader && (
            <ActivityIndicator
              size="large"
              color={Color.colorWhite}
              style={styles.imageIcon}
            />
          )}
        </View>
      </View>
      {title && (
        <View style={styles.titleWrapper}>
          <TextBox
            text={title}
            style={[styles.title, style?.title, titleIcon && styles.colorGreen]}
          />
          {titleIcon && <Image src={titleIcon} style={styles.titleIcon} />}
        </View>
      )}
    </View>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: Color.tertiaryGray,
    height: 180,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'transparent',
  },
  imageIcon: {
    width: 35,
    height: 35,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 8,
  },
  title: {},
  colorGreen: {
    color: Color.colorGreen,
  },
  titleIcon: {
    height: FontSize.size_lg,
    width: FontSize.size_lg,
    tintColor: Color.colorGreen,
  },
});
