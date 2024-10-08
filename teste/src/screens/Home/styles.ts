import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'black',
      padding:30    
    },

    texto:{
      color:'#D0D3B1',
      fontSize:30,
      fontWeight:'bold', 
      marginTop:50 
    },

    texto2:{
      color:'#FFFFFF',
      fontSize:16
    },

    formulario:{
      marginTop:100,
      width:'100%',
      flexDirection:'row',
    },

    input:{
      flex:1,
      height:56,
      borderRadius:10,
      borderColor: '#fff', // Borda branca
      borderWidth: 2,
      backgroundColor:'black',
      padding:10,
      color:'#fff',
      fontSize:16,
      marginRight:5
    },

    botao:{
      width:56,
      height:56,
      borderColor: '#00FF00', // Borda branca
      borderWidth: 2,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center'
    },

    botaoTexto:{
      color:'#00FF00',
      fontSize:30
    }
  });
  