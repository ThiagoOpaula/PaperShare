import React, { useCallback } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container } from './styles';

interface IDateTimePickerProps {
  setIsOpen: () => void;
  picked: (date: Date) => void;
  setFormValue: (field: string, value: any) => void;
  selectedDate: Date;
}

const DateTime: React.FC<IDateTimePickerProps> = ({
  setIsOpen,
  picked,
  setFormValue,
  selectedDate,
}: IDateTimePickerProps) => {
  const handleDateChanged = useCallback(
    (event: any, date: Date | undefined) => {
      if (Platform.OS === 'android') {
        setIsOpen();
      }
      if (date) {
        picked(date);
        setFormValue('date', date);
      }
    },
    [],
  );

  return (
    <Container>
      <DateTimePicker
        testID="dateTimePicker"
        value={selectedDate}
        mode="date"
        display="spinner"
        onChange={handleDateChanged}
      />
    </Container>
  );
};

export default DateTime;
