import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';

import { styles } from './styles'

export function About() {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={{width: 192, height: 236}}
                source={{
                    uri: 'http://www.ifs.edu.br/comunicacao/images/Imagens/Marcas/IFS_puro/Marca_IFS_vertical-01.png'
                }}
            />
            <Text style={styles.text}> Aluno: Matheus S. Tavares </Text>
            <Text style={styles.text}> Profº: Paulo Amaral </Text>
            <Text style={styles.text}> Tópicos Especiais I </Text>
            <Text style={styles.text}> Instituto Federal de Sergipe </Text>
            <Text> </Text>
            <Text
                style={
                    [styles.text,
                        {borderWidth: 1,
                        borderRadius: 10,
                        padding: 5
                    }
                    ]}
                >Aplicativo desenvolvido como requisito para obtenção das notas referentes às atividades processuais 6.1 e 6.2.</Text>
        </SafeAreaView>
    )
}