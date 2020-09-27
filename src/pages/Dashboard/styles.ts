import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 82.5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-family: 'Inter-ExtraBold';
`;

export const Iconplus = styled(Icon)``;
