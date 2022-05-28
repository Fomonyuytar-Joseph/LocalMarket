import { View, Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({navigation ,Btext ,onSignInPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSignInPress}>
    <View >
      <Text style={styles.text}>{Btext}</Text>
    </View>
    </TouchableOpacity>
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
export default CustomButton