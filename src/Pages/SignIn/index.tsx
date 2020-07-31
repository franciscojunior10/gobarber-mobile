import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  Icon,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleCreateAccount = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);

  const handleSigIn = useCallback((data: object) => {
    console.log(data);
  }, []);

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
            <Image source={logoImg} />
            <Title>Faça seu logon</Title>

            <Form ref={formRef} onSubmit={handleSigIn}>
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />
            </Form>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>

            <ForgotPassword
              onPress={() => {
                console.log('esqueci minha senha');
              }}
            >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton
        onPress={() => {
          handleCreateAccount();
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
