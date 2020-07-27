import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const Route = createStackNavigator();

const Routes: React.FC = () => (
  <Route.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Route.Screen name="SignIn" component={SignIn} />
    <Route.Screen name="SignUp" component={SignUp} />
  </Route.Navigator>
);

export default Routes;
