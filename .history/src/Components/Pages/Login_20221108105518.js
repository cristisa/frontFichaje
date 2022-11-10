import React, { useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import image from '../../../assets/logo.png';
import { Colors } from '../../styles/Colors';
//import useUser from '../.././hooks/useUser';
//import {useLocation} from "wouter";
// Identical imports for both Registration & Login
import { Component, Fragment } from 'react';
//import { Input, TextLink, Loading, Button } from './common';
import axios from 'axios';
import deviceStorage from "../deviceStorage";


const API_URL = "http://127.0.0.1:8000/token'";

export const Login = (email, password) => {
    return axios
    .post(API_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        deviceStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    //const [, navigate] = useLocation();
    //const {login, isLogged} = useUser();
    
    // useEffect(() => {
    //     if (isLogged) navigate('/')
    // }, [isLogged, navigate])
    
    
    const handleLogin = (e) => {
        e.preventDefault();
       // login({email, password});
        alert(`${email}, ${password}`);
    };

    return (
    <View style={styles.container}>
        <Image style= {styles.image}
        source={image} />
        <Text style= {styles.title}>PLATAFORMA DE FICHAJE</Text>
        
        <Text style= {styles.subTitle}>Usuario</Text>
     
        <TextInput
        placeholder="pepito.perez@factoriaf5.org"
        style={styles.textInput}
        value={email}
        onChangeText={text => setEmail(text)}
        />
        <Text style= {styles.subTitle}>Contraseña</Text>
        <TextInput
        placeholder="Contraseña"
        style={styles.textInput}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        />
        
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
        >
        <Text 
        style={styles.buttonText} 
        >ENTRAR</Text>
        </TouchableOpacity>
      
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
    marginTop: 10,
    width:180,
    height:90,
    },
    title: { 
    fontSize: 25, 
    color: '#fff', 
    paddingTop: 50, 
    paddingBottom: 30
    },
    subTitle: {
    fontSize: 20,
    color: '#000',
    paddingTop: 25,
    textAlign: 'center',
    fontWeight: 'bold'
    },
    containerLogin:{
    // backgroundColor: Colors.white,
    // width: '80%',
    // borderRadius: 25,
    flex: 1,
    alignItems: 'center'
    },
    textInput: {
    borderWidth: 1,
    borderColor: '#ADADAD',
    padding: 10,
    width: '80%',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    },
    button: {
    backgroundColor: "#5870F6",
    padding: 10,
    marginTop: 45,
    width: '50%',
    borderRadius: 30,
    alignItems: 'center',
    },
    buttonText: {
    color: '#fff',
    fontSize: 20,
    },
    
    recuperarContraseña: {
    color: Colors.white,
    fontSize: 18,
    marginTop: 30,
    },
    estado: {
        color: Colors.white,
        fontSize: 15,
        marginTop: 10,
        },
    
    });