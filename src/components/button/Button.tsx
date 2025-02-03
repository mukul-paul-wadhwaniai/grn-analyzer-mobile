import { Color, FontSize } from '@styles/global';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type ImageSourcePropType,
  Image,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: object;
  labelStyle?: object;
  iconPrefix?: ImageSourcePropType;
  iconSuffix?: ImageSourcePropType;
  iconStyle?: object;
  isFontScalabe?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  style,
  labelStyle,
  iconPrefix,
  iconSuffix,
  iconStyle,
  isFontScalabe = true,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={disabled ? undefined : onClick}>
      {iconPrefix && (
        <Image
          source={iconPrefix}
          style={[styles.icon, styles.iconPrefix, iconStyle]}
        />
      )}
      <Text style={[styles.text, labelStyle]} allowFontScaling={isFontScalabe}>
        {title}
      </Text>
      {iconSuffix && (
        <Image
          source={iconSuffix}
          style={[styles.icon, styles.iconSuffix, iconStyle]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primaryGray,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: 'grey',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontSize.size_sm,
  } as TextStyle,
  icon: {
    width: 12,
    height: 12,
    objectFit: 'contain',
  },
  iconPrefix: {
    marginRight: 10,
  },
  iconSuffix: {
    marginLeft: 10,
  },
});

export default Button;
