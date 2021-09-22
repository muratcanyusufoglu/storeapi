

import * as React from 'react';
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Pages/Details'
import Products from './Pages/Products'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
        name="ProductsPage" 
        component={Products}
        options={{
          headerShown:false,      
        
        }}
        />
        
        <Stack.Screen 
        name="DetailsPage" 
        component={Details} 
        options={{
          headerShown:false,
          
          
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;