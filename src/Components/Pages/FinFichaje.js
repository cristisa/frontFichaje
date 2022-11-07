import React, {useState} from "react";
import { Image, Text, View, StyleSheet, Alert } from 'react-native';
import { Colors } from "../../styles/Colors";
import { AppButton } from "../AppButton";
import {Dropdown} from 'react-native-element-dropdown'

export default function FinFichaje() {
  const data = [
    { label: 'Madrid - Talent Garden', value: '1' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
    return (
      <View style={styles.containerfichajes}>
        <Text style={styles.hourfichaje}>17:05 pm</Text>
        <View style={styles.boxfichajes}>
          <Text style={styles.titlefichaje}>¡Hola, Pepito!</Text>
          <AppButton 
            onPress={() => Alert.alert('Finalizar.')}
            title='FINALIZAR'
            styles={styles.fichaje_btn}
            />
            <Text style={styles.textfichaje}>Inició: 08:05 am</Text>
            <Text style={styles.commentfichaje}>Añadir comentario</Text>
            <Dropdown
            style={[styles.dropdown, isFocus]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Sede' : '...'}
            searchPlaceholder="Buscar..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}/>

        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    containerfichajes:{
      backgroundColor: Colors.orangebg,
      width: '100%',
      height: '100%',
      flex: 1,
      alignItems: 'center',
    },
    hourfichaje:{
      fontSize: 40,
      color: Colors.white,
      marginTop: 40,
    },
    boxfichajes:{
      backgroundColor: Colors.white,
      width: '80%',
      height: '44%',
      borderRadius: 15,
      marginTop: 30,
      alignItems: 'center',
    },
    titlefichaje:{
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
      fontWeight: 'bold',
    },
    fichaje_btn:{
      backgroundColor: '#F66262',
      color: Colors.white,
      borderRadius: 25,
      paddingTop: 20,
      paddingLeft: 33,
      paddingBottom: 20,
      marginTop: 20,
      width: '43%',
      fontWeight: 'bold',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    textfichaje:{
      marginTop: 20,
      color: '#000',
      fontWeight: 'bold',
      fontSize: 15,
    },
    commentfichaje:{
      marginTop: 15,
      color: '#5870F6',
      textDecorationLine: 'underline',
      fontSize: 15,
    },
    dropdown: {
      marginTop: 40,
      height: 50,
      borderColor: '#888888',
      borderWidth: 1,
      borderRadius: 5,
      width: '70%',
      backgroundColor: '#EBEBEB'
    },
    placeholderStyle:{
      left: 10,
    },
    selectedTextStyle:{
      left: 10,
    }
})