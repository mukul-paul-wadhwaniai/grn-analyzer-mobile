import { Color } from '@styles/global';
import { View, StyleSheet } from 'react-native';

type HeaderProps = {
  style?: object;
  children: React.ReactNode;
};

const Wrapper = ({ children, style }: HeaderProps) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.bgGray,
    borderRadius: 10,
    padding: 12,
  },
});

export default Wrapper;
