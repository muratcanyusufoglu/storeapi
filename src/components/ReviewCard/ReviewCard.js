import React, {useState} from 'react';
import { Text, View,TextInput, Button,Alert} from 'react-native';
import styles from './ReviewCard.style';
import { AirbnbRating } from 'react-native-ratings';
import axios from 'axios';





const reviewcard=(id)=>{

    const[comment,setcommet]=useState({
        productid: id.id,
        point:0,
        comment:'',
        email:'',

    })


    const ratingCompleted=(rating)=> {
        comment.point=rating
        return comment.point;
      };

    const commentinput=(text)=>{
        comment.comment=text
        
    }

    const emailinput=(text)=>{
        comment.email=text
    }
    
    const postaxios=()=>{
        
        if((comment.comment&&comment.email)==''||comment.point==0.0)
        {
            Alert.alert('Inputs can not be empty!');

        }


        else{
        axios.post(
        'http://7631-83-66-167-200.ngrok.io/Comments', 
        comment);
        }        
        }

        return(    
            
        <View>
        
        <View style={styles.commentbar}>        
        <Text style={styles.comment}>Post a review:</Text>
        
        
        <View style={styles.review}>
        
        
        <AirbnbRating
        count={5}
        reviews={["Bad", "Meh", "OK", "Good", "Amazing"]}
        defaultRating={0}
        size={18}
        showRating
        onFinishRating={(rating)=>ratingCompleted(rating)}
        
        />     

        </View>        
        
        
        <TextInput        
        style={styles.input}
        placeholder='Write a comment:'
        onChangeText={(text)=>commentinput(text)}
        />
        

        <TextInput
        style={styles.mailinput}
        placeholder='Write  your email:'
        onChangeText={(text)=>emailinput(text)}
        />        

        </View>
        

        <View style={styles.sendbutton}>
        
        <Button
        color='#ffffff'
        title='Send'
        onPress={postaxios}
        />

        </View>
        </View>
        )
    
    }

export default reviewcard;