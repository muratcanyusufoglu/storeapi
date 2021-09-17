import {StyleSheet,Dimensions} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const border=Dimensions.get('window');

export default StyleSheet.create({

    header:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:7,
        marginRight:260,
        backgroundColor:'#f8f9fa'      
    },

    backhometext:{
        
        fontSize:15,
        fontWeight:'bold'
    },

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
        justifyContent:'space-between',        
        fontSize:15,
               
               
    },
    
    raiting:{
        borderWidth:1,
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        borderColor:'transparent',        
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
        marginTop:30,
        fontWeight:'bold',
        fontSize:20,
    },

    point:{
        
        alignItems:'center',
        

    },

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
        marginVertical:10,
        borderRadius:10,
        paddingVertical:30,
        borderColor:'#bfbdc1',        
    },

    commentbar:{
        marginBottom:0,
    },

    pointtext:{

        fontSize:20,
        color:'#f1ba0a'
    },

    mailinput:{
        borderWidth:1,
        padding:10,
        borderRadius:10,
        borderColor:'#bfbdc1'
    },
    
    sendbutton:{
        paddingHorizontal:15,
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