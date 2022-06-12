import { View, Text ,SafeAreaView ,Dimensions ,Image ,StyleSheet} from 'react-native'
import React ,{useState}from 'react'
import CustomButton from '../Components/CustomButton'
import CustomInput from '../Components/CustomInput'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const {height, width}= Dimensions.get('window')


const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('logged in as ', user.email)
    })

    .catch(error => alert(error.message))
  }

  const onSignup = () => {
    navigation.replace('Create')
  }
  
  return (
   <SafeAreaView style={{flex:1 ,backgroundColor:'white'}}>

     <View style={{height}}>
       <View style={{alignItems:'center' ,marginTop:height/10}}>
       <Text style={styles.title}> Lets get Shopping!</Text>
       </View>

       <View style={{alignItems:'center'}}>
         <Image source={require('../assets/images/welcome.png')} style={styles.welimage}/>
        
       </View >

       <View style={{flex:1,alignItems:'center', height:height/2}}>
         <CustomInput placeholder='Email' value={email} setValue={setEmail} inputText='Email'/>
         <CustomInput placeholder='password' value={password} setValue={setPassword} inputText='Password:' secureTextEntry={true}/>
         <CustomButton navigation={navigation} Btext="Login" onSignInPress={onLoginPress}/>


       </View>

       
       <Text style={{color:'black', fontSize:16, textAlign:'center'}}>Don't have an account?</Text>
       <Text style={{color:'#6C63FF', textAlign:'center', fontSize:16}} onPress={onSignup}>Sign Up</Text> 
      
    

       
     </View>









   </SafeAreaView>
  )
}

const styles=StyleSheet.create({

   welimage:{
     height:height/3,
     width:width/1.6

   },
   title:{
     fontWeight:'bold',
     fontSize:36,
     color:'#3C3C3C'

   },

   containerCreate: {
     flex:1,
     flexDirection:'row',
     justifyContent: 'center',
     

     marginTop:70
    
     
   }




})
export default Login