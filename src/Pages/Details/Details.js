import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/loading';
import styles from './details.style';

function details ({route}){
    
   const {id}=route.params;
   
   const {loading,data}=useFetch('https://5c8c-83-66-167-200.ngrok.io/Books/'+`${id}`);

   const getscroll=()=>{
       console.log('asd')
   }
    
   if(loading)
   {return <Loading />}
   
   return(
<SafeAreaView style={styles.body}>
    <View >
        <ScrollView

        alwaysBounceHorizontal 
        showsHorizontalScrollIndicator       
        pagingEnabled
        horizontal
        onScrollEndDrag={getscroll}
        >        
        <Image style={styles.image} source={{uri:data.image}}/>
        <Image style={styles.image} source={{uri:data.image1}}/>

        </ScrollView>
        <View style={styles.point}>
        <Text style={styles.point}>-</Text>
        </View>
        <View style={styles.container}>
            
        <Text style={styles.title}>
            {data.title}
        </Text>
        
        <View style={styles.bottom}>
        
        <View style={styles.price}>
        <Text >
            Price: {data.price}$
        </Text>
        </View>
        
        <View style={styles.raiting}>
        <Text >
            Raiting: {data.rating}
        </Text>
        </View>

        </View>
        <Text style={styles.about}>About:</Text>
        <Text style={styles.description}>
            {data.description}
        </Text>
        
        <View style={styles.bottom}>
        


        </View>
        </View>

    </View>
</SafeAreaView>

    );
}
export default details;