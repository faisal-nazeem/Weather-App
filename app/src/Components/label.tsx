import React from 'react';
import { StyleSheet, Text, View, TextStyle } from 'react-native';

interface LabelProps {
  text: string;
  fontSize?: number; 
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';  
  color?: string; 
  style?: TextStyle;  
}

const Label: React.FC<LabelProps> = ({ text, fontSize, fontWeight, color, style }) => (
  <View style={styles.container}>
    <Text style={[styles.text, { fontSize, fontWeight, color }, style]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent :'center',
    alignItems :'center'
  },
  text: {
    fontSize: 14,  
    fontWeight: 'normal', 
   
  },
});

export default Label;
