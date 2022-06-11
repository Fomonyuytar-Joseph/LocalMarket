import { View, Text ,Image ,StyleSheet,SafeAreaView ,Dimensions } from 'react-native'
import React,{useState} from 'react'
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import CustomLink from '../Components/CustomLink';

const {height ,width}= Dimensions.get('window')
const SellerSignup = ({navigation}) => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const {height ,width}= Dimensions.get('window')
  onSignInPress=()=>{
    navigation.navigate('MainContainer')
  }
  onLoginPress=()=>{
    navigation.navigate('SellerLogin')
  }
  return (
    <SafeAreaView 
    style={{
      flex:1,
    
    }}>
    <View style={{height:height ,backgroundColor:'white', alignItems:'center'}}  >
      <View style={{alignItems:'center' ,marginTop:40 }}>
      <Text style={styles.titleText }>Create Shop Account</Text> 
      </View>
         
      <CustomInput placeholder='Ayuk Tabe' value={username} setValue={setUsername} inputText='Full Name:' />
      <CustomInput placeholder='Email' value={email} setValue={setEmail} inputText='Email'/>
      <CustomInput placeholder='password' value={password} setValue={setPassword} inputText='Password:' secureTextEntry={true}/>
      <CustomInput placeholder='password' value={confirm} setValue={setConfirm} inputText=' Confirm Password:' secureTextEntry={true}/>

      <CustomButton navigation={navigation} Btext="Create Shop Account" onSignInPress={onSignInPress}/>
      <CustomLink navigation={navigation} onLoginPress={onLoginPress}/>
      </View>
      
   
    </SafeAreaView>
  )
}


const styles= StyleSheet.create({
  titleText:{
    fontWeight:'bold',
    fontSize:36,
    color: '#3C3C3C',
    alignItems:'center'
    
  },
  


})

export default SellerSignup