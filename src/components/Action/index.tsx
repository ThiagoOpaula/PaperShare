import React from 'react';

import { Container, Paper, Price, Date } from './styles';

interface dataInfo {
  paper: string;
  price: number;
  date: string;
}

const Action: React.FC<dataInfo> = (data: dataInfo) => {
  return (
    <Container>
      <Paper>{data.paper}</Paper>
      <Price>{data.price}</Price>
      <Date>{data.date}</Date>
    </Container>
  );
};

export default Action;
