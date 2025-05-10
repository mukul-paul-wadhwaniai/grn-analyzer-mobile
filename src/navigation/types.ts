import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  LanguageSelection: undefined;
  Home: undefined;
  Assessment: undefined;
  Result: undefined;
  Reports: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
