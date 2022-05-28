import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

const CustomLink = ({navigation , onLoginPress}) => {
  return (
      <View style={{flex:1 ,flexDirection:'row'}}>
    <View>
      <Text style={{fontWeight:'300'}}>Already have an account? </Text>
      
    </View>
    <View>
      <TouchableOpacity onPress={onLoginPress}>
     <Text style={{color:'#6C63FF'}}>Login</Text> 
     </TouchableOpacity>
    </View>
    
    </View>
  )
}

export default CustomLink