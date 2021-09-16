import {StyleSheet,Dimensions} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const border=Dimensions.get('window');

export default StyleSheet.create({

    

    comment:{
        marginTop:30,
        fontWeight:'bold',
        fontSize:20,

    },  

    review:{       
        
        justifyContent:'center',
        
        
    },

    input:{
        borderWidth:1,
        padding:10,
        marginVertical:15,
        borderRadius:10,
        paddingVertical:40,
        borderColor:'#bfbdc1',  
           
        flex:2,
        
        
    },

    commentbar:{
        marginBottom:0,
        flex:1,
    },


    mailinput:{
        borderWidth:1,
        padding:10,
        borderRadius:10,
        borderColor:'#bfbdc1'
    },
    
    sendbutton:{
        padding:3,
        marginTop:5,
        marginHorizontal:140,
        marginBottom:20,
        alignItems:'center',
        borderWidth:1,        
        borderRadius:50,
        borderColor:'transparent',
        backgroundColor:'#b0d0d3'

        
    },  
    
   
})