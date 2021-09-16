import React from 'react';
import {Text, Button, View, } from 'react-native'
import styles from './Comments.style';
import useFetch from '../../hooks/useFetch';
import { FlatList } from 'react-native-gesture-handler';
import CommentCard from '../CommentCard';

const comments=(id)=>{

    const {data}=useFetch('http://7631-83-66-167-200.ngrok.io/Comments');

    
    const filtercomments=data.filter(x=>{return x.productid==id.id})
    
    
    const rendercomments=({item})=>
        <CommentCard prop={item}/>;   



    if(filtercomments.length===0)
    {
    return (
        <View>
            <Text>No Comment</Text>
        </View>        
    )
    }

    else 
    {
        return(
        <View>         
        
            <FlatList
            keyExtractor={(item) => item.id} 
            data={filtercomments}
            renderItem={rendercomments}
            />
            
        </View>
            
        )   
    }

}

export default comments;



