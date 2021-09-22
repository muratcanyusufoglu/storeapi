import React,{useState,useEffect} from 'react'
import { View, FlatList,StyleSheet,Text, Button } from 'react-native';
import Lottie from '../../components/loading';
import Categories from '../../components/categories';
import Section from '../../components/categories/section';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




import Card from '../../components/productcard';
import useFetch from '../../hooks/useFetch';



const products=({navigation})=>{
    
      
    const {loading,data}=useFetch('http://fca4-83-66-167-200.ngrok.io/Stores');
   
    const [list,setlist]=useState(data)

    const [visible,setvisible]=useState(false);  


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

    const priceTop=()=>{
        
        const filterlist=data.sort(
        function(a, b) {  
            return b.price-a.price;                
        });
        
        setlist(filterlist)
        
    }
    
    const priceDown=()=>{
        
        const filterlist=data.sort(
        function(a, b) {  
            return a.price-b.price;                
        });
        
        setlist(filterlist)
        
    }

    const atoz=()=>{
        
        const filterlist=data.sort(
        function(a, b) {  
            return a.title>b.title;                
        });
        
        setlist(filterlist)
        
    }

    const ztoa=()=>{
        
        const filterlist=data.sort(
        function(a, b) {  
            return a.title<b.title;                
        });
        
        setlist(filterlist)
        
    }
    

    const getlist=()=>{
    
        if(visible==false)
        {setvisible(true)}
        else{
            setvisible(false)
        }
            
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
        <Text style={styles.title2}>BlaBla Shop</Text>  
        

        <Section searchcategory={searchcategory}/>
        
        <Categories onSearch={searchitem} getfilterlist={getlist}/>

        {visible ?(
        <View style={styles.sections}> 
        <Text style={styles.filter} onPress={atoz}>A-Z</Text>
        <Text style={styles.filter} onPress={ztoa}>Z-A</Text>
        <Text style={styles.filter} onPress={priceTop}>Price Top</Text>
        <Text style={styles.filter} onPress={priceDown}>Price Down</Text>
        </View>) : null}             
        
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
    },

    sections:{
        flexDirection:'row',
        marginHorizontal:13,
        borderWidth:1,
        borderRadius:8,
        backgroundColor:'#f8f9fa',
        borderColor:'#bdbdbd',
        justifyContent:'space-evenly',    

    },

    filter:{
        color:"#4d9078",
        fontSize:16,
        
    }


    })