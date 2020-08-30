import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 80%;
  height: 60px;
  background: #0099FF;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Medium';
  color: #FFFFFF;
  font-size: 14px;
`;
