import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    Text,
    Linking
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

import { styles } from './styles';

export function BarraLateral( props ) {
    const profileImage = 'https://github.com/matt-tavares.png'
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#612F74'}} >
            <View style={styles.sideUserArea}>
                <Image 
                    source={{ uri: profileImage}}
                    style={styles.sideProfileIcon}
                />

                <Text style={styles.sideUserName}>Matheus Tavares</Text>
            </View>

            <DrawerContentScrollView { ...props }>
                <DrawerItemList { ...props } />
                <DrawerItem
                    label='Meu github'
                    activeTintColor='#FFFFFF'
                    inactiveTintColor='#FFFFFF'
                    onPress={() => Linking.openURL('https://github.com/matt-tavares')}
                />
            </DrawerContentScrollView>
        </SafeAreaView>
    )
}