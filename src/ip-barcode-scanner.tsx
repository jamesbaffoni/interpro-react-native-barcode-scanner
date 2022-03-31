import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import type { IpBarcodeScannerType } from './index';
import { RNCamera } from 'react-native-camera';

type Props = {
  onBarcodeDetected: any;
};

const IpBarcodeScanner = forwardRef<IpBarcodeScannerType, Props>(
  (props, ref) => {
    const [scanning, setScanning] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      openScanner() {
        setScanning(true);
      },
    }));

    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={scanning}
        onRequestClose={() => setScanning(false)}
      >
        <View style={styles.centeredView}>
          <RNCamera
            style={styles.camera}
            onGoogleVisionBarcodesDetected={(result: any) => {
              let { barcodes } = result;
              if (barcodes[0]) {
                props.onBarcodeDetected(barcodes[0].data);
                setScanning(false);
              }
            }}
          />
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => setScanning(false)}
          >
            <Text style={styles.text}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
  },
  touchableContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 48 : 24,
    right: 24,
    backgroundColor: '#00000040',
    padding: 8,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
});

export default IpBarcodeScanner;
