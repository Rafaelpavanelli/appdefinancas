import React from 'react';
import { 
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {MotiView,MotiText} from 'moti';
const statusBarHeight =StatusBar.currentHeight +22 ? StatusBar.currentHeight:64;
// import { Container } from './styles';

const Header = ({name}) => {
  return(
    <View style={style.container }>
      <MotiView style={style.content}
      from={{
        translateY:-150,
        opacity:0,

      }}
      animate={{
        translateY:0,
        opacity:1,
      }}
      transition={{
        type: 'timing',
        duration:800,
        delay:300
      }}>
        <Text style={style.userName}>
         {name}
        </Text>
        <TouchableOpacity style={style.buttonUser}>
          <Feather name="user" activeOpacity={0.9} size={27} color="#fff" />
        </TouchableOpacity>
      </MotiView>
    </View>
  )
}

export default Header;

const style=StyleSheet.create({
  container:{
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content:{
    flex:1,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  userName:{
    fontSize:18,
    color:"#fff",
    fontWeight:"bold",
  },
  buttonUser:{
    width:44,
    height:44,
    backgroundColor:"rgba(255,255,255,0.5)",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:44/2,
  
  }
})