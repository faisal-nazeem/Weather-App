import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, ImageStyle, StyleProp } from 'react-native';

interface CustomImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

const CustomImage: React.FC<CustomImageProps> = ({ source, style }) => {
  return <Image source={source} resizeMode='contain' style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default CustomImage;
