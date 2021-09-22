import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, TextInput, Button} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/loading';
import styles from './details.style';
import { AirbnbRating } from 'react-native-ratings';
import Config from 'react-native-config';
import Comments from '../../components/Comments';
import Review from '../../components/ReviewCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';



function details ({route,navigation}){
    
   const {id}=route.params;


      
   const {loading,data}=useFetch('http://fca4-83-66-167-200.ngrok.io/Stores/'+`${id}`);
  

   if(loading)
   {return <Loading />}


    const returnhomepage=()=>{
        return navigation.navigate('ProductsPage');
    }
   
   return(
    <SafeAreaView style={styles.body}>
    <View style={styles.header}>
    <Icon
    name='arrow-left'
    size={25}
    onPress={returnhomepage}
    />
    <Text
    onPress={returnhomepage}
    style={styles.backhometext}
    >Back Home</Text>
    </View>
    <ScrollView>
    <View >
        <ScrollView

        alwaysBounceHorizontal 
        showsHorizontalScrollIndicator       
        pagingEnabled
        horizontal        
        >

        <Image style={styles.image} source={{uri:data[0].imageurl}}/>
        <Image style={styles.image} source={{uri:data[0].umageurl2}}/>

        </ScrollView>

        <View>
            <Text></Text>
        </View>
        <View style={styles.point}>
        <Text style={styles.point}>← →</Text>
        </View>
        <View style={styles.container}>
            
        <Text style={styles.title}>
            {data[0].title}
        </Text>
        
        <View style={styles.bottom}>
        
        <View style={styles.price}>
        <Text >
            Price: {data[0].price}$
        </Text>
        </View>
        
        <View style={styles.raiting}>
        <Text >
            Raiting: {data[0].rating}
        </Text>
        </View>

        </View>
        <Text style={styles.about}>About:</Text>
        <Text style={styles.description}>
            {data[0].descripton}
        </Text>
        
        <View style={styles.bottom}>  
        
        

        </View>
        
        <Text style={styles.comment}>Comments:</Text>
        <Comments id={`${id}`}/>

        
        <Review id={`${id}`}/>

        </View>




        

    </View>
    </ScrollView>
</SafeAreaView>

    );
}
export default details;