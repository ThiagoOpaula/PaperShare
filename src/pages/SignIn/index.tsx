import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
  ToastAndroid,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Logo,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const SingIn = () => {
    auth()
      .signInWithEmailAndPassword('thiago-oliveira2001@live.com', '123456789')
      .then(() => {
        console.log('User account created & signed in!');
        ToastAndroid.show('Login realizado', ToastAndroid.SHORT);
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          console.log('That email address is already in use!');
          ToastAndroid.show('Senha invalida', ToastAndroid.SHORT);
        }
      });
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Logo source={logoImg} />
            <View>
              <Title>Paper Shares</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <ForgotPassword>
              <ForgotPasswordText>
                Oh no! I forgot my password
              </ForgotPasswordText>
            </ForgotPassword>
            <Button onPress={() => SingIn()}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#0099ff" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
