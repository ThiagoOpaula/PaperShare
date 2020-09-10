import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';

import { Title, Header, Iconplus } from './styles';

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <View>
      <Header>
        <Title>My Wallet</Title>
        <Iconplus name="plus-circle" size={56} color="#0099ff" />
      </Header>
    </View>
  );
};
export default Dashboard;
