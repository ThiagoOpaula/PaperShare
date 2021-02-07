import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import Action from '../../components/Action';

import operationModel from '../../models/Operation';

import OperationRepository from '../../repositories/OperationRepository';

import { Title, Header, Iconplus, Container, List } from './styles';

const Dashboard: React.FC = () => {
  const [clientList, setClientList] = useState<Realm.Results<operationModel>>();
  const [Actions, setActions] = useState<Realm.Results<operationModel>>();

  // function toggleModal(): void {
  //   setModalOpen(!modalOpen);
  // }

  const clientRepository = new OperationRepository();

  const loadClients = async () => {
    const data = await clientRepository.GetAll();
    console.log('teste', data);
    setActions(data);
  };

  useEffect(() => {
    loadClients();
  }, []);

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
          data={Actions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Action data={item} />}
        />
      </Container>
    </>
  );
};
export default Dashboard;
