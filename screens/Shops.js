import { View, Text, FlatList  } from 'react-native'
import React from 'react'
import ShopCard from '../Components/ShopCard'
import stores from '../const/stores'

const Shops = () => {
  
  return (
    <View>
      <FlatList 
      numColumns={2} 
      data={stores}
      renderItem={({item})=>(
        <ShopCard item={item}/>
      )}
      
      />
      

    </View>
  )
}

export default Shops