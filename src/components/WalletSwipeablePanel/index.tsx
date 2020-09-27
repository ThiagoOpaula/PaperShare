import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// import { Picker } from '@react-native-community/picker';

import { Container, Panel } from './styles';

interface panelProps {
  panel: boolean;
}

const WalletSwipeablePanel: React.FC<panelProps> = ({ panel }: panelProps) => {
  const [isPanelActive, setIsPanelActive] = useState(true);

  // const openPanel = () => {
  //   setIsPanelActive(true);
  // };

  useEffect(() => {
    setIsPanelActive(!isPanelActive);
  }, [panel]);

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    onlySmall: true,
    closeOnTouchOutside: true,
    noBar: false,
    showCloseButton: false,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });

  return (
    <Panel {...panelProps} isActive={isPanelActive}>
      <Container>
        <Text>texto</Text>
      </Container>
    </Panel>
  );
};

export default WalletSwipeablePanel;
