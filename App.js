import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginRegister } from './src/screens/LoginRegister';
import Home from './src/screens/Home';
import * as SecureStore from  'expo-secure-store';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#612F74' }}>
      <StatusBar style="auto" backgroundColor="#612F74" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: '#612F74' }, // Header color
            headerTintColor: '#FFFFFF', // Header text color
          }}>
            
          <Stack.Screen
            name="LoginRegister"
            component={LoginRegister}
            options={{
              title: 'Login',
              headerShown: false,
              headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: 'Perfil',
              headerTitleAlign: 'center',
              headerRight: () => (
                <Button
                  onPress={() => {
                    Alert.alert(
                      'Atenção!',
                      'Deseja sair do aplicativo?',
                      [
                        {
                          text: 'Sim',
                          onPress: async () => {
                            await SecureStore.deleteItemAsync('userData')
                            console.log(SecureStore.getItemAsync('userData'))
                            navigation.replace('LoginRegister')
                          }

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
                  title="Sair"
                  style={{ padding: 80 }}
                  color="#612F74"
                />
              ),
              headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
