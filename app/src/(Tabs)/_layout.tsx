import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'red' }}>
      <Tabs.Screen
        name="temperatureScreen"
        options={{
          title: 'Temperature',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="thermometer" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="anotherScreen"
        options={{
          title: 'Another',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}