import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import styles from './card.style'


const card =({prop})=>{

    return(
        <SafeAreaView>
        <View style={styles.container}>
                
            <Image style={styles.image} source={{uri:prop.image}}/>
            <View style={styles.textbar}>
            <Text style={styles.title}>{prop.title}</Text>            
            <Text style={styles.price}>{prop.price}$</Text>
            </View>
        </View>
        </SafeAreaView>

    );
}

export default card;