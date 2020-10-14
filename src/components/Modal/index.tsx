import React, { useState, useEffect, useCallback } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import {
  Container,
  ModalContainer,
  ModalView,
  CenteredContainer,
  Title,
  Input,
  PickerOperation,
  DateText,
  IconCalendar,
} from './styles';

interface panelProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<panelProps> = ({ isOpen, setIsOpen }: panelProps) => {
  const [modalVisible, setModalVisible] = useState(isOpen);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [formatedDate, setFormatedDate] = useState('');
  // const [show, setShow] = useState(false);

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ModalContainer
        animationType="slide"
        hardwareAccelerated
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setIsOpen();
        }}
      >
        <Container>
          <ModalView>
            <CenteredContainer>
              <Title>Data</Title>
              <DateText onPress={handleToggleDatePicker}>
                {formatedDate}
              </DateText>
              <IconCalendar
                name="calendar"
                size={24}
                color="#0099ff"
                onPress={handleToggleDatePicker}
              />
            </CenteredContainer>

            <CenteredContainer>
              <Title>Papel</Title>
              <Input />
            </CenteredContainer>

            <CenteredContainer>
              <Title>operação</Title>
              <PickerOperation>
                <PickerOperation.Item label="Java" value="java" />
                <PickerOperation.Item label="JavaScript" value="js" />
              </PickerOperation>
            </CenteredContainer>

            <CenteredContainer>
              <Title>quantidade</Title>
              <Input />
            </CenteredContainer>

            <CenteredContainer>
              <Title>preço</Title>
              <Input />
            </CenteredContainer>

            <CenteredContainer>
              <Title>custo</Title>
              <Input />
            </CenteredContainer>
          </ModalView>
        </Container>
      </ModalContainer>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode="date"
          display="spinner"
          onChange={handleDateChanged}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default Modal;
