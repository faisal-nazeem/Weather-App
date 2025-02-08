import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import color from '../Components/color';
import CustomImage from '../Components/image';
import Label from '../Components/label';
import WeatherIcon from '../Components/weather';

const API_KEY = 'a28248f18d91c09c14efc6214df7c98f';
const LAT = 10.99;
const LON = 44.34;

const TemperatureScreen = () => {
  const [weatherData, setWeatherData] = useState<{
    temperature: number | null;
    temp_min: number | null;
    temp_max: number | null;
    description: string | null;
  }>({
    temperature: null,
    temp_min: null,
    temp_max: null,
    description: null,
  });



  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        setWeatherData({
          temperature: data.main.temp,
          temp_min: data.main.temp_min,
          temp_max: data.wind.speed,
          description: data.weather[0].description,
        });

      } catch (error) {

        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <CustomImage source={require('../../Image/Weather.png')} style={styles.image} />


      <View style={styles.weatherContainer}>
        <Text style={styles.temperature}>{weatherData.temperature}°</Text>
        <Text style={styles.text}>{weatherData.description}</Text>
        <View style={styles.temp_min}>
          <Text style={styles.text}>Max:{weatherData.temp_min}°</Text>
          <Text style={styles.text}>Min{weatherData.temp_max}°</Text>
        </View>

        <View>
          <CustomImage source={require('../../Image/House.png')} />
        </View>

        <View style={styles.cloudCrad}>
          <View style={styles.dataCard}>
            <Label text='Today' fontWeight={'500'} fontSize={17} color={color.white} />
            <Label text='july, 21' fontWeight={'500'} fontSize={17} color={color.white} />
          </View>

          <View style={styles.card}>
            {Array.from({ length: 4 }).map((_, index) => (
              <View key={index} style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 5 }}>
                <Text style={{ color: color.white }}>{weatherData.temperature}°C</Text>
                <WeatherIcon description={weatherData.description} />
                <Text style={{ color: color.white }}>{weatherData.temperature}</Text>
              </View>
            ))} 
          </View>
        </View>
      </View>
    </View>
  );
};

export default TemperatureScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.drakblue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 224,
    height: 224,
  },
  text: {

    fontSize: 24,
    color: color.white,
    fontWeight: 'regular',
  },
  weatherContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  temperature: {
    fontWeight: 'medium',
    fontSize: 64,
    color: color.white
  },
  temp_min: {
    flexDirection: 'row',
    gap: 10,

  },
  cloudCrad: {
    width: 390,
    padding: 20,
    backgroundColor: color.RoyalPurple,
    borderRadius: 30,

  },
  dataCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.DarkGray,
    paddingBottom: 10
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginTop: 20
  }

});
