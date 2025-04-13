import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.formInput}
        placeholder="Informe seu E-mail."
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"

      />
      <TextInput
        style={styles.formInput}
        placeholder="Informe a Senha."
        secureTextEntry
        autoCapitalize="none"
      />
      <Pressable style={styles.formButton}>
        <Text style={styles.textButton}>Login</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a Senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Criar Novo Usuário</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'blue',
    margin: 10,
  },
  formInput: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: 'blue',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subButton: {
    padding: 10,
  },
  subTextButton: {
    color: 'blue',
  },
});