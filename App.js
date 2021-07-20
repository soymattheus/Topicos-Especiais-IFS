//branch av_5.2

import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FirstPage } from './src/screens/FirstPage';
import { SecondPage } from './src/screens/SecondPage';
import { ThirdPage } from './src/screens/ThirdPage';
import { BarraLateral } from './src/components/BarraLateral';

import { Image } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackIconHeaderLeft = (props) => {
  const toggleDrwaer = () => {
    props.navigationProps.toggleDrawer();
  }

  return(
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrwaer}>
        <Image
          source={{uri: 'https://github.com/matt-tavares.png'}}
          style={{width: 25, height: 25, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  )
}

function firstScreenStack({ navigation }) {
  return(
    <Stack.Navigator initialRouteName='FirstPage'>
      <Stack.Screen
        name='FirstPage'
        component={FirstPage}
        options={{
          title: 'Primeira Tela',
          headerLeft: () => ( <StackIconHeaderLeft navigationProps={navigation}/>),
          headerStyle: {backgroundColor: '#612F74',},
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {fontWeight: 'bold'},
          headerTitleAlign: 'center',
        }}/>
    </Stack.Navigator>
  )
}

function secondScreenStack({ navigation }) {
  return(
    <Stack.Navigator
      initialRouteName='secondPage'
      screenOptions={{
        headerLeft: () => ( <StackIconHeaderLeft navigationProps={navigation}/>),
          headerStyle: {backgroundColor: '#612F74',},
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {fontWeight: 'bold',},
          headerTitleAlign: 'center',
      }} >
      <Stack.Screen
        name='SecondPage'
        component={SecondPage}
        options={{title: 'Segunda Tela',}}/>
      <Stack.Screen
        name='ThirdPage'
        component={ThirdPage}
        options={{title: 'Terceira Tela',}}/>
    </Stack.Navigator>
  )
}


export default function App() {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#612F74' }}>
      <StatusBar style="auto" backgroundColor="#612F74" />
      <NavigationContainer>
        <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#FFFFFF',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <BarraLateral {...props} /> } >
          <Drawer.Screen
            name='FirstPage'
            options={{drawerLabel: 'Primeira tela'}}
            component={firstScreenStack} />

          <Drawer.Screen
            name='SecondPage'
            options={{drawerLabel: 'Segunda tela'}}
            component={secondScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
