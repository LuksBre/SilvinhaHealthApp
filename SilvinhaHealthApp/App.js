import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titlecontainer}>
       <Text style={styles.title}>Silvinha Health App</Text>
      </View>
      <View style={styles.content}>
       <Text style={styles.subtitle}>Calculadora de IMC</Text>

        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex. 1.70'
            keyboardType='numeric'
          ></TextInput>
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex. 56Kg'
            keyboardType='numeric'
          ></TextInput>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => alert("OREIIAAAAAAAAAAAA")}
        >
          <Ionicons name="calculator-sharp" size={24} color="#edf2f4" />
          <Text style={styles.text}>Calcular</Text>-
        </TouchableOpacity>

        <View style={styles.imcContainer}>
          <Text style={styles.imcText}>Preencha o peso e a altura</Text>
          <Text style={styles.imcResult}></Text>
        </View>

      </View>
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F4',

  },
  titlecontainer: {
    alignItems:'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#D90429',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title:{
    color:'#EDF2F4',
    fontSize: 28,
    fontWeight:'bold',
    marginBottom: 30,
  },
  content:{
    flex: 1,
    padding: 40,
    width:'100%',
    backgroundColor:'EDF2F4'
    
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 24,
    color:'#D90429',
    fontWeight:'bold',
    marginBottom: 40,
  },
  label:{
    color: '#000',
    fontSize: 18,
  },
  input:{
    height: 45,
    width:'100%',
    fontSize: 18,
    borderColor: '#D90429',
    borderBottomWidth: 1,
  },

  button: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef233c',
    borderRadius: 15,
    marginTop: 40,
    marginbottom: 10,
  },
  text: {
    color: '#edf2f4',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  imcContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imcText: {
    fontSize: 18,
    color: '#ef223c',
    fontWeight: 'bold',
  },
  imcResult: {
    fontSize: 48,
    color: '#ef233c',
    fontWeight: 'bold',
  }
});