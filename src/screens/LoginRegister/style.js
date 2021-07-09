import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#612F74',
    paddingHorizontal: 20,
  },
  titleText: {
    fontWeight: 'bold',
    paddingVertical: 20,
    fontSize: 30,
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  loginButton: {
    width: '40%',
    height: 40,
    backgroundColor: '#C47DF6',
    padding: 5,
    borderRadius: 5,
    marginVertical: 15,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 45,
    padding: 10,
    color: '#fff',
  },
  textSimple: {
    color: '#FFF',
  },
  textSimpleJustify: {
    color: '#FFF',
    width: '95%',
    textAlign: 'justify',
  },
  chooseTela: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  chooseTelaText: {
    fontSize: 23,
    color: '#fff',
    paddingHorizontal: 20,
  },
  passwordRecover: {
    marginTop: 10,
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#C47DF6',
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    width: '100%',
    paddingRight: 26,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    alignItems: 'center',
  }
});
