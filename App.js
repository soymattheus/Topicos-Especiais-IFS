import * as React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import BottomStack from './BottomStack';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícone do botão Sair

const Stack = createStackNavigator();
 
function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Product':
      return 'Produto';
    case 'ProductList':
      return 'Produtos Cadastrados';
  }
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#4A586E' }}>
      <StatusBar style="auto" backgroundColor="#4A586E" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: '#4A586E' }, // Header color
            headerTintColor: '#FFFFFF', // Header text color
            headerShown: false
           }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
              headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: 'Cadastre-se' }}

          />
          <Stack.Screen
            name="BottomStack"
            component={BottomStack}
            options={({ navigation, route }) => ({
              headerTitle : getHeaderTitle( route ),
              headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
              
          })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
