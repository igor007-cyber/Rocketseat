import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home(){

  function acaoBotao(){
    alert('adicionando nicole')
  }

    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Lita de taferas</Text>
        <Text style={styles.texto2}>Vamos trabalhar</Text>

        <View style={styles.formulario}>
          <TextInput 
          style={styles.input}
          placeholder='Digite a tarefa'
          placeholderTextColor={'#C0C0C0'}
          />

          <TouchableOpacity style={styles.botao} onPress={acaoBotao}>
            <Text style={styles.botaoTexto}>+</Text>
          </TouchableOpacity>

          
        </View>
      </View>

      
  
    );
  }
  

