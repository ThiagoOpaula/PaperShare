import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 132px;
  height: 120px
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #949494;
  font-family: 'Inter-Medium';
  margin: 40px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
`;

export const ForgotPasswordText = styled.Text`
  color: #0099FF;
  font-size: 14px;
  font-family: 'Inter-Regular';
  padding-left: 33%;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  border-color: #0099ff;
  background: #FFFFFF;
  padding: 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #0099ff;
  font-size: 16px;
  font-family: 'Inter-Regular';
  margin-left: 16px;
`;
