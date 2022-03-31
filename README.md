# interpro-react-native-barcode-scanner

A configurable barcode scanning button that uses RNCamera to capture and return barcode and QR code data

## Installation

```sh
npm install interpro-react-native-barcode-scanner
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
