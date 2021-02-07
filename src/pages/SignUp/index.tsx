import React, { useCallback } from 'react';
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

import { Formik } from 'formik';
import * as yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Logo,
  Title,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const SingUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'thiago-oliveira2001@live.com',
        '12345678',
      )
      .then(() => {
        console.log('User account created & signed in!');
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
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
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                SingUp();
              }}
            >
              Criar Conta
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="log-in" size={20} color="#0099ff" />
        <CreateAccountButtonText>Já tenho uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
