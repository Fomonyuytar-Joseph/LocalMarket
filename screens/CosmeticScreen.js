import { View, Text ,FlatList } from 'react-native'
import React from 'react'
import Card from '../Components/Card'
import Cosmetics from '../products/Cosmeticsdata'

const CosmeticScreen = ({navigation}) => {
  return (
    <View>
    <FlatList 
    numColumns={2} 
    data={Cosmetics}
    renderItem={({item})=>(
      <Card item={item} navigation={navigation} onPress={()=>navigation.navigate('ProductsDetails',item)}/>
    )}
    
    />
    

  </View>
  )
}

export default CosmeticScreen