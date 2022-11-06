import React from 'react';
import {useReducer} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import image from '../../../assets/logo.png';
import { Colors } from '../../styles/Colors';


export default function App() {



    return (
    <View style={styles.container}>
        <Image style= {styles.image}
        source={image}
        />
        <Text style= {styles.title}>PLATAFORMA DE FICHAJE</Text>
        
        <Text style= {styles.subTitle}>Usuario</Text>
        <TextInput
        placeholder="pepito.perez@factoriaf5.org"
        style={styles.textInput}
        />
        <Text style= {styles.subTitle}>Contraseña</Text>
        <TextInput
        placeholder="Contraseña"
        style={styles.textInput}
        secureTextEntry={true}
        />
        
        <TouchableOpacity
        onPress={()=> Alert.alert('Hola!')}
        style={styles.button}
        >
        <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        
        <Text style= {styles.recuperarContraseña}> Recuperar Contraseña</Text>
        <StatusBar style="auto" />
        
        <View className="alert-info">
            <Text style={styles.estado}>Validando...</Text>
        </View>

        <View className="alert-danger">
            <Text style={styles.estado}>No autenticado</Text>
        </View>
        
        <View className="alert-success">
            <Text style={styles.estado}>Autenticado</Text>
        </View>


    </View>
    
    );
    
    };
    
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: Colors.orangebg,
    alignItems: 'center',
    },
    image: {
    marginTop: 90,
    width:240,
    height:120,
    },
    
    title: { fontSize: 25, color: '#fff', paddingTop: 90, paddingBottom: 80},
    
    
    subTitle: {
    fontSize: 20,
    color: '#000',
    marginTop: 10,
    paddingBottom: 5,
    },
    
    textInput: {
    borderWidth: 1,
    borderColor: '#ADADAD',
    padding: 10,
    width: '80%' ,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    },
    
    button: {
    backgroundColor: "#5870F6",
    padding: 10,
    marginTop: 70,
    width: '50%',
    borderRadius: 30,
    alignItems: 'center',
    },
    
    buttonText: {
    color: '#fff',
    fontSize: 25,
    },
    
    recuperarContraseña: {
    color: Colors.white,
    fontSize: 18,
    marginTop: 50,
    },

    estado: {
        color: Colors.white,
        fontSize: 15,
        marginTop: 10,
        },
    
    });