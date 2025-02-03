import React, { useRef } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Dimensions,
  Pressable,
} from 'react-native';

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

const { height } = Dimensions.get('window');
console.log(height);

const BottomSheet: React.FC<BottomSheetProps> = ({ isVisible, onClose }) => {
  const translateY = useRef(new Animated.Value(height)).current; // Initially off-screen

  // Function to open modal
  const openSheet = () => {
    Animated.timing(translateY, {
      toValue: height * 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Function to close modal
  const closeSheet = () => {
    Animated.timing(translateY, {
      toValue: height, // Moves modal off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  // Show modal when isVisible is true
  React.useEffect(() => {
    if (isVisible) {
      openSheet();
    } else {
      closeSheet();
    }
  }, [isVisible]);

  // Handle drag gestures
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

  if (!isVisible) return null; // Don't render if hidden

  return (
    <View style={styles.overlay}>
      {/* Backdrop to detect touch outside */}
      <Pressable style={styles.backdrop} onPress={closeSheet} />

      {/* Bottom Sheet Content */}
      <Animated.View
        style={[styles.sheetContainer, { transform: [{ translateY }] }]}
        {...panResponder.panHandlers}>
        <View style={styles.sheetHandle} />
        <Text style={styles.title}>Learn How to Take Pictures</Text>

        <View style={styles.bulletPoint}>
          <View style={styles.circle} />
          <Text style={styles.text}>
            Use a reference object (₹50 or ₹100 note).
          </Text>
        </View>

        <View style={styles.bulletPoint}>
          <View style={styles.circle} />
          <Text style={styles.text}>
            Ensure proper lighting and avoid blurry images.
          </Text>
        </View>

        <View style={styles.bulletPoint}>
          <View style={styles.circle} />
          <Text style={styles.text}>Spread grains evenly.</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={closeSheet}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers entire screen
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent backdrop
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1, // Takes full height to detect outside touch
  },
  sheetContainer: {
    width: '100%',
    height: '80%', // Adjust as needed
    maxHeight: '90%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
  sheetHandle: {
    width: 40,
    height: 5,
    backgroundColor: 'gray',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'gray',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BottomSheet;
