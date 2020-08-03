import React from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Button title="Logout" onPress={signOut} color="#ff9000" />
    </Container>
  );
};

export default Dashboard;
