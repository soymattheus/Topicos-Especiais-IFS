import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
//expo install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícone do botão Sair

export default function Home({navigation,route}) {
  async function handleProductsDelete(){
    try {
      await AsyncStorage.clear();
      Alert.alert(
        'Cadastro de Produtos:',
        'Todos os produtos foram excluídos com sucesso!'
      );
    } catch(error) {
      Alert.alert(
        'Erro na exclusão de produtos:',
        error
      );
    }
  }
  
  return (
    <>
    <View style={styles.exit}>
      <TouchableOpacity
        onPress={() => {
            Alert.alert(
                'Atenção!',
                'Deseja sair do aplicativo?',
                [
                    {
                        text: 'Sim',
                        onPress: () => navigation.replace('Login'),
                    },
                    {
                        text: 'Não',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                ],
                { cancelable: false }
            );
        }}
        style={{ padding: 10 }}
      ><MaterialCommunityIcons name="logout" color="#FFF" size={26} />
      </TouchableOpacity>
    </View>

    <View style={styles.container}>
      <Text style={{color: '#D5D5D5'}}>Tela Home</Text>
      <Text style={{color: '#D5D5D5'}}>Olá {global.nameLogin}, seja bem-vindo!</Text>

      <TouchableOpacity style={styles.saveButton} onPress={handleProductsDelete}>
        <Text style={{color: '#D5D5D5'}}>Deletar Todos os Produtos</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A586E',
  },
  exit: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#4A586E',
    paddingRight: 10,
    paddingTop: 10,
  },
});