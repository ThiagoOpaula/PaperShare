import styled, { css } from 'styled-components/native';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

interface errorsProps {
  errors: boolean;
}

export const Container = styled.View`
  margin-top: 20%;
  align-items: center;
  justify-content: center;
`;

export const CenteredContainer = styled.View`
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  width: 40%;
  color: #848287;
  justify-content: center;
`;

export const Input = styled.TextInput`
  font-size: 16.5px;
  flex: 1;
  color: #333333;
  font-family: 'Inter-Regular';
`;

export const InputView = styled.View`
  background-color: #e0e0dc;
  width: 50%;
  height: 44px;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const PickerOperation = styled(Picker)`
  margin-left: 10px;
  height: 40px;
  width: 90%;
`;

export const OperationViewer = styled.View`
  flex-direction: row;
  width: 50%;
  height: 44px;
  align-items: center;
  background-color: #e0e0dc;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const CalendarViewer = styled.View`
  flex-direction: row;
  width: 50%;
  height: 44px;
  background-color: #e0e0dc;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const DateText = styled.Text`
  width: 68%;
  border-radius: 10px;
  margin-left: 10px;
  font-size: 16.5px;
  align-items: center;
  justify-content: center;
`;

export const IconCalendar = styled(Icon)`
  margin-right: 10px;
`;

export const ButtonView = styled.View`
  flex-direction: row;
  margin-top: 60px;
  align-items: center;
  width: 80%;
  height: 8.5%;
  justify-content: space-between;
`;

export const CancelButton = styled(RectButton)`
  background-color: red;
  width: 25%;
  height: 80%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled(RectButton)`
  background-color: #0099ff;
  width: 40%;
  height: 80%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Medium';
  color: #ffffff;
`;

export const AlertView = styled.View`
  height: 2%;
  margin: 0px 0px 5% 40%;
`;

export const AlertText = styled.Text`
  font-family: 'Inter-Medium';
  color: red;
`;
