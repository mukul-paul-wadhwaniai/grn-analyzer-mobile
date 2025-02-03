import React from 'react';
import { View, StyleSheet, type ImageSourcePropType } from 'react-native';
import { createContext, useContext } from 'react';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

type HeaderContext = {
  header: HeaderContent;
};

const HeaderContext = createContext<HeaderContext | undefined>(undefined);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within Header');
  }
  return context;
};

type HeaderContent = {
  iconPrefix?: ImageSourcePropType;
  leftHeaderClick?: () => void;
  title?: string;
  iconSuffix?: ImageSourcePropType;
  rightText?: string;
  rightHeaderClick?: () => void;
  rightDisabled?: boolean;
  leftDisabled?: boolean;
};

type HeaderProps = {
  header: HeaderContent;
  children: React.ReactNode;
};

const Header = ({ children, header }: HeaderProps) => {
  return (
    <HeaderContext.Provider value={{ header }}>
      <View style={styles.header}>{children}</View>
    </HeaderContext.Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'inherit',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default Header;

Header.LeftHeader = LeftHeader;

Header.RightHeader = RightHeader;
