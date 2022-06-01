import { View, Text ,SafeAreaView ,Dimensions ,Image ,StyleSheet} from 'react-native'
import React from 'react'

const {height ,width}= Dimensions.get('window')


const Login = () => {
  
  return (
   <SafeAreaView style={{flex:1 ,backgroundColor:'white'}}>

     <View style={{height}}>
       <View style={{alignItems:'center' ,marginTop:height/10}}>
       <Text style={styles.title}> Lets get Shopping!</Text>
       </View>

       <View style={{alignItems:'center'}}>
         <Image source={require('../assets/images/welcome.png')} style={styles.welimage}/>
        
       </View>
      
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
   }


})
export default Login