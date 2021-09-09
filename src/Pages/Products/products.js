import React,{useState,useEffect} from 'react'
import { View, FlatList,StyleSheet,Text, Button } from 'react-native';
import Lottie from '../../components/loading';
import Categories from '../../components/categories';
import Section from '../../components/categories/section';


import Card from '../../components/productcard';
import useFetch from '../../hooks/useFetch';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const products=({navigation})=>{
    
      
    const {loading,data}=useFetch('http://6f0e-83-66-167-200.ngrok.io/Books');

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

    const searchcategory=text=>{

        const filterlist=data.filter(item=>{
              const searchedText=text.toLowerCase();
              const currentTitle=item.category.toLocaleLowerCase();
        
              return currentTitle.indexOf(searchedText)>-1
            }  
               
            );
            setlist(filterlist)        
    }

   
    const handleropacity= id =>{
        {return navigation.navigate("DetailsPage",{id});};

    }


    const getcomponent=({item})=>
    
    <Card prop={item} onpress={()=>handleropacity(item.id)}
    
    />;

    if(loading)
        {return <Lottie/>;}     //Koşul ifadesi içinde çalışmaz    


    return(
        <View style={styles.body}>    
                
               
        <View>
            <Categories onSearch={searchitem}/>
          </View>

        <Section searchcategory={searchcategory}/>

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
        flex:1,
        backgroundColor:'#C8D9E4',},
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#f8f9fa',
        margin:7,
        borderWidth:1,
        borderRadius:25,
    }
    })