import { View, Text,FlatList } from 'react-native'
import React from 'react'
import Card from '../Components/Card'
import Shoes from '../products/Shoedata'

const ShoeScreen = ({navigation}) => {
  return (
    <View>
    <FlatList 
    numColumns={2} 
    data={Shoes}
    renderItem={({item})=>(
      <Card item={item} navigation={navigation} onPress={()=>navigation.navigate('ProductsDetails',item)}/>
    )}
    
    />
    

  </View>
  )
}

export default ShoeScreen