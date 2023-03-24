import React from 'react';
import { View,Text,StyleSheet,FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/balance';
import Movements from '../../components/movements';
import Actions from '../../components/actions';

// import { Container } from './styles';
const list=[
  {
    id:1,
    label:'Boleto de Luz',
    value:'300,90',
    date:'07/09/2023',
    type:0 //despesas
  },
  {
    id:2,
    label:'Faculdade',
    value:'397,90',
    date:'07/03/2023',
    type:0 //despesas
  },
  {
    id:3,
    label:'Alessandra',
    value:'3000,90',
    date:'07/02/2023',
    type:1 //despesas
  }
]
const home = () => {
  return <View style={estilo.View}>
    <Header name="Rafael Pavanelli"/>

    <Balance saldo="200.00" gastos="-450.00"/>
    <Actions/>
    <Text style={estilo.title} >
      Ultimas movimentações
    </Text>
    <FlatList
    style={estilo.list}
    data={list}
    keyExtractor={(item)=>String(item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={
      ({item})=>
        <Movements data={item}/>
    }
    />
  </View>;
}

export default home;
const estilo=StyleSheet.create({
  View:{
    flex:1,
    backgroundColor:"#fafafa"
  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    marginLeft:14,
    marginRight:14,
    marginTop:14,
  },
  list:{
    paddingTop:20,
    marginStart:14,
    marginEnd:14,

  }
})