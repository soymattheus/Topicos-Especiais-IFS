import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './style';

export default function Home({route}) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá {route.params?.name}, seja bem-vindo!</Text>
        
        <Image
        style={styles.image}
        source={{
          uri: `https://github.com/${route.params?.name}.png`
        }}
      />

      <Text style={styles.text}>E-mail: {route.params?.email}</Text>
      <Text style={styles.text}>Telefone: {route.params?.phone}</Text>
      
    </View>
  );
}