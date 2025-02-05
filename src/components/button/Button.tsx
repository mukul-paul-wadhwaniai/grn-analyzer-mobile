import TextBox from '@components/text/TextBox';
import { Color, FontSize } from '@styles/global';
import {
  TouchableOpacity,
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
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={disabled ? undefined : onClick}>
      {iconPrefix && (
        <Image source={iconPrefix} style={[styles.icon, iconStyle]} />
      )}
      <TextBox text={title} style={[styles.text, labelStyle]} />
      {iconSuffix && (
        <Image source={iconSuffix} style={[styles.icon, iconStyle]} />
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
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  disabledButton: {
    backgroundColor: 'grey',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontSize.size_base,
  } as TextStyle,
  icon: {
    width: 12,
    height: 12,
    objectFit: 'contain',
  },
});

export default Button;
