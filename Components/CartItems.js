import { View, Text ,Image  , StyleSheet ,SafeAreaView} from 'react-native'
import React from 'react'

const CartItems = ({item}) => {
  return (
  <SafeAreaView style={{marginTop:60 ,flex:1}}>
  <View style={styles.container} >
<View>
  <Image   source={item.img} style={{height:100, width:110 ,resizeMode: 'contain'}} />
</View>

    <View>
   <Text>{item.name}</Text>
   
   </View>

<View>
<Text>+</Text>
<Text>2</Text>
<Text>-</Text>

</View>

<View>
<Text> 2 X{item.price} f</Text>

</View>

<View>
  <Text> X</Text>
</View>


  </View>
  </SafeAreaView>
  
  
    )

}
const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    }


})
export default CartItems