import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import image from '../../../assets/logo.png';
import { Colors } from '../../styles/Colors';


export default function App() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState(''); 
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
   
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pws]);

    return (
    <View style={styles.container}>
        <Image style= {styles.image}
        source={image}
        />
        <Text ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</Text>
        <Text style= {styles.title}>PLATAFORMA DE FICHAJE</Text>
        
        <Text style= {styles.subTitle}>Usuario</Text>
        <form>
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
        </form>
        <Text style= {styles.recuperarContraseña}> Recuperar Contraseña</Text>
        <StatusBar style="auto" />

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

});