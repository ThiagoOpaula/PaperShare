import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalView = styled.View`
  border-radius: 10px;
  margin-top: 12%;
  background-color: green;
  height: 80%;
`;

export const CenteredContainer = styled.View`
  flex-direction: row;
  margin: 24px 0 0 16px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22.5px;
  width: 40%;
  height: 90%;
  color: #848287;
  justify-content: center;
`;

export const Input = styled.TextInput`
  background-color: #e0e0dc;
  width: 50%;
  height: 90%;
  border-radius: 10px;
  margin-left: 10px;
  font-size: 21px;
`;

export const PickerOperation = styled.Picker`
  background-color: #e0e0dc;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  margin-left: 10px;
`;

export const DateText = styled.Text`
  background-color: #e0e0dc;
  width: 43%;
  height: 80%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-left: 10px;
`;

export const IconCalendar = styled(Icon)`
  background-color: #e0e0dc;
  height: 80%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
