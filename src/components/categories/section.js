import React from 'react';
import {ScrollView,View,Button} from 'react-native';
import styles from './categories.style';

const section=({searchcategory})=>{

    return(        
    <View style={styles.button}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >

        <Button
        color="#4d9078"
        title="All"
        onPress={()=>{searchcategory("")}}
        />

        <Button
        color="#4d9078"
        title="Clothes"
        onPress={()=>{searchcategory("men's clothing")}}
        />

        <Button
        color="#4d9078"
        title="Electronics"
        onPress={()=>{searchcategory("electronics")}}
        />

        <Button
        color="#4d9078"
        title="Jewelry"
        onPress={()=>{searchcategory("jewelery")}}
        />

        </ScrollView>
        
        </View>
    )
}

export default section;