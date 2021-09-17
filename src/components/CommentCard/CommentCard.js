import React from 'react'
import {View,Text,Image} from 'react-native'
import { AirbnbRating } from 'react-native-ratings';
import styles from './CommentCard.style';

const CommentCard =({prop})=>{

    return(
        <View style={styles.body}>
        <Text style={styles.emailfont}>{prop.email}</Text>
        <Image
        source={{uri:prop.imageuri}}
        style={styles.image}
        />
           
        <View style={styles.commentbar}>
        
        <View style={styles.comment}>
        <Text style={styles.commentfont}>{prop.comment}</Text>
        </View>

        <View style={styles.rating}>
        <AirbnbRating
        count={5}
        defaultRating={prop.point}
        size={16}
        
        
        />
        </View>
        
        

        </View>

        
        

        </View>

    )
}

export default CommentCard;