import React, { useState, useCallback, useRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input } from './styles';

const OperationInput: React.FC<TextInputProps> = ({
  ...rest
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [error, setError] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused} isErrored={error}>
      <Input {...rest} onFocus={handleInputFocus} onBlur={handleInputBlur} />
    </Container>
  );
};

export default OperationInput;
