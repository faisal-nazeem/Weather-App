import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface WeatherIconProps {
  description: string | null;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ description }) => {
  const getWeatherIcon = () => {
    if (!description) return require('../../Image/rain.png'); 
    if (description.includes('cloud')) return require('../../Image/Weather.png');
    if (description.includes('rain')) return require('../../Image/rain.png');
    if (description.includes('clear')) return require('../../Image/rain.png');

    return require('../../Image/Weather.png')
  };

  return <Image source={getWeatherIcon()} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
});

export default WeatherIcon;
