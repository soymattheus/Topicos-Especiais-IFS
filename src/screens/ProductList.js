import * as React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import ProductItem from '../components/ProductItem';
import ProductModel from '../models/ProductModel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProductList({ navigation, route }) {
  

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    ProductModel.getItems().then(items => setItems(items))

    const unsubscribe = navigation.addListener('focus', () => {
      ProductModel.getItems().then(items => setItems(items))
    });

    return () => {
      unsubscribe;
    };

  },[route]); 

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        data={items}
        keyExtractor={(item, index) => String(item.id)}
        // Passa o objeto/parâmetro navigation para o componente ProductItem
        renderItem={({item}) => <ProductItem item={item} navigation={navigation} /> 
        } 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A586E',
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
});