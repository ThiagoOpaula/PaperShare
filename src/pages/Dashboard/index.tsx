import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Repository from '../../components/Action';

import operationModel from '../../models/Operation';

import OperationRepository from '../../repositories/OperationRepository';

import { Title, Header, Iconplus, Container, List } from './styles';

const Dashboard: React.FC = () => {
  const [clientList, setClientList] = useState<Realm.Results<operationModel>>();
  // const [modalOpen, setModalOpen] = useState(false);

  // function toggleModal(): void {
  //   setModalOpen(!modalOpen);
  // }

  const clientRepository = new OperationRepository();

  const loadClients = async () => {
    const data = await clientRepository.GetAll(nameValue);
    setClientList(data);
  };

  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Header>
          <Title>My Wallet</Title>
          <Iconplus
            name="plus-circle"
            size={52}
            color="#0099ff"
            onPress={() => navigation.navigate('Operation')}
          />
        </Header>
        <List
          keyboardShouldPersistTaps="handled"
          data={[
            {
              paper: 'ort5',
              operation: 1,
            },
          ]}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Repository data={item} />}
        />
      </Container>
    </>
  );
};
export default Dashboard;
