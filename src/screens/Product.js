import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Separator from '../components/Separator';
import ProductModel from '../models/ProductModel';

export default function Product({ navigation, route, nome }) {
  const [state, setState] = React.useState({
    productName: nome,
    productPrice: '',
    productQty: '',
  });

  const handleChangeText = (key, value) => {
    setState({ ...state, [key]: value });
  }

  let id = route.params ? route.params.id : undefined;

/*   React.useEffect(() => {
    setState({productName:'', productPrice:'', productQty:''});
  }, []); */

/*   React.useEffect(() => {
    if (route.params) return;
    route.params = null;
    setState({productName:'route.params.name',productPrice:'route.params.price.toString()',productQty:'route.params.qty.toString()'});

  }, []); */

  React.useEffect(() => {
    if (!route.params) return;
    setState({productName:route.params.name,productPrice:route.params.price.toString(),productQty:route.params.qty.toString()});

  }, [route]);

  async function handleSave() {
    if (!state.productName || !state.productPrice || !state.productQty) {
      Alert.alert(
        'Erro ao tentar cadastrar produto:',
        'Preencha todos os campos corretamente!'
      );
    } else {
      const listItem = {
        name: state.productName, price: parseFloat(state.productPrice),
        qty: parseInt(state.productQty)
      };
      ProductModel.saveItem(listItem,id)
        .then(() => {
          setState({});
          Alert.alert(
            'Dados do Produtos:',
            'Produto salvo com sucesso!'
          );
        })
        .then(() => navigation.navigate("ProductList", listItem))
        .catch(
          () => Alert.alert(
            'Erro ao tentar cadastrar produto:',
            'Erro no AsyncStorage!'
          )
        );
        route.params = null;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{state.productName}Dados do Produto</Text>
      <TextInput
        style={styles.input}
        value={state.productName}
        onChangeText={(value) => handleChangeText('productName', value)}
        placeholder='Nome'
        placeholderTextColor='#D5D5D5'
        clearButtonMode="always" //Botão para limpar no iOS
      />
      <TextInput
        style={styles.input}
        value={state.productPrice}
        placeholder='Preço'
        placeholderTextColor='#D5D5D5'
        onChangeText={(value) => handleChangeText('productPrice', value)}
        keyboardType="numeric"
        clearButtonMode="always"
      />
      <TextInput
        style={styles.input}
        value={state.productQty}
        placeholder='Qtde estoque'
        placeholderTextColor='#D5D5D5'
        onChangeText={(value) => handleChangeText('productQty', value)}
        keyboardType="numeric"
        clearButtonMode="always"
      />
      <Separator marginVertical={30} />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
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
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#D5D5D5',
    marginBottom: 20,
    textAlign: 'center',
  },
  saveButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#2F3538',
    padding: 5,
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D5D5D5',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#808285',
    borderRadius: 5,
    marginBottom: 10,
    color: '#D5D5D5'
  },
});