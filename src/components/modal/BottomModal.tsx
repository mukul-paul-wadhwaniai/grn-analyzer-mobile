import Button from '@components/button/Button';
import { Color, FontSize } from '@styles/global';
import React, { useRef } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Dimensions,
  Pressable,
} from 'react-native';

interface BottomSheetProps {
  isVisible: boolean;
  buttonLabel: string;
  children: React.ReactNode;
  onClose: () => void;
  disabled?: boolean;
  backDropPressClose?: boolean;
}

const { height } = Dimensions.get('window');

const BottomModal: React.FC<BottomSheetProps> = ({
  children,
  isVisible,
  buttonLabel,
  onClose = () => {},
  disabled,
  backDropPressClose,
}) => {
  const translateY = useRef(new Animated.Value(height)).current;

  const openSheet = () => {
    Animated.timing(translateY, {
      toValue: height * 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  React.useEffect(() => {
    if (isVisible) {
      openSheet();
    } else {
      closeSheet();
    }
  }, [isVisible]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy > 10, // Detect downward movement
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy > 0) {
          translateY.setValue(height * 0.4 + gesture.dy);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy > 100) {
          closeSheet();
        } else {
          openSheet();
        }
      },
    }),
  ).current;

  if (!isVisible) return null;

  return (
    <View style={styles.overlay}>
      {backDropPressClose && (
        <Pressable style={styles.backdrop} onPress={closeSheet} />
      )}
      <View style={styles.sheetHandle} />
      <Animated.View
        style={[styles.sheetContainer, { transform: [{ translateY }] }]}
        {...panResponder.panHandlers}>
        {children}
        <Button
          title={buttonLabel}
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onClick={closeSheet}
          disabled={disabled}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers entire screen
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent backdrop
    justifyContent: 'flex-end',
    flex: 1,
    position: 'absolute',
    zIndex: 9,
  },
  backdrop: {
    flex: 1,
  },
  sheetContainer: {
    width: '100%',
    maxHeight: '80%',
    backgroundColor: Color.colorWhite,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 5,
  },
  sheetHandle: {
    width: 40,
    height: 5,
    backgroundColor: Color.colorWhite,
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 10,
  },
  buttonLabel: {
    fontWeight: '600',
    fontSize: FontSize.size_2xl,
  },
});

export default BottomModal;
