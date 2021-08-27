import React from 'react'
import { View, FlatList } from 'react-native';
import Lottie from '../../components/loading';

import Card from '../../components/productcard';
import useFetch from '../../hooks/useFetch';


const products=()=>{
    
    const {loading,data}=useFetch('https://fakestoreapi.com/products');

    const getcomponent=({item})=> <Card prop={item}/>;

    if(loading)
        {return <Lottie/>;}     //Koşul ifadesi içinde çalışmaz    


    return(
        <View>   
               
        <FlatList 
        data={data}
        renderItem={getcomponent}
        />
                
        </View>
    )
}

export default products;