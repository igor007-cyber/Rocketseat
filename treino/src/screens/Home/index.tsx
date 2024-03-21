import { Text, View, TextInput } from 'react-native';
import { styles } from './style';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>MercadoConnect</Text>

      <View style={styles.container2}>
        <Text style={styles.texto2}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digete seu email'
          placeholderTextColor='#6B6B6B'
          keyboardType='email-address'
        />
      </View>

    </View>
  );
}
