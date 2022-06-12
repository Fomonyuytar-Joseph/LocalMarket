import { View, Text ,Image ,StyleSheet,SafeAreaView ,Dimensions } from 'react-native'
import React,{useState, useEffect} from 'react'
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import CustomLink from '../Components/CustomLink';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const {height ,width}= Dimensions.get('window')
const SellerSignup = ({}) => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const navigation = useNavigation()

  const {height ,width}= Dimensions.get('window')
  onSignInPress=()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('logged in as ', user.email);
    
    })
    .catch(error => alert(error.message))
}
  onLoginPress=()=>{
    navigation.replace('SellerLogin')
  }

  useEffect(() => {
    const onSubscribe = auth.onAuthStateChanged(user => {
        if (user){
            navigation.replace('SellerContainer')
        }
    })
    return onSubscribe
}, [])
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