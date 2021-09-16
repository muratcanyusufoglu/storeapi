import React from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import styles from './card.style'


const card =({prop,onpress})=>{
    
    return(
        <TouchableWithoutFeedback onPress={onpress}>
        <View style={styles.container}>
                
            <Image style={styles.image} source={{uri:prop.imageurl}}/>
            
            <View style={styles.textbar}>
            <Text style={styles.title}>{prop.title}</Text>
            
            <View style={styles.bottom}>                        
            <Text style={styles.category}>{prop.category}</Text>
            <Text style={styles.price}>{prop.price}$</Text>
            </View>
            
            </View>
        </View>
        </TouchableWithoutFeedback>

    );
}

export default card;