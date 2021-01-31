import React, { useState, useCallback, useRef, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input } from './styles';

interface OperationProps {
  isWrong: boolean;
}

const OperationInput: React.FC<TextInputProps & OperationProps> = (
  { ...rest }: TextInputProps,
  { isWrong }: OperationProps,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useCallback(() => {
    console.log(isWrong);
  }, [isWrong]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused} isErrored={isErrored}>
      <Input {...rest} onFocus={handleInputFocus} onBlur={handleInputBlur} />
    </Container>
  );
};

export default OperationInput;
