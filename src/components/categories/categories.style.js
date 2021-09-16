import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    component:{
        margin:10,
        
        alignItems:'center',
        flexDirection:'row',
        marginBottom:10,
        
    },

    input:{
        
        fontSize:15,
        fontWeight:'400',
        marginLeft:9,
        

    },

    search:{
        marginRight:5,
        flex:1,
        padding:8,
        borderWidth:1,
        borderColor:'#bdbdbd',
        borderRadius:5,
        flexDirection:'row',
        backgroundColor:'#F5F5F7'
        
    },

    container:{
        margin:5,
        padding:8,
    },

    button:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#f8f9fa',
        paddingVertical:-1,
        marginHorizontal:8,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#bdbdbd',
        marginTop:4,
        justifyContent:'space-between',

    },
});