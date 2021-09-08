import {StyleSheet,Dimensions} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const border=Dimensions.get('window');

export default StyleSheet.create({

    body:{
        backgroundColor:'#f8f9fa',
        flex:1,
    },

    container:{
        
        marginTop:5,
        padding:10,
    },

    image:{
        
        width:border.width,
        height:border.height/3,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    title:{
        
        fontSize:20,
        fontWeight:'bold',       
    },
    description:{
        marginTop:8,
        textAlign:'justify',
        marginBottom:5,
        
    },
    
    bottom:{
        marginTop:35,
        flexDirection:'row-reverse',
        
        fontSize:15,
        marginBottom:20,
        
               
        
    },
    raiting:{
        borderWidth:1,
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        borderColor:'transparent',
        marginRight:155,
        padding:8,
        backgroundColor:'#83c5be',
        
    },

    price:{
        borderWidth:1,
        padding:8,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor:'#b5e48c',
        borderColor:'transparent'

        
    },

    about:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:20,
    },

    point:{
        
        alignItems:'center',

    },
    
   
})