import { View, Text ,StyleSheet,SafeAreaView ,FlatList } from 'react-native'
import React from 'react'
import Greeter from '../Components/greeter'
import styles from '../const/styles'
import Spacer from '../Components/Spacer'
import Shoes from '../products/Shoedata'
import { ScrollView } from 'react-native-gesture-handler'




const SellerHome = ({navigation}) => {
  return (
   <SafeAreaView style={[styles.container ]}>
    <ScrollView>
    <View style={styles.horizontalPaddingView}>
     <Greeter user={{
        img: 'https://yt3.ggpht.com/ytc/AKedOLTkTJuNwAOnHrFVGRLwbncwovkgiqXjD2ceQYuKDA=s900-c-k-c0x00ffffff-no-rj',
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
                renderItem={({ item }) => <Category category={item}  onPress={(val) => navigation.navigate(`${val}` )}/>}
            />
        </View>







    </ScrollView>








   </SafeAreaView>
  )
}

export default SellerHome