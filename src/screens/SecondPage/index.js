import React from 'react';
import {
    View,
    Button,
    Text,
} from 'react-native';

export function SecondPage({ navigation }) {
    return(
        <View style={{flex: 1, padding: 16, backgroundColor: '#612F74'}}>
            
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Text
                        style={{
                        fontSize: 25,
                        textAlign: 'center',
                        marginBottom: 16,    
                        }}>
                            Segunda Tela
                    </Text>

                    <Button
                        color='#610D70'
                        onPress={() => navigation.navigate('FirstPage')}
                        title='Ir para a "Primeira tela"'
                    />

                    <Button
                        color='#610D70'
                        onPress={() => navigation.navigate('ThirdPage')}
                        title='Ir para a "Terceira tela"'
                    />
            </View>
        </View>
    )
}