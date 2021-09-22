import React from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './categories.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



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
            onPress={props.getfilterlist}
            
            />
            
        </View>
        
        </SafeAreaView>

    )
}

export default categories;