import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'interpro-react-native-barcode-scanner' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type InterproReactNativeBarcodeScannerProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'InterproReactNativeBarcodeScannerView';

export const InterproReactNativeBarcodeScannerView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<InterproReactNativeBarcodeScannerProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
