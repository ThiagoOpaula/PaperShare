import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 80%;
  height: 60px;
  padding: 0 16px;
  background: #ebebeb;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #333333;
  font-size: 16px;
  font-family: 'Inter-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 12px;
`;
