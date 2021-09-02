import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Separator from '../components/Separator';

export default function Login({navigation,route}) {
  const [registeredState, setRegisteredState] = React.useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [haveAccount, setHaveAccount] = React.useState(false);

//{name: userName, phone: userPhone, email: userEmail, password: userPassword}
async function getUserData() {
  let userData = await SecureStore.getItemAsync('userData');
  if (userData) {
    setEmail(JSON.parse(userData).email);
    setRegisteredState({...JSON.parse(userData)});
    setHaveAccount(true);
  } else {
    setHaveAccount(false);
  }
}

/* async function handleDelete() {
  //usada para remover a chave userData (dados gravados) nos testes
  await SecureStore.deleteItemAsync('userData');
} */

React.useEffect(() => {
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
      if (email === registeredState.email && password === registeredState.password) {
        setPassword('');
        global.nameLogin = registeredState.name; //Variável global
        navigation.replace('BottomStack');        
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

  function handleRegister() {
    setEmail('');
    setPassword('');
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Secure Store App</Text>
      <TextInput
        style={styles.input}
        defaultValue={email}
        value={email}
        onChangeText={(value) => setEmail(value)}
        placeholder='E-mail'
        placeholderTextColor='#D5D5D5'
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={(value) => setPassword(value)}
        placeholder='Senha'
        placeholderTextColor='#D5D5D5'
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Separator marginVertical={10} />
      { (!haveAccount)  ? 
      (<>
      <Text style={styles.textSimple}>É a primeira vez aqui e ainda não se cadastrou?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
      </>
      ) : (
      <>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Informação:',`A sua senha
       foi enviada para o email cadastrado: ${registeredState.email} ${registeredState.password}`)}>
        <Text style={styles.buttonText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      </>
      )}
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
  button: {
    backgroundColor: '#2F3538',
    padding: 5,
    borderRadius: 5,
  },
  loginButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#2F3538',
    padding: 5,
    borderRadius: 5,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D5D5D5',
    textAlign: 'center',
  },
  buttonText: {
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
    color: '#fff'
  },
  textSimple: {
    color: '#D5D5D5',
  },
  textSimpleJustify: {
    color: '#D5D5D5',
    width: '95%',
    textAlign: 'justify',
  },
});
