import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioMiddle from './Src/Inicio/Middle';
import Login from './Src/Login/Middle';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" options={{headerShown:false}} component={InicioMiddle} />
      <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}