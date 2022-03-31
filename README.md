# interpro-react-native-barcode-scanner

A configurable barcode scanning button that uses RNCamera to capture and return barcode and QR code data.  Built by InterPro Solutions

## Installation

```sh
npm install interpro-react-native-barcode-scanner
```

Follow the platform-specific installation steps below.  For help troubleshooting issues with ```RNCamera```, please refer to the installation instructions here:

https://react-native-camera.github.io/react-native-camera/docs/installation

## iOS - Other required steps

Add permissions with usage descriptions to your app ```Info.plist```:

```xml
<!-- Required with iOS 10 and higher -->
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Required with iOS 11 and higher: include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microphone is accessed for the first time</string>
```

## Android - Other required steps

Add permissions to your app ```android/app/src/main/AndroidManifest.xml``` file:

```xml
<!-- Required -->
<uses-permission android:name="android.permission.CAMERA" />

<!-- Include this only if you are planning to use the camera roll -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

<!-- Include this only if you are planning to use the microphone for video recording -->
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

Insert the following lines in ```android/app/build.gradle```:

```
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'mlkit' // <--- insert this line
  }
}
```

## Usage

```js
import {
  IpBarcodeScanner,
  IpBarcodeScannerType,
} from 'interpro-react-native-barcode-scanner';

// ...

const scannerRef = useRef<IpBarcodeScannerType>(null);

// ...

<Button
  onPress={() => scannerRef?.current?.openScanner()}
  title={'Scan Barcode'}
/>
<IpBarcodeScanner
  ref={scannerRef}
  onBarcodeDetected={(data: any) => console.log(data)}
/>
```

## License

MIT
