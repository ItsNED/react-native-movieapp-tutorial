import React, { useState } from 'react';
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from './navigation/MainNavigation';

export default function App() {

  const [loaded, setLoaded] = useState(false);

  const handleError = error => console.log(error);
  const handleLoaded = () => setLoaded(true);
  const loadAssets = async() => {
    await Font.loadAsync({
      ...Ionicons.font
    })
  }

  if (loaded) {
    return (
        <><StatusBar barStyle="light-content"/><MainNavigation/></>
    );
  }
  else{
    return <AppLoading startAsync={loadAssets} onFinish={handleLoaded} onError={handleError}/>;
  }
}