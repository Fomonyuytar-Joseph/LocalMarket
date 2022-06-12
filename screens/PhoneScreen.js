import { View, FlatList} from 'react-native'
import {React,useState}  from 'react'
import Card from '../Components/Card'
import Phones from '../products/Phonedata'


const PhoneScreen = ({navigation}) => {

  // const cartItems=route.params;
  return (
    <View>
    <FlatList 
    numColumns={2} 
    data={Phones}
    renderItem={({item})=>(
      <Card item={item} navigation={navigation} onPress={()=>navigation.navigate('ProductsDetails',item)}/>
    )}
    
    />
    

  </View>
  )
}

export default PhoneScreen