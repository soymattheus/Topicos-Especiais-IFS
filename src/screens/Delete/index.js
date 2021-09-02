import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';


import { styles } from './styles'

export function Delete() {

    function handleDeleteRegister(){
        Alert.alert(
            "Atenção:",
            `Tem certeza que deseja excluir os dados de Login armazenados em SecureStore?`,
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    SecureStore.deleteItemAsync('userData');
                    }
                }
            ],
            { cancelable: false }
            );
    }

    async function handleDelete() {
        //usada para remover a chave userData (dados gravados) nos testes
        await SecureStore.deleteItemAsync('userData');
      }

    return (
        <SafeAreaView style={styles.container}>
            <Text
                    style={
                        [styles.text,
                            {padding: 5,
                            margin: 30
                        }
                        ]}
                >Após a exclusão você continuará logado no app, mas ao fazer logout os dados de login já não estarão disponíveis.</Text>
            <Image
                style={{width: 320, height: 320, margin: 30}}
                source={{
                    uri: 'https://www.freeiconspng.com/thumbs/remove-icon-png/delete-dust-bin-erase-eraser-remove-icon-1.png'
                }}
            />
            
            <TouchableOpacity onPress={handleDeleteRegister}>
                <Text
                    style={
                        [styles.text,
                            {borderWidth: 1,
                            borderRadius: 10,
                            padding: 5,
                            margin: 30,
                            borderColor: '#D5D5D5'
                        }
                        ]}
                >Excuir dados de LOGIN</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}