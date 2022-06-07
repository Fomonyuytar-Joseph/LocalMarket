import { View, Text ,Iamge , FlatList } from 'react-native'
import React from 'react'
import { Productdata } from '../const/data'
import CartItems from './CartItems'



const Cart = () => {
const renderItem =({item})=>{
  return  <CartItems item={item}/>
}
  
 return (
    <View>
    <FlatList
    data={Productdata}
    renderItem={renderItem}
    keyExtractor={  item =>item.id}
    />


    </View>
  )
}

export default Cart