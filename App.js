import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { PlayfairDisplay_600SemiBold } from "@expo-google-fonts/playfair-display";
import { Merriweather_300Light } from "@expo-google-fonts/merriweather";
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false); 

  useEffect(() => {
    async function prepare() {
      try {
        
        await Font.loadAsync({
          PlayfairDisplay_600SemiBold,
          Merriweather_300Light
        });
       
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (e) {
        console.warn(e);

      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync(); 
    }
  }, [isReady]);

  if (!isReady) {
    return null; 
  }

  return (
    <View onLayout={onLayoutView}>
      <Text style={{color: '#492d12', fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: 45}}>Filmes</Text> 
      <Text style={{color: '#492d12', fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: 25}}>Ainda Estou Aqui</Text> 
      <Text style={{fontFamily: 'Merriweather_300Light'}}>Ano de Lançamento: 2024</Text> 
      <Text style={{fontFamily: 'Merriweather_300Light'}}>Gêneros: Drama, História</Text> 
      <Text style={{fontFamily: 'Merriweather_300Light'}}>Diretor: Walter Salles</Text> 

      <Image
        source={{uri: 'https://assets.papelpop.com/wp-content/uploads/2024/09/Snapinsta.app_459586658_18278901115236882_2899190837679971745_n_1080-600x750.jpg'}}
        style={{width: 250, height: 300}}
      />

      <Text style={{color: '#492d12', fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: 25}}>Hereditário</Text>
      <Text style={{fontFamily: 'Merriweather_300Light'}}>Ano de Lançamento: 2018</Text>
      <Text style={{fontFamily: 'Merriweather_300Light'}}>Gêneros: Terror, Mistério</Text>
      <Text style={{fontFamily: 'Merriweather_300Light'}}>Diretor: Ari Aster</Text>

      <Image
        source={{uri: 'https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg'}}
        style={{width: 250, height: 300}}
      />
    </View>
  );
}
