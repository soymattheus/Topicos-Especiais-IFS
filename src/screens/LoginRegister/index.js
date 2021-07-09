import React, { useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import * as SecureStore from 'expo-secure-store';
import { Icon } from 'react-native-elements';


import { styles } from './style';


export function LoginRegister({navigation,route}) {
  const [exibicao, setExibicao] = useState('login')
  const [showLoginPassword, setShowLoginPassword] = useState(true)
  const [showRegisterPassword, setShowRegisterPassword] = useState(true)

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registeredName,setRegisteredName] = useState('');
  const [registredPhone, setRegistredPhone] = useState('');
  const [registeredEmail,setRegisteredEmail] = useState('');
  const [registeredPassword,setRegisteredPassword] = useState('');

async function getUserData() {
  let userData = await SecureStore.getItemAsync('userData');
  if (userData) {
    setRegisteredName(JSON.parse(userData).name);
    setRegistredPhone(JSON.parse(userData).phone);
    setRegisteredEmail(JSON.parse(userData).email);
    setEmail(JSON.parse(userData).email);
    setRegisteredPassword(JSON.parse(userData).password);
  }
}

useEffect(() => {
    getUserData();

    const unsubscribe = navigation.addListener('focus', () => {
      getUserData();
    });

    return () => {
      unsubscribe;
    };

  },[navigation]); 

  function handleLogin() {
    if (email.length !== 0 && password.length !== 0) {
      if (email === registeredEmail && password === registeredPassword) {
        setPassword('');
        navigation.replace('Home', { name:registeredName, email:registeredEmail, phone: registredPhone });        
      } else {
        Alert.alert(
          'Erro ao tentar efetuar o login:',
          'Informe o e-mail e a senha corretos' 
        );        
      }
    } else {
      Alert.alert(
        'Erro ao tentar efetuar o login:',
        'Informe o e-mail e a senha corretos!'
      );
    } 
  }
 
  const setUserData = (userData) => {
      return SecureStore.setItemAsync('userData', JSON.stringify(userData));
  };

  function handleRegister() {
    if (!name || !phone || !email || !password) {
      Alert.alert(
        'Erro ao tentar cadastrar usuário:',
        'Preencha todos os campos corretamente!'
      );
    } else {
      setUserData({name: name, phone: phone, email: email, password: password});
      getUserData()
      setName('')
      setPhone('')
      setEmail('')
      setPassword('')
      navigation.navigate('LoginRegister', { email: email });
      setExibicao('login')
    }
    console.log(registredPhone, registeredName)
  }

  return (
    <ScrollView style={{backgroundColor: '#612F74'}}>
    <View style={styles.container}>
      <Text style={styles.titleText}>Autenticação e Persistência de Dados</Text>
      <View style={styles.chooseTela}>
        <TouchableOpacity onPress={() => setExibicao('login')}>
          <Text style={styles.chooseTelaText} >Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setExibicao('registrar')}>
          <Text style={styles.chooseTelaText} >Registrar</Text>
        </TouchableOpacity>
      </View>
      {
        exibicao === 'login' ? 
        <>
          <View style={styles.viewInput}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='envelope'
            type='font-awesome'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholder={'E-mail'}
            placeholderTextColor='#fff'
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
          />
          </View>

          <View style={styles.viewInput}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='key'
            type='font-awesome-5'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
            placeholder={'Senha'}
            placeholderTextColor='#fff'
            secureTextEntry={showLoginPassword}
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowLoginPassword(!showLoginPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name = {showLoginPassword ? 'eye-slash' : 'eye'}
              type='font-awesome'
              color='#fff'
              size={22}
            />
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>


          <View style={styles.passwordRecover}>
            <Text style={styles.textSimple}>Esqueceu sua senha?</Text>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Informação:',`A sua eḿail e senha cadastrados: ${registeredEmail} ${registeredPassword}`)}>
              <Text style={styles.buttonText}>Lembrar minha senha</Text>
            </TouchableOpacity>
          </View>
        </>

        :

        <>
        {/* REGISTRAR */}
        
        <View style={styles.viewInput}>
        <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='user'
            type='font-awesome'
            color='#fff'
            size={22}
          /> 
      <TextInput style={styles.input}
        //value={name}
        onChangeText={(name) => setName(name)}
        placeholder={'Github User Name'}
        placeholderTextColor='#fff'
      />
      </View>

      <View style={styles.viewInput}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='phone'
            type='font-awesome'
            color='#fff'
            size={22}
          />
      <TextInput
        style={styles.input}
        //value={phone}
        onChangeText={(phone) => setPhone(phone)}
        placeholder={'Telefone'}
        placeholderTextColor='#fff'
        keyboardType="numeric"
      />
      </View>

      
      <View style={styles.viewInput}>
      <Icon
        style={{ paddingHorizontal: 4, width: 30 }}
        name='envelope'
        type='font-awesome'
        color='#fff'
        size={22}
      />
      <TextInput
        style={styles.input}
        //value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder={'E-mail'}
        placeholderTextColor='#fff'
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
      />
      </View>

      <View style={styles.viewInput}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='key'
            type='font-awesome-5'
            color='#fff'
            size={22}
          />
      <TextInput
        onChangeText={(password) => setPassword(password)}
        placeholder={'Senha'}
        placeholderTextColor='#fff'
        secureTextEntry={showRegisterPassword}
        style={styles.input}
      />
      <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowRegisterPassword(!showRegisterPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name = {showRegisterPassword ? 'eye-slash' : 'eye'}
              //name='eye'
              type='font-awesome'
              color='#fff'
              size={22}
            />
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>Cadastrar</Text>
      </TouchableOpacity>
        </>
      }
    </View>
    </ScrollView>
  );
}