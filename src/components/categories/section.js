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
        title="Electronics"
        onPress={()=>{searchcategory("electronics")}}
        />

        <Button
        color="#4d9078"
        title="Jewelry"
        onPress={()=>{searchcategory("jewelery")}}
        />

        <Button
        color="#4d9078"
        title="Women's Clothing"
        onPress={()=>{searchcategory("womens clothing")}}
        />

        <Button
        color="#4d9078"
        title="Men's Clothing"
        onPress={()=>{searchcategory("mens clothing")}}
        />


        </ScrollView>
        
        </View>
    )
}

export default section;