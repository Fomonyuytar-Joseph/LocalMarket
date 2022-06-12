import React ,{useState, useEffect}from 'react'
import { StyleSheet, Text, View ,SafeAreaView ,TouchableOpacity ,Image ,Button ,Dimensions} from 'react-native';
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import CustomLink from '../Components/CustomLink';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'



function Create() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const navigation = useNavigation()
  

  const {height ,width}= Dimensions.get('window')
  onSignInPress=()=>{

    
    createUserWithEmailAndPassword(auth, email, password, username)
    .then(userCredentials => {
        const user = userCredentials.user;
        navigation.replace('Homescreen')
        console.log('logged in as ', user.email)
    })

    .catch(error => alert(error.message))
    

    navigation.navigate('MainContainer')

  }
  onLoginPress=()=>{
    
    navigation.navigate('Login')
  }

  useEffect(() => {
    const onSubscribe = auth.onAuthStateChanged(user => {
        if (user){
            navigation.replace('Homescreen')
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
      <Text style={styles.titleText }>Create Account</Text> 
      </View>
         
      <CustomInput placeholder='Ayuk Tabe' value={username} setValue={setUsername} inputText='Full Name:' />
      <CustomInput placeholder='Email' value={email} setValue={setEmail} inputText='Email'/>
      <CustomInput placeholder='password' value={password} setValue={setPassword} inputText='Password:' secureTextEntry={true}/>
      <CustomInput placeholder='password' value={confirm} setValue={setConfirm} inputText=' Confirm Password:' secureTextEntry={true}/>

      <CustomButton navigation={navigation} Btext="Create Account" onSignInPress={onSignInPress}/>
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
export default Create