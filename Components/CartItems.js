import { View, Text ,Image  , StyleSheet ,SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'

const CartItems = ({item}) => {
  return (
  <SafeAreaView style={{marginTop:10 ,flex:1}}>
  <View style={styles.container} >
<View>
  <Image   source={item.img} style={{height:100, width:110 ,resizeMode: 'contain'}} />
</View>

    <View>
   <Text>{item.name}</Text>
   
   </View>

<View>
    <View style={styles.btn}><TouchableOpacity><Text  style={styles.innerText}>+</Text></TouchableOpacity></View>
<Text style={styles.text}>2</Text>
<View style={styles.btn}><TouchableOpacity><Text  style={styles.innerText}>-</Text></TouchableOpacity></View>

</View>

<View>
<Text> 2 X{item.price} </Text>

</View>
<TouchableOpacity> 
<View style={styles.btn}>
<Text style={styles.innerText}> x</Text>
</View>
</TouchableOpacity>


  </View>
  </SafeAreaView>
  
  
    )

}
const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'white',
      borderRadius:20,
      margin: 5
    },

    btn:{
      backgroundColor:'#6C63FF',
      height: 25,
      width: 25,
      borderRadius:100,
      alignItems:'center',
      justifyContent:'center',
      
    },
    text:{

      
      fontSize:15,
      textAlign:'center'


    },
    innerText:{
      color:'white',
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center'
      
    }
    


})
export default CartItems