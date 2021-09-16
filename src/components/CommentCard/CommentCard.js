import React from 'react'
import {View,Text,} from 'react-native'
import { AirbnbRating } from 'react-native-ratings';
import styles from './CommentCard.style';

const CommentCard =({prop})=>{

    return(
        <View style={styles.body}>
        <Text style={styles.emailfont}>{prop.email}</Text>
           
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