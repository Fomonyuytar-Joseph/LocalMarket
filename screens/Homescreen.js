import { View, Text ,StyleSheet,SafeAreaView ,FlatList} from 'react-native'
import React from 'react'
import Greeter from '../Components/greeter'
import styles from '../const/styles'
import Spacer from '../Components/Spacer'
import Category from '../Components/Category'
import Homebutton from '../Components/Homebutton'
import Homeinput from '../Components/Homeinput'
import values from '../const/values'
import { categories, transactions } from '../const/data'



const Homescreen = () => {
  return (
    <SafeAreaView style={[styles.container ]}>
        <View style={styles.horizontalPaddingView}>
      <Greeter user={{
                    img: 'https://yt3.ggpht.com/ytc/AKedOLTkTJuNwAOnHrFVGRLwbncwovkgiqXjD2ceQYuKDA=s900-c-k-c0x00ffffff-no-rj',
                    name: 'Joseph'
                    }}/>
                    <Spacer height={20}/>
                    
                    <Homeinput placeholder='Search' icon='search-outline' />
                    <Spacer height={20} />
                    <Text style={values.h2Style}>Categories</Text>
                     <Spacer height={20} />
                    </View>
                    
                    <View style={{paddingLeft: values.horizontalPadding}}>
            <FlatList
                horizontal
                data={categories}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Category category={item} onPress={(val) => console.warn(`Clicked ${val}`)} />}
            />
        </View>
                   
    </SafeAreaView>
    
  )
}


export default Homescreen