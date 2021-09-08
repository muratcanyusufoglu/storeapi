import React,{useState,useEffect} from 'react'
import { View, FlatList,StyleSheet,Button, TouchableOpacity } from 'react-native';
import Lottie from '../../components/loading';
import Categories from '../../components/categories';
import Section from '../../components/categories/section';


import Card from '../../components/productcard';
import useFetch from '../../hooks/useFetch';


const products=({navigation})=>{
    
      
    const {loading,data}=useFetch('https://5c8c-83-66-167-200.ngrok.io/Books');

    const [list,setlist]=useState(data)


    const searchitem=text=>{

        const filterlist=data.filter(item=>{
              const searchedText=text.toLowerCase();
              const currentTitle=item.title.toLocaleLowerCase();
        
              return currentTitle.indexOf(searchedText)>-1
            }  
               
            );
            setlist(filterlist)        
    }

    const categories=()=>{
        <Section />
    }

    const handleropacity= id =>{
        {return navigation.navigate("DetailsPage",{id});};

    }

    const getcomponent=({item})=> <Card prop={item} onpress={()=>handleropacity(item.id)}/>;

    if(loading)
        {return <Lottie/>;}     //Koşul ifadesi içinde çalışmaz    


    return(
        <View style={styles.body}>                
        
        <View>
            <Categories onSearch={searchitem} getcategory={categories}/>
          </View>
        
        <Button
        title='category'
        onPress={categories}
        />
                
        <FlatList 
        data={list}
        renderItem={getcomponent}
        />
                
        </View>
    )
}

export default products;

const styles=StyleSheet.create({
    body:{
        backgroundColor:'#C8D9E4',},
})