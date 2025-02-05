import { Color } from '@styles/global';
import React, { createContext, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

type WrapperContext = {
  wrapper: WrapperContent;
};

const WrapperContext = createContext<WrapperContext | undefined>(undefined);

export const useWrapperContext = () => {
  const context = useContext(WrapperContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within Header');
  }
  return context;
};

type WrapperContent = {
  section1: React.ReactNode;
  section2?: React.ReactNode;
  section3?: React.ReactNode;
  section4?: React.ReactNode;
  style?: object;
  section1Style?: object;
  section2Style?: object;
  section3Style?: object;
  section4Style?: object;
};

type HeaderProps = {
  components: WrapperContent;
  children: React.ReactNode;
};

const Wrapper = ({ children, components }: HeaderProps) => {
  return (
    <WrapperContext.Provider value={{ wrapper: components }}>
      <View style={[styles.wrapper, components.style]}>{children}</View>
    </WrapperContext.Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.bgGray,
    borderRadius: 10,
  },
  container: {
    padding: 12,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: Color.tertiaryGray,
  },
});

export default Wrapper;

Wrapper.Section1 = () => {
  const { wrapper } = useWrapperContext();
  return (
    <View style={[styles.container, wrapper.section1Style]}>
      {wrapper.section1}
    </View>
  );
};

Wrapper.Section2 = () => {
  const { wrapper } = useWrapperContext();
  return (
    <View style={[styles.container, styles.divider, wrapper.section2Style]}>
      {wrapper.section2}
    </View>
  );
};

Wrapper.Section3 = () => {
  const { wrapper } = useWrapperContext();
  return (
    <View style={[styles.container, styles.divider, wrapper.section3Style]}>
      {wrapper.section3}
    </View>
  );
};

Wrapper.Section4 = () => {
  const { wrapper } = useWrapperContext();
  return (
    <View style={[styles.container, styles.divider, wrapper.section4Style]}>
      {wrapper.section4}
    </View>
  );
};
