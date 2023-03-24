import React, { useState } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const movements = ({data}) => {
  const[showValue,setShowValue]=useState(false);
  return <TouchableOpacity style={style.container}
  onPress={()=>setShowValue(!showValue)}>
    <Text style={style.date}>{data.date}</Text>
    <View style={style.content} >
      <Text style={style.label}>
        {data.label}
      </Text>
    {
      showValue?(
        <Text style={data.type==1?style.value:style.espenses}>
        R$ {data.type!=0?data.value:"-"+data.value}
      </Text>
      ):(
        <View style={style.skeleton}>

        </View>

      )
    }
    </View>
  </TouchableOpacity>;
}

export default movements;

const style=StyleSheet.create({
  container:{
    flex:1,
    marginBottom:24,
    borderBottomWidth:0.5,
    borderBottomColor:"#dadada"
  },
  content:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:2,
    marginBottom:8,
  },
  date:{
    color:"#dadada",
    fontWeight:"bold"
  },
  label:{
    fontWeight:"bold",
    fontSize:16
  },
  value:{
    fontSize:16,
    color:"#2ecc71",
    fontWeight:"bold"
  },
  espenses:{
    fontSize:16,
    color:"#e74c3c",
    fontWeight:"bold"
  },skeleton:{
    marginTop:6,
    width:80,
    height:10,
    backgroundColor:"#dadada",
    borderRadius:8,
  }
})