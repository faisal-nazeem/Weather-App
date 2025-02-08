import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Label from './src/Components/label';
import color from './src/Components/color';
import Button from './src/Components/Button';
import { Redirect, useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import CustomImage from './src/Components/image';


const Index = () => { 

  const router =useRouter()
  return (
  
    <View style={styles.container}>
        <CustomImage source={require('../app/Image/Weather.png')}/>
      <View style={styles.contect}>
        <Label text='Weather' fontSize={80} fontWeight='700' color={color.white} />
        <Label text='ForeCasts' fontSize={60} fontWeight='400' color={color.Goldenrod} />
      </View>

      <View>
        <Button
          title='Get Start'
          onPress={() => router.push('/src/screen/temperatureScreen')}
          style={styles.startButton}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  contect: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    width: 304,
    height: 72,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30

  }
});
