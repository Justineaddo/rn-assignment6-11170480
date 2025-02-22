// App.js
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './screens/homeScreen ';
import { CheckoutPage } from './screens/CartScreen';
import React, { useState } from 'react';

export default function App() {
  const Drawer = createDrawerNavigator();
  const [refreshFlag, refresh] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ 
          headerShown: false,
          drawerLabelStyle: { fontFamily: 'ArefRuqaa_400Regular' }
        }}>
        <Drawer.Screen name='Home'>
          {props => <HomePage {...props} refresh={refresh} refreshFlag={refreshFlag} />}
        </Drawer.Screen>
        <Drawer.Screen name='Checkout'>
          {props => <CheckoutPage {...props} refresh={refresh} refreshFlag={refreshFlag} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
