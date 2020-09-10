import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { ModalStyle, Title, CenteredView, ModalHeader } from './styles';

interface IModalProps {
  isOpen: boolean;
}

const ModalAdd: React.FC<IModalProps> = ({ isOpen }: IModalProps) => {
  const [modalVisible, setModalVisible] = useState(isOpen);

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);

  function closeModal(): void {
    setModalVisible(false);
  }

  return (
    <CenteredView>
      <ModalStyle animationType="fade" transparent visible={modalVisible}>
        <CenteredView>
          <ModalHeader>
            <Title>teste</Title>
            <Icon
              name="x"
              size={48}
              color="#0099ff"
              onPress={() => closeModal()}
            />
          </ModalHeader>
        </CenteredView>
      </ModalStyle>
    </CenteredView>
  );
};

export default ModalAdd;
