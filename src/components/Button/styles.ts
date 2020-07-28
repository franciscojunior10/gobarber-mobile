import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #ff9000;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-top: 8px;
`;

export const ButtonTitle = styled.Text`
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
`;
