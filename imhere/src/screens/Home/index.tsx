import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Participante } from "../../components/Participante"

export default function Home(){
  
  function addParticipante() {
    alert('voce adiionou um participante')
  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Agendar Eventos</Text>
      <Text style={styles.evenDate}>Sexta, 4 de Novembro de 2024</Text>
      
      <View style={styles.form}>
        <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={"#6B6B6B"}
        />

        <TouchableOpacity style={styles.botao} onPress={addParticipante}>
          <Text style={styles.botaoText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participante/>
      <Participante/>

    </View>
  )
}