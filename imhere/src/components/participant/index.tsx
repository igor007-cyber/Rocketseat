import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style";

export function Participant(){
    return(
        <View style={style.container}>
            <Text style={style.name}>igor ramalho</Text>
        
            <TouchableOpacity style={style.button}>
            <Text style={style.buttomText}>
                -
            </Text>
            </TouchableOpacity>
        </View>
    )
}