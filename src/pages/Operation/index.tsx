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
  AlertView,
  AlertText,
} from './styles';

interface Operation {
  operation: number | string;
}

const Operation: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formatedDate, setFormatedDate] = useState('');
  const [show, setShow] = useState(false);
  const [state, setState] = useState<Operation>({
    operation: 1,
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

  const SignupSchema = yup.object().shape({
    date: yup.date().max(new Date(), 'insira uma data valida').required(),
    paper: yup.string().max(50, 'Too Long!').required('campo obrigatório'),
    operation: yup.number().min(1).required('campo obrigatório'),
    quantity: yup.number().max(50, 'Too Long!').required('campo obrigatório'),
    price: yup.number().required('campo obrigatório'),
    charge: yup.number().required('campo obrigatório'),
  });

  return (
    <Formik
      initialValues={{
        date: new Date(),
        paper: '',
        operation: state.operation,
        quantity: '',
        price: '',
        charge: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
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
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={selectedDate}
                mode="date"
                display="spinner"
                onChange={(date, event) => {
                  if (date) {
                    handleDateChanged(date, event);
                    setFieldValue('date', selectedDate);
                  }
                }}
              />
            )}
          </CenteredContainer>
          <AlertView>
            {errors.date && touched.date ? (
              <AlertText>{errors.date}</AlertText>
            ) : null}
          </AlertView>

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
          <AlertView>
            {errors.paper && touched.paper ? (
              <AlertText>{errors.paper}</AlertText>
            ) : null}
          </AlertView>
          <CenteredContainer>
            <Title>operação</Title>
            <OperationViewer>
              <PickerOperation
                selectedValue={state.operation}
                onValueChange={itemValue => {
                  setState({ operation: itemValue });
                  setFieldValue('operation', itemValue);
                }}
              >
                <Picker.Item label="Compra" value={1} />
                <Picker.Item label="Venda" value={2} />
              </PickerOperation>
            </OperationViewer>
          </CenteredContainer>
          <AlertView>
            {errors.operation && touched.operation ? (
              <AlertText>{errors.operation}</AlertText>
            ) : null}
          </AlertView>
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
          <AlertView>
            {errors.quantity && touched.quantity ? (
              <AlertText>{errors.quantity}</AlertText>
            ) : null}
          </AlertView>
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
          <AlertView>
            {errors.price && touched.price ? (
              <AlertText>{errors.price}</AlertText>
            ) : null}
          </AlertView>
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
          <AlertView>
            {errors.charge && touched.charge ? (
              <AlertText>{errors.charge}</AlertText>
            ) : null}
          </AlertView>
          <ButtonView>
            <CancelButton onPress={() => navigation.navigate('Dashboard')}>
              <ButtonText>Cancelar</ButtonText>
            </CancelButton>
            <AddButton onPress={handleSubmit} title="Submit">
              <ButtonText>Salvar Operação</ButtonText>
            </AddButton>
          </ButtonView>
        </Container>
      )}
    </Formik>
  );
};

export default Operation;
