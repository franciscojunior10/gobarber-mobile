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
  GoBackLogonButton,
  GoBackLogonButtonText,
  Icon,
} from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleGoBackLogon = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleCreateAccount = useCallback((data: object) => {
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
            <Title>Crie sua conta</Title>

            <Form ref={formRef} onSubmit={handleCreateAccount}>
              <Input name="name" icon="user" placeholder="Nome" />
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
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <GoBackLogonButton
        onPress={() => {
          handleGoBackLogon();
        }}
      >
        <Icon name="arrow-left" size={20} color="#fff" />
        <GoBackLogonButtonText>Voltar para logon</GoBackLogonButtonText>
      </GoBackLogonButton>
    </>
  );
};

export default SignUp;
