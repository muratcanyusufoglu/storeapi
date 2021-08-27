import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        
        flexDirection:'row',
        
        backgroundColor:'#f3e7e4',
        margin:10,
        borderWidth:1,
        borderColor:'#bdbdbd'
        
    },
    image:{
        width:110,
        height:110,
        backgroundColor:'white',
        resizeMode:'contain',
    },
    title:{
        fontSize:17,
        fontWeight:'500',
        textAlign:'auto',
    },
    
    price:{
        textAlign:'right'
    },
    textbar:{
    marginLeft:5,
    flex:1,
    justifyContent:'space-between'
    
    },

})