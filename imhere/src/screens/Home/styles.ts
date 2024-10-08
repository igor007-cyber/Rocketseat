import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'black',
      padding:24,
    },
  
    eventName:{
      color:'white',
      fontSize:24,
      fontWeight:'bold',
      marginTop:48
    },
  
    evenDate:{
      color:'#6B6B6B',
      fontSize:16
    },

    input:{
      flex:1,
      height:56,
      backgroundColor:'#1F1E25',
      borderRadius:5,
      color:'#FFF',
      padding:16,
      fontSize:16,
      marginRight:12  
    },

    botao:{
      width:56,
      height:56,
      borderRadius:5,
      backgroundColor:'#31CF67',
    },

    botaoText:{
      color:'#FFF',
      fontSize:24,
      alignItems:'center',
      justifyContent:'center',
    },

    form:{
      width:'100%',
      flexDirection:'row',// inves de colunas, vai ser em linhas
      marginTop:36, 
      marginBottom:42
    }
  })