import { FlatList, Text, View } from 'react-native';
import * as React from 'react';
import { Item } from '../Components/Item';
import { StylesApp } from '../styles/StylesApp';
import BottomTab from './navigation/BottomTab';

export default function ItemTable() {
  data=[
    {key: 'Mario Martinez'},
    {key: 'Alan Rodriguez'},
    {key: 'Ernesto Perez'}
  ];

  return (
    <View style={StylesApp.container}>
      <Text style={StylesApp.titl}>Listado de Empleados</Text>
      <View style={StylesApp.list}>
        <FlatList data={data}
          renderItem={({item}) => <Item item={item} />} />
      </View>
    </View>
  );
}