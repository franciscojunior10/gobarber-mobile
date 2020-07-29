import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

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
  const navigation = useNavigation();

  const handleGoBackLogon = useCallback(() => {
    navigation.goBack();
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

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('deu certo');
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
