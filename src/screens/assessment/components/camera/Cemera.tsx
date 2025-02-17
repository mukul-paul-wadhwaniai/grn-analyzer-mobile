import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useRef, useEffect } from 'react';
import {
  Camera as RNVCamera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import Button from '@components/button/Button';
import { Color } from '@styles/global';
import Preview from './Preview';
import Header from './Header';

interface CameraProps {
  ImageNumber: number;
  imageUri: string | null;
  setShowCamera: (flag: boolean) => void;
  setImageUri: (path: string | null) => void;
  upload: () => void;
}

const Camera: React.FC<CameraProps> = ({
  ImageNumber,
  imageUri,
  setShowCamera = () => {},
  setImageUri = () => {},
  upload = () => {},
}) => {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const cameraRef = useRef<RNVCamera>(null);

  useEffect(() => {
    const checkPermission = async () => {
      if (hasPermission === false) {
        Alert.alert(
          'Camera Permission Required',
          'This app needs access to your camera to function properly.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'OK', onPress: async () => await requestPermission() },
          ],
        );
      }
    };

    checkPermission();
  }, [hasPermission]);

  const takeImage = async () => {
    if (cameraRef.current) {
      try {
        const photoData = await cameraRef.current.takePhoto({
          flash: 'off',
          enableShutterSound: false,
        });
        setImageUri(`file://${photoData.path}`); // Set the photo path
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    } else {
      console.warn('Camera is not available');
    }
  };

  const retakeImage = () => {
    setImageUri(null);
  };

  const handleCloseCamera = () => {
    setImageUri(null);
    setShowCamera(false);
  };

  if (hasPermission === null)
    return (
      <View>
        <Text>Requesting permission...</Text>
      </View>
    );
  if (hasPermission === false) return <Text>No Permission</Text>;
  if (!device) return <Text>No Camera</Text>;

  return (
    <View style={styles.container}>
      <RNVCamera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={!imageUri}
        ref={cameraRef}
        photo={true}
      />
      {imageUri ? (
        <Preview
          imageUri={imageUri}
          retakeImage={retakeImage}
          upload={upload}
        />
      ) : (
        <View style={styles.captureButtonWrapper}>
          <Button style={styles.captureButton} onClick={takeImage} />
        </View>
      )}
      <Header imageNumber={ImageNumber + 1} close={handleCloseCamera} />
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'static',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9,
  },
  captureButtonWrapper: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: Color.colorGray_50,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: Color.colorWhite,
    width: '80%',
    height: '80%',
    borderRadius: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
});
