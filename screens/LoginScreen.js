import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView ,TouchableOpacity ,Image, Dimensions} from 'react-native';


import React from 'react'
const {height ,width}= Dimensions.get('window')
function LoginScreen({navigation}) {
  return (
    <SafeAreaView 
    style={{
      flex:1,
      backgroundColor:'white'
    
    }}>
      <View style={{height:height*0.75}} >
      <View style={{alignItems:'center'}}>
        <Image source={require('../assets/images/LoginLogo.png')} style={{marginTop:60, height:'85%' ,width ,resizeMode:"contain" }}/>
        
      </View>
      <Text style={{marginTop:-60, fontSize:24 ,fontWeight:'bold' , color:'#3C3C3C' , textAlign:'center'}}>Local Online Market</Text>
      
      <Text style={{
        fontSize:22 , 
        color:'#3C3C3C', 
        paddingLeft:15 ,
        paddingRight:15 ,
        textAlign:'center',
        fontWeight:'300',
        marginTop:15,
        marginBottom:40
        }}>
          Shopping has never made this easy for you now
        </Text>

    
       <View style={{marginBottom:20  } }>
      <View style={{flexDirection:'row'}}>

        <TouchableOpacity onPress={()=>navigation.navigate('Select')}
        style={{flex:1 ,height:60 ,backgroundColor:'#6C63FF' ,borderRadius:15,
        justifyContent:'center',alignItems:'center', marginLeft:15 ,marginRight:15 } }>
          <Text style={{color:'white' ,fontSize:20}} >Get Shopping</Text>
        </TouchableOpacity>

      </View>
      </View>
      
    
    </View>
    </SafeAreaView>
    
  )
}

export default LoginScreen