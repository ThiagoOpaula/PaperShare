import React, { useState, useEffect } from 'react';
// import { KeyboardAvoidingView, View } from 'react-native';
import { format } from 'date-fns';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import OperationInput from '../../components/OperationInput';
import Datetime from '../../components/DateTime';
import OperationModel from '../../models/Operation';
import OperationRepository from '../../repositories/OperationRepository';

import {
  Container,
  CenteredContainer,
  Title,
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
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [state, setState] = useState<Operation>({
    operation: 1,
  });
  const clientRepository = new OperationRepository();

  const navigation = useNavigation();

  useEffect(() => {
    setFormatedDate(format(selectedDate, 'dd/MM/yyyy'));
  }, [selectedDate]);

  const handleToggleDatePicker = (): void => {
    setCalendarOpen(!calendarOpen);
  };

  const pickedDate = (date: Date) => {
    setSelectedDate(date);
  };

  const SignupSchema = yup.object().shape({
    date: yup.date().max(new Date(), 'insira uma data valida').required(),
    paper: yup.string().max(50, 'Too Long!').required('campo obrigatório'),
    operation: yup.number().min(1).required('campo obrigatório'),
    quantity: yup
      .number()
      .max(10000, 'Too Long!')
      .required('campo obrigatório'),
    price: yup.number().required('campo obrigatório'),
    charge: yup.number().required('campo obrigatório'),
  });

  async function handleAddOperation(values: any) {
    console.log(values);
    const action = new OperationModel();
    action.paper = values.paper;
    action.date = values.date;
    action.operation = values.operation;
    action.quantity = values.quantity;
    action.price = values.price;
    action.charge = values.charge;
    try {
      await clientRepository.SaveClient(action);
      console.log('salvou');
    } catch (err) {
      console.log(err);
    }
  }

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
      onSubmit={values => {
        handleAddOperation(values);
      }}
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
                color={errors.date ? 'red' : '#0099ff'}
                onPress={handleToggleDatePicker}
              />
            </CalendarViewer>
          </CenteredContainer>
          <AlertView>
            {errors.date ? <AlertText>{errors.date}</AlertText> : null}
          </AlertView>

          <CenteredContainer>
            <Title>Papel</Title>

            <OperationInput
              placeholder="OER6"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleChange('paper')}
              value={values.paper}
            />
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

            <OperationInput
              placeholder="10"
              keyboardType="numeric"
              onChangeText={handleChange('quantity')}
              value={values.quantity}
              returnKeyType="next"
            />
          </CenteredContainer>
          <AlertView>
            {errors.quantity || touched.quantity ? (
              <AlertText>{errors.quantity}</AlertText>
            ) : null}
          </AlertView>
          <CenteredContainer>
            <Title>preço</Title>

            <OperationInput
              placeholder="0.00R$"
              keyboardType="numeric"
              onChangeText={handleChange('price')}
              onBlur={handleBlur('price')}
              value={values.price}
            />
          </CenteredContainer>
          <AlertView>
            {errors.price && touched.price ? (
              <AlertText>{errors.price}</AlertText>
            ) : null}
          </AlertView>
          <CenteredContainer>
            <Title>custo</Title>
            <OperationInput
              placeholder="0.00R$"
              keyboardType="numeric"
              onChangeText={handleChange('charge')}
              value={values.charge}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
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
            <AddButton onPress={() => handleSubmit()}>
              <ButtonText>Salvar Operação</ButtonText>
            </AddButton>
          </ButtonView>
          {calendarOpen && (
            <Datetime
              setIsOpen={handleToggleDatePicker}
              setFormValue={setFieldValue}
              picked={pickedDate}
              selectedDate={selectedDate}
            />
          )}
        </Container>
      )}
    </Formik>
  );
};

export default Operation;
