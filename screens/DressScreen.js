import { View,FlatList } from 'react-native'
import React from 'react'
import Card from '../Components/Card'
import Dress from '../products/Dressdata'

const DressScreen = ({navigation}) => {
  return (
    <View>
    <FlatList 
    numColumns={2} 
    data={Dress}
    renderItem={({item})=>(
      <Card item={item} navigation={navigation} onPress={()=>navigation.navigate('ProductsDetails',item)}/>
    )}
    
    />
    

  </View>
  )
}

export default DressScreen