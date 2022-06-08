import { View, Text } from 'react-native'
import React from 'react'
import Card from '../Components/Card'

const ShoeScreen = ({navigation}) => {
  return (
    <View>
    <FlatList 
    numColumns={2} 
    data={}
    renderItem={({item})=>(
      <Card item={item}/>
    )}
    
    />
    

  </View>
  )
}

export default ShoeScreen