import { FlatList, Text, View, StyleSheet } from 'react-native';
import * as React from 'react';
import { ListRegisterF } from './List/ListRegisterF';

export default function Calendar() {
  data=[
    {
        fecha: '25 martes',
     horas: '8:00 am - 18:00 pm'
    },
    {
        fecha: '24 lunes',
     horas: '8:05 am - 18:00 pm'
    },
    {
        fecha: '21 viernes',
     horas: 'día vacaciones'
    },
    {
        fecha: '20 jueves',
     horas: '08:20 am - 18:00 pm'
    },
    
  ];

  return (
    <>
    <View style={{height: '20%', backgroundColor: '#EB5629'}}>
        <Text style={{fontSize: 40, textAlign: 'center', marginTop: 40, color: '#fff'}}>08:05 am</Text>
    </View>
    <View>
      <Text style={{fontSize: 27, textAlign: 'center', marginTop: 30}}>Listado de fichajes</Text>
      <View style={{ width: '70%', alignSelf: 'center', marginTop: 20}}>
        <FlatList 
        data={data}
        renderItem={({item}) => <ListRegisterF item={item} />}
        />
      </View>
    </View>
    </>
  );
}
