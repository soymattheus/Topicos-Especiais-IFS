import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícone do botão Sair
import * as SecureStore from 'expo-secure-store';

import Separator from '../components/Separator';

export default function Register({ navigation }) {
  const [state, setState] = React.useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    userPassword: '',
  });

  const [userPasswordConfirm, setUserPasswordConfirm] = React.useState('');

  // Salva dados de registro do usuário com SecureStore
  const saveUserData = (userData) => {
    return SecureStore.setItemAsync('userData', JSON.stringify(userData));
  };

  function handleRegister() {
    if (!state.userName || !state.userPhone || !state.userEmail ||
       !state.userPassword || !userPasswordConfirm) {
      Alert.alert(
        'Erro ao tentar cadastrar usuário:',
        'Preencha todos os campos corretamente!'
      );
    } else {
      if (state.userPassword !== userPasswordConfirm) {
        Alert.alert(
          'Erro ao tentar cadastrar usuário:',
          'Senha não confere com a confirmação da senha!'
        );
      } else {
        saveUserData({ name: state.userName, phone: state.userPhone, email: state.userEmail,
           password: state.userPassword });
           navigation.navigate('Login', { email: state.userEmail });
      }
    }
  }

  const handleChangeText = (key, value) => {
    setState({ ...state, [key]: value });
  }

  function goBack() {
    navigation.navigate('Login');
  }

  function phoneMask(num) {
    var num = num.replace(/\D/g, "");
    num = num.replace(/^0/, "");
    if (num.length > 10) {
      num = num.replace(/^(\d\d)(\d)(\d{4})(\d{4}).*/, "($1) $2 $3-$4");
    } else if (num.length > 7) {
      num = num.replace(/^(\d\d)(\d)(\d{4})(\d{0,4}).*/, "($1) $2 $3-$4");
    } else if (num.length > 2) {
      num = num.replace(/^(\d\d)(\d)(\d{0,4})/, "($1) $2 $3");
    } else {
      num = num.replace(/^(\d*)/, "($1");
    }
    return num;
  }


  return (<>
      <View style={styles.goBack}>
        <TouchableOpacity
          onPress={goBack}
          style={{ padding: 10 }}
        >
          <MaterialCommunityIcons name="arrow-left" color="#FFF" size={26} />
        </TouchableOpacity>
    </View>

    <View style={styles.container}>
      <Text style={styles.titleText}>Dados do Usuário</Text>
      <TextInput
        style={styles.input}
        value={state.userName}
        onChangeText={(value) => handleChangeText('userName', value)}
        placeholder={'Nome'}
        placeholderTextColor='#D5D5D5'
      />

      <TextInput
        style={styles.input}
        value={state.userPhone}
        onChangeText={(value) => handleChangeText('userPhone', phoneMask(value))}
        placeholder={'Telefone'}
        placeholderTextColor='#D5D5D5'
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={state.userEmail}
        onChangeText={(value) => handleChangeText('userEmail', value)}
        placeholder={'E-mail'}
        placeholderTextColor='#D5D5D5'
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
      />

      <TextInput
        value={state.userPassword}
        onChangeText={(value) => handleChangeText('userPassword', value)}
        placeholder={'Senha'}
        placeholderTextColor='#D5D5D5'
        secureTextEntry={true}
        style={styles.input}
      />

      <TextInput
        value={userPasswordConfirm}
        onChangeText={(value) => setUserPasswordConfirm(value)}
        placeholder={'Confirmar Senha'}
        placeholderTextColor='#D5D5D5'
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleRegister}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
    </>
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
    borderColor: '#BBC9DD',
    borderRadius: 5,
    marginBottom: 10,
    color: '#D5D5D5'
  },
  textSimple: {
    color: '#D5D5D5',
    width: '95%',
    textAlign: 'justify',
  },
  goBack: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#4A586E',
    paddingRight: 10,
    paddingTop: 10,
  },
});