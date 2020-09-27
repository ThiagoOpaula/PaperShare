import React, { useState } from 'react';

// import { View } from 'react-native';

import WalletSwipeablePanel from '../../components/WalletSwipeablePanel';

import Modal from '../../components/Modal';

import { Title, Header, Iconplus, Container } from './styles';

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Container>
        <Header>
          <Title>My Wallet</Title>
          <Iconplus
            name="plus-circle"
            size={52}
            color="#0099ff"
            onPress={toggleModal}
          />
        </Header>
      </Container>

      <WalletSwipeablePanel panel="" />
      <Modal panel={modalOpen} />
    </>
  );
};
export default Dashboard;
