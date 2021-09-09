

import * as React from 'react';
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
        title:'Welcome',
        headerTintColor:'#bdbdbd',
        
       
       
        
        
        }}
        />
        
        <Stack.Screen 
        name="DetailsPage" 
        component={Details} 
        
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;