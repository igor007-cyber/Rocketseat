import { Text, View } from "react-native"
import { styles } from "./styles"

export default function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Agendar Eventos</Text>
      <Text style={styles.evenDate}>Sexta, 4 de Novembro de 2024</Text>
    </View>
  )
}