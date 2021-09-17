import React,{useState,useEffect} from 'react'
import { View, FlatList,StyleSheet,Text, Button } from 'react-native';
import Lottie from '../../components/loading';
import Categories from '../../components/categories';
import Section from '../../components/categories/section';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




import Card from '../../components/productcard';
import useFetch from '../../hooks/useFetch';



const products=({navigation})=>{
    
      
    const {loading,data}=useFetch('http://7631-83-66-167-200.ngrok.io/Stores');

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
        
        <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Icon
            name='cart'
            size={42}
            color='#4d9078'
            />
                
        </View>
        <Text style={styles.title2}>Holyum Shop</Text>  
        

        <Section searchcategory={searchcategory}/>
        
        <Categories onSearch={searchitem}/>
        

        

        <FlatList
        keyExtractor={(item) => item.id} 
        data={list}
        renderItem={getcomponent}
        />

        
                
        </View>
    )
}

export default products;

const styles=StyleSheet.create({

    title:{
        fontSize:25,
        fontWeight:'bold',
    },

    title2:{
        marginLeft:10,
        marginBottom:15,
        fontSize:30,
        color:'#4d9078',
        fontWeight:'bold'
    },

    header:{
        flexDirection:'row',
        padding:10,
        marginTop:20,
        justifyContent:'space-between',
        alignItems:'center',
        
    },

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