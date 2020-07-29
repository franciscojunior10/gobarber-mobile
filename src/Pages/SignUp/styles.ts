import styled from 'styled-components/native';
import { Platform } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const GoBackLogonButton = styled.TouchableOpacity`
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

export const GoBackLogonButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
