import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return(
      <View>
      <Text style={{color: '#492d12', fontFamily: 'NotoSerif_400Regular', fontSize: 45}}>Filmes</Text> 
      <Text style={{color: '#492d12', fontFamily: 'NotoSerif_400Regular', fontSize: 25}}>Ainda Estou Aqui</Text> 
      <Text style={{fontFamily: 'NotoSerif_400Regular'}}>Ano de Lançamento: 2024</Text> 
      <Text style={{fontFamily: 'NotoSerif_400Regulart'}}>Gêneros: Drama, História</Text> 
      <Text style={{fontFamily: 'NotoSerif_400Regular'}}>Diretor: Walter Salles</Text> 

      <Image
        source={{uri: 'https://assets.papelpop.com/wp-content/uploads/2024/09/Snapinsta.app_459586658_18278901115236882_2899190837679971745_n_1080-600x750.jpg'}}
        style={{width: 250, height: 300}}
      />

      <Text style={{color: '#492d12', fontFamily: 'NotoSerif_400Regular', fontSize: 25}}>Hereditário</Text>
      <Text style={{fontFamily: 'NotoSerif_400Regular'}}>Ano de Lançamento: 2018</Text>
      <Text style={{fontFamily: 'NotoSerif_400Regular'}}>Gêneros: Terror, Mistério</Text>
      <Text style={{fontFamily: 'NotoSerif_400Regular'}}>Diretor: Ari Aster</Text>

      <Image
        source={{uri: 'https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg'}}
        style={{width: 250, height: 300}}
      />
    </View>
    );
  }
}

export default App;
