import React from 'react'
import { View, FlatList,Text, Button } from 'react-native';
import Lottie from '../../components/loading';

import Card from '../../components/productcard';
import useFetch from '../../hooks/useFetch';


const products=()=>{
    
    const {loading,data}=useFetch('https://localhost:5001/Books');
    
    const getcomponent=({item})=> <Card prop={item}/>;

    const title=data.map(item=>item.category=="men's clothing")

    
    if(loading)
        {return <Lottie/>;}     //Koşul ifadesi içinde çalışmaz    

    return(
        <View>        

        <Text>{title}</Text>
                       
        <FlatList 
        data={data}
        renderItem={getcomponent}
        />
                
        </View>
    )
}

export default products;