import React, { useState, useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
// import { KeyboardAvoidingView, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  Container,
  CenteredContainer,
  Title,
  Input,
  InputView,
  DateText,
  IconCalendar,
  PickerOperation,
  OperationViewer,
  CalendarViewer,
  ButtonView,
  AddButton,
  CancelButton,
  ButtonText,
} from './styles';

const Operation: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formatedDate, setFormatedDate] = useState('');
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    language: 'java',
  });

  const navigation = useNavigation();

  useEffect(() => {
    setFormatedDate(format(selectedDate, 'dd/MM/yyyy'));
  }, [selectedDate]);

  const handleToggleDatePicker = () => {
    setShow(!show);
  };

  const handleDateChanged = useCallback(
    (event: any, date: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShow(false);
      }
      if (date) {
        setSelectedDate(date);
        setFormatedDate(format(date, 'dd/MM/yyyy'));
      }
    },
    [],
  );

  // const handleOperation = useCallback((data: object) => {
  //   console.log(data);
  // }, []);

  const handlePickerChanger = (itemValue: string | number) => {
    setState({ language: itemValue.toString() });
  };

  const SignupSchema = yup.object().shape({
    paper: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    quantity: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    price: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    charge: yup.number().max(10, 'Too Long!').required('Required'),
  });

  return (
    <Formik
      initialValues={{ paper: '', quantity: '', price: '', charge: '' }}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Container>
          <CenteredContainer>
            <Title>Data</Title>
            <CalendarViewer>
              <DateText onPress={handleToggleDatePicker}>
                {formatedDate}
              </DateText>
              <IconCalendar
                name="calendar"
                size={32}
                color="#0099ff"
                onPress={handleToggleDatePicker}
              />
            </CalendarViewer>
          </CenteredContainer>

          <CenteredContainer>
            <Title>Papel</Title>
            <InputView>
              <Input
                placeholder="OER6"
                onChangeText={handleChange('paper')}
                onBlur={handleBlur('paper')}
                value={values.paper}
              />
            </InputView>
          </CenteredContainer>

          <CenteredContainer>
            <Title>operação</Title>
            <OperationViewer>
              <PickerOperation
                selectedValue={state.language}
                onValueChange={handlePickerChanger}
              >
                <Picker.Item label="Compra" value="compra" />
                <Picker.Item label="Venda" value="venda" />
              </PickerOperation>
            </OperationViewer>
          </CenteredContainer>

          <CenteredContainer>
            <Title>quantidade</Title>
            <InputView>
              <Input
                placeholder="10"
                keyboardType="numeric"
                onChangeText={handleChange('quantity')}
                onBlur={handleBlur('quantity')}
                value={values.quantity}
              />
            </InputView>
          </CenteredContainer>

          <CenteredContainer>
            <Title>preço</Title>
            <InputView>
              <Input
                placeholder="0.00R$"
                keyboardType="numeric"
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
              />
            </InputView>
          </CenteredContainer>

          <CenteredContainer>
            <Title>custo</Title>
            <InputView>
              <Input
                placeholder="0.00R$"
                keyboardType="numeric"
                onChangeText={handleChange('charge')}
                onBlur={handleBlur('charge')}
                value={values.charge}
              />
            </InputView>
          </CenteredContainer>

          <ButtonView>
            <CancelButton onPress={() => navigation.navigate('Dashboard')}>
              <ButtonText>Cancelar</ButtonText>
            </CancelButton>
            <AddButton onPress={handleSubmit} title="Submit">
              <ButtonText>Salvar Operação</ButtonText>
            </AddButton>
          </ButtonView>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={selectedDate}
              mode="date"
              display="spinner"
              onChange={handleDateChanged}
            />
          )}
        </Container>
      )}
    </Formik>
  );
};

export default Operation;
