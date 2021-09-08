import { StyleSheet } from "react-native";


export default StyleSheet.create({

    
    container:{
        
        flexDirection:'row',        
        backgroundColor:'#f8f9fa',
        margin:10,
        borderWidth:1,
        borderColor:'#bdbdbd',
        borderRadius:15,
                
    },
    image:{
        width:110,
        height:110,
        backgroundColor:'white',
        resizeMode:'contain',
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
    },
    title:{
        fontSize:17,
        fontWeight:'500',
        textAlign:'auto',
    },
    
    price:{
        textAlign:'right',
        marginRight:4,
    },
    
    textbar:{
    marginLeft:5,
    flex:1,
    justifyContent:'space-between',
    
    },

})