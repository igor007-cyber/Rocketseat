import { View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";

export function Participante(){
    return(

        <View style={styles.container}>
            <Text style={styles.name}>Rodrigo ramalho</Text>
           
            <TouchableOpacity style={styles.botao} >
                <Text style={styles.botaoText}>
                -
                </Text>
            </TouchableOpacity>

        </View>

    )
}