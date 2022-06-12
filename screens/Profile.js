
import { View, Text  ,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import InitialLogo from '../Components/InitialLogo'
import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
  
  const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(auth)
        .then(() =>{
            navigation.replace('Create') 
        })

        .catch(error => alert(error.message))
    }
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <View>
      <InitialLogo/>
      </View>
      <View>

{/* Log Out button */}
      <TouchableOpacity style={styles.container} onPress={handleSignOut} >
    <View >
      <Text style={styles.text}>Log Out</Text>
    </View>
    </TouchableOpacity>
        
      </View>

      
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
      backgroundColor:'#6C63FF',
       width:'95%',
      padding:15,
      marginVertical:40,
      alignItems:'center',
      borderRadius:15,
      marginLeft:20,
      marginRight:20
  },
  text:{
      color:'white',
      fontWeight:'bold',
      fontSize:16
      
      
  }

})

export default Profile

