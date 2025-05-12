import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import color from '../Components/color';
import CustomImage from '../Components/image';
import Label from '../Components/label';
import WeatherIcon from '../Components/weather';

const API_KEY = 'a28248f18d91c09c14efc6214df7c98f';

const TemperatureScreen = () => {
  const [weatherData, setWeatherData] = useState<{
    temperature: number | null;
    temp_min: number | null;
    temp_max: number | null;
    description: string | null;
    city: string | null;
  }>({
    temperature: null,
    temp_min: null,
    temp_max: null,
    description: null,
    city: null,
  });

  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  const fetchWeatherByCity = async () => {
    if (!city) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        alert('City not found!');
        setLoading(false);
        return;
      }

      setWeatherData({
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        description: data.weather[0].description,
        city: data.name,
      });
      Keyboard.dismiss();
    } catch (error) {
      alert('Failed to fetch weather.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.searchContainer}>
        
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          placeholderTextColor="#aaa"
          value={city}
          onChangeText={setCity}
          onSubmitEditing={fetchWeatherByCity}
        />
        <TouchableOpacity onPress={fetchWeatherByCity} style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

     
      {weatherData.temperature !== null && (
        <>
          <CustomImage source={require('../../Image/Weather.png')} style={styles.image} />

          <View style={styles.weatherContainer}>
            <Text style={styles.city}>{weatherData.city}</Text>
            <Text style={styles.temperature}>{weatherData.temperature}°</Text>
            <Text style={styles.text}>{weatherData.description}</Text>

            <View style={styles.temp_min}>
              <Text style={styles.text}>Min: {weatherData.temp_min}°</Text>
              <Text style={styles.text}>Max: {weatherData.temp_max}°</Text>
            </View>

            <View>
              <CustomImage source={require('../../Image/House.png')} />
            </View>

            <View style={styles.cloudCrad}>
              <View style={styles.dataCard}>
                <Label text='Today' fontWeight={'500'} fontSize={17} color={color.white} />
                <Label text={currentDate} fontWeight={'500'} fontSize={17} color={color.white} />
              </View>

              <View style={styles.card}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <View key={index} style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 5 }}>
                    <Text style={{ color: color.white }}>
                      {weatherData.temperature}°C
                    </Text>
                    <WeatherIcon description={weatherData.description} />
                    <Text style={{ color: color.white }}>
                      {weatherData.description}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </>
      )}
    </View>
    </ScrollView>
  );
};

export default TemperatureScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.drakblue,
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 20,
    flexWrap : 'wrap',
    gap: 10,
  },
  input: {
    flex: 1,
    borderColor: color.white,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: color.white,
    height: 40,
  },
  button: {
    backgroundColor: color.RoyalPurple,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',

  },
  buttonText: {
    color: color.white,
    fontWeight: '500',
  },
  image: {
    width: 224,
    height: 224,
  },
  text: {
    fontSize: 24,
    color: color.white,
    fontWeight: 'normal',
  },
  weatherContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '500',
    fontSize: 64,
    color: color.white,
  },
  city: {
    fontSize: 28,
    fontWeight: '600',
    color: color.white,
    marginBottom: 5,
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
    marginTop: 20,
  },
  dataCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.DarkGray,
    paddingBottom: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginTop: 20,
  },
});
