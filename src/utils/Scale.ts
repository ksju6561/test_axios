// utils/scale.ts
import { Dimensions } from 'react-native';

// Define a base width for the scaling, which is the width of the 12.9-inch iPad Pro in portrait
const BASE_WIDTH_11_INCH = 834; // The width for the 11-inch iPad Pro in portrait
const { width } = Dimensions.get('window');
const scale = width / BASE_WIDTH_11_INCH;

export const scaleSize = (size: number) => size * scale;
