import { StyleSheet } from "react-native";

export default StyleSheet.create({

    body:{
        marginTop:20,
        borderWidth:1,
        marginVertical:10,
        borderRadius:10,
        paddingVertical:7,
        borderColor:'#bfbdc1',
          
    },

    commentbar:{
        justifyContent:'space-between',
        flexDirection:'row-reverse',
        flex:1,        
        textAlign:'center',
        padding:10,
        alignItems:'center'
    },

    comment:{
        textAlign:'center',
        borderWidth:1,
        borderColor:'#bfbdc1',
        borderRadius:10,
        padding:10,
        marginLeft:10,
        flex:4,
        
    },

    emailfont:{
        marginLeft:15,
        color:'#bfbdc1',
        
    },

    rating:{
        flex:3,
    },

    image:{
        marginTop:15,
        marginLeft:15,
        height:50,
        width:50
    }

})