import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, ImageStyle } from 'react-native';

interface CustomImageProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
}

const CustomImage: React.FC<CustomImageProps> = ({ source, style }) => {
  return <Image source={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default CustomImage;
