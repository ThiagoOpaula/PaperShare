import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';

import Modal from '../../components/Modal';

import { Title, Header, ModalButton } from './styles';

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <View>
      <Header>
        <Title>My Wallet</Title>

        <Icon name="plus-circle" size={56} color="#0099ff" />

      </Header>
      <Title>My Wallet</Title>

    </View>
  );
};
export default Dashboard;
