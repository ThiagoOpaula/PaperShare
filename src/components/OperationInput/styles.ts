import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  background-color: #e0e0dc;
  width: 50%;
  height: 44px;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 10px;
  border-width: 1.5px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #ed1717;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #0099ff;
    `}
`;

export const Input = styled.TextInput`
  font-size: 16.5px;
  flex: 1;
  color: #333333;
  font-family: 'Inter-Regular';
`;
