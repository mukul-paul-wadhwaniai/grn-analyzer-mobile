import type { StyleProp, ViewStyle } from 'react-native';

export const FontFamily = {
  poppinsMedium: 'Poppins-Medium',
  poppinsRegular: 'Poppins-Regular',
  interMedium: 'Inter-Medium',
};
/* Font Sizes */
export const FontSize = {
  size_3xs: 10,
  size_xs: 12,
  size_sm: 14,
  size_base: 16,
  size_lg: 18,
  size_xl: 20,
  size_3xl: 24,
};
/* Colors */
export const Color = {
  colorGray_50: '#777777',
  colorLiteRed: '#FFF4F3',
  colorMainRed: '#DA5B54',
  colorThinRed: '#E6918C',
  colorGreen: '#168E1A',
  colorIndianred_100: '#d85a51',
  colorWhite: '#ffffff',
  colorGainsboro: '#d9d9d9',
  colorBlack: '#000',
  darkBlack: '#333333',
  colorRed: '#e01119',
  primaryRed: '#DA5B54',
  secondaryRed: '#FFF6F6',
  tertiaryRed: 'rgba(218, 91, 84, 0.44)',
  primaryOrange: '#FEA323',
  secondaryOrange: '#CC7700',
  tertiaryOrange: '#FFF5E8',
  primaryBlue: '#3D70F2',
  secondaryBlue: '#002B99',
  tertiaryBlue: '#E0E9FE',
  primaryPink: '#D8706B',
  secondaryPink: '#AD3630',
  tertiaryPink: '#FFE7E7',
  primaryGray: '#343434',
  secondaryGray: '#565656',
  tertiaryGray: '#F4F4F4',
  colorGrayLite: '#909090',
};
/* border radiuses */
export const Border = {
  br_5xs: 8,
  br_7xs: 6,
  br_9xs: 4,
  br_2xl: 21,
  br_xs: 12,
};

export const RowContainer: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
