import React from "react";
import { Text, View, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { AppButton } from "./AppButton";

export default function Incidence() {
    return (
      <View style={styles.container_incidence}>
        <View style={styles.header_incidence}>
          <Image style={styles.incidence_image}/>
          <Text style={styles.incidence_headertext}>08:05 am</Text>
        </View>
        <View style={styles.incidence_box}>
          <View style={styles.incidence_containercomment}>
            <Text style={styles.incidence_comment}>Comentario</Text>
            <TextInput
              multiline={true}
              numberOfLines={10} 
              style={styles.incidence_input}
            />
          </View>
            <AppButton 
            onPress={() => Alert.alert('Comentario enviado.')}
            title='Enviar'
            styles={styles.incidence_btn}
             />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container_incidence:{
      backgroundColor: '#D9D9D9',
      width: '100%',
      height: '100%',
    },
    header_incidence: {
      backgroundColor: '#EB5629',
      height: '20%',
    },
    incidence_image:{
      width: 500,
    },
    incidence_headertext: {
      textAlign: 'center',
      fontSize: 40,
      marginTop: 40,
      color: '#fff',
    },
    incidence_box:{
      backgroundColor: '#fff',
      width: '80%',
      height: '45%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: 40,
      marginTop: 50,
      borderRadius: 25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
    incidence_containercomment:{
      color: '#fff',
      marginTop: 25,
      width: '80%',
    },
    incidence_comment:{
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    incidence_input:{
      backgroundColor:'#EBEBEB',
      borderColor: '#ADADAD',
      borderWidth: 2,
      borderRadius: 5,
      height: 80,
      textAlignVertical: 'top',
    },
    incidence_btn: {
      backgroundColor: '#5870F6',
      color: '#fff',
      borderRadius: 25,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 50,
      paddingRight: 50,
      marginTop: 90,
    },
})