import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import BottomModal from '@components/modal/BottomModal';
import { useTranslation } from 'react-i18next';
import TextBox from '@components/text/TextBox';
import { Color, FontSize } from '@styles/global';

interface BasePriceMoalProps {
  basePrice: string | undefined;
  onChangeBasePrice: (value: string) => void;
  onSubmit: () => void;
}

const BasePriceModel: React.FC<BasePriceMoalProps> = ({
  basePrice,
  onChangeBasePrice = () => {},
  onSubmit = () => {},
}) => {
  const { t } = useTranslation();
  return (
    <BottomModal
      isVisible={true}
      onClose={onSubmit}
      buttonLabel={t('ASSESSMENT_SCREEN.BASE_PRICE.DONE')}
      disabled={basePrice?.length == 0}>
      <View style={styles.container}>
        <TextBox
          text={t('ASSESSMENT_SCREEN.BASE_PRICE.TITLE')}
          style={styles.title}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeBasePrice}
          value={basePrice}
          placeholder={t('ASSESSMENT_SCREEN.BASE_PRICE.ENTER_PRICE')}
          placeholderTextColor="#929292"
          keyboardType="numeric"
        />
      </View>
    </BottomModal>
  );
};

export default BasePriceModel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: FontSize.size_xl,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    height: 60,
    paddingHorizontal: 20,
    fontSize: FontSize.size_xl,
    borderColor: '#E1E1E1',
    color: Color.secondaryGray,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
  },
});
