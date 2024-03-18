import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { style } from "./style";

export default function Home(){

  function HandleParticipantAdd(){
    alert('voce clicou no botao de adicionar')
  }

  return(
    <View style={style.container}>
      <Text style={style.texto1}>Nome do Evento</Text>
      <Text style={style.texto2}>Sexta, 4 de novembro de 2024</Text>

      <TextInput 
        style={style.input} 
        placeholder="Nome do participante" 
        placeholderTextColor='#6B6B6B'
      />

      <TouchableOpacity style={style.button} onPress={HandleParticipantAdd}>
        <Text style={style.buttomText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}