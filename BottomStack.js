import * as React from 'react';
//npm install @react-navigation/bottom-tabs
//npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //Novo Produto
import { MaterialIcons } from '@expo/vector-icons'; //Listar Produtos
import Home from './src/screens/Home';
import Product from './src/screens/Product';
import ProductList from './src/screens/ProductList';

const Tab = createMaterialBottomTabNavigator();

export default function BottomStack({ navigation, route }) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#FFFFFF"
            inactiveColor="#808285"
            barStyle={{ backgroundColor: '#2F3538' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    tabBarLabel: 'Novo',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="plus-box-outline" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="ProductList"
                component={ProductList}
                options={{
                    tabBarLabel: 'Listar',
                    tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" color={color} size={26} />,
                }}
            />
        </Tab.Navigator>
    );
}
