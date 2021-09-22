import React, {useState,useEffect} from 'react';
import { Text, View,TextInput, Button,Alert, Image} from 'react-native';
import styles from './ReviewCard.style';
import { AirbnbRating } from 'react-native-ratings';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';





const reviewcard=(id)=>{

    const[comment,setcomment]=useState({
        productid: id.id,
        point:0,
        comment:'',
        email:'',
        imageuri:'',
              

    })

    const [image, setImage] = useState(null);


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

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
        
        comment.imageuri=result.uri;

       
      };
    
    const postaxios=()=>{
        
        if((comment.comment&&comment.email)==''||comment.point==0.0)
        {
            Alert.alert('Inputs can not be empty!');
        }

        else{
        axios.post(
        'http://fca4-83-66-167-200.ngrok.io/Comments', 
        comment);        

        Alert.alert('Commend Sended')    
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

      <View style={styles.addimagebutton}>
      <Button 
      title="Add a Photo" 
      onPress={pickImage} 
      color='#ffffff'
      />
      </View>
      {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
      
        
        

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