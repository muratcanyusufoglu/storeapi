import React from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './categories.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

var backstation=1;

const category=["electronics","jewelery","men's clothing","women's clothing"]


const categories =props=>{
   
    return(

        <SafeAreaView>
        <View style={styles.component}>
        <View style={styles.search}>
            
            <Icon
            name='magnify'
            size={18}
            />

            <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={props.onSearch}
            />
            
            </View>

            <Icon
            color='#003049'
            name='sort'
            size={26}
            onPress={props.getcategory}
            />
            
        </View>
        
        </SafeAreaView>

    )
}

export default categories;