import { View, Text ,StyleSheet,SafeAreaView ,FlatList } from 'react-native'
import React from 'react'
import values from '../const/values'
import Greeter from '../Components/greeter'
import styles from '../const/styles'
import Spacer from '../Components/Spacer'
import Shoes from '../products/Shoedata'
import Category from '../Components/Category'
import Card from '../Components/Card'




const SellerHome = ({navigation}) => {
  return (
   <SafeAreaView style={[styles.container ]}>
   
    <View style={styles.horizontalPaddingView}>
     <Greeter user={{
        
        name: 'Pa shoe'

     }}/>

      <Spacer height={20} />
                    <Text style={values.h2Style}>MY SHOP</Text>
                     <Spacer height={20} />
     </View>

  <View style={{paddingLeft: values.horizontalPadding}}>
            <FlatList
                numColumns={2}
                data={Shoes}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>  <Card item={item} navigation={navigation} onPress={()=>navigation.navigate('ProductsDetails',item)}/>}
            />
        </View>







    








   </SafeAreaView>
  )
}

export default SellerHome