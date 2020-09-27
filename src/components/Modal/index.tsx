import React, { useState, useEffect, useCallback } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Container,
  ModalContainer,
  ModalView,
  CenteredContainer,
  Title,
  Input,
  Operation,
  DateText,
  IconCalendar,
} from './styles';

interface panelProps {
  panel: boolean;
}

const Modal: React.FC<panelProps> = ({ panel }: panelProps) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [panel]);

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
      }
      console.log(date);
    },
    [],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ModalContainer
        animationType="fade"
        hardwareAccelerated
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Container>
          <ModalView>
            <CenteredContainer>
              <Title>Data</Title>
              <DateText onPress={handleToggleDatePicker}>
                {selectedDate.getDate()}
                {selectedDate.getMonth() + 1}
                {selectedDate.getFullYear()}
              </DateText>
              <IconCalendar
                name="calendar"
                size={24}
                color="#0099ff"
                onPress={handleToggleDatePicker}
              />

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={selectedDate}
                  mode="date"
                  is24Hour
                  display="spinner"
                  onChange={handleDateChanged}
                />
              )}
            </CenteredContainer>

            <CenteredContainer>
              <Title>Papel</Title>
              <Input onFocus={handleToggleDatePicker} />
            </CenteredContainer>

            <CenteredContainer>
              <Title>operação</Title>
              <Operation style={{ borderRadius: 10 }}>
                <Operation.Item label="Java" value="java" />
                <Operation.Item label="JavaScript" value="js" />
              </Operation>
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
    </KeyboardAvoidingView>
  );
};

export default Modal;
