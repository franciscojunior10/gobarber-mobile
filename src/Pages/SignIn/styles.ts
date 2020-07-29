import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f4ede8;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
`;

export const Icon = styled(IconFeather)`
  margin-right: 6px;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
