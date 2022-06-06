import { View, Text ,StyleSheet,SafeAreaView ,FlatList} from 'react-native'
import React from 'react'
import Greeter from '../Components/greeter'
import styles from '../const/styles'
import Spacer from '../Components/Spacer'
import Category from '../Components/Category'
import Homebutton from '../Components/Homebutton'
import Homeinput from '../Components/Homeinput'
import values from '../const/values'
import { categories, transactions ,Sliderdata } from '../const/data'
import Carousel from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import BannerSlider from '../Components/BannerSlider'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const {height ,width}= Dimensions.get('window')


const Homescreen = ({navigation}) => {
     
  const renderBanner=({item, index})=>{
    return <BannerSlider data={item} />;

  }

  const [carousel, setCarousel] = useState(null);



  return (
    <SafeAreaView style={[styles.container ]}>
      <ScrollView>
        <View style={styles.horizontalPaddingView}>
      <Greeter user={{
                    img: 'https://yt3.ggpht.com/ytc/AKedOLTkTJuNwAOnHrFVGRLwbncwovkgiqXjD2ceQYuKDA=s900-c-k-c0x00ffffff-no-rj',
                    name: 'Jos'
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
                renderItem={({ item }) => <Category category={item} onPress={() =>navigation.navigate('ProductsDetails')}  />}
            />
        </View>
        <View style={Sliderstyles.slider}>

          <Carousel


             ref={c => { setCarousel(c); }}
          data={Sliderdata}
          renderItem={renderBanner}
          sliderWidth={width-40}
          itemWidth={300}
          loop={true}
          
          
          
          
          
          />

         
        </View>

        {/* New Products */}
        
     <View style={styles.horizontalPaddingView}>
        <Text style={values.h2Style}>New Products</Text>
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



   {/* Featured products */}
       
     <View style={[styles.horizontalPaddingView ,{flex:1 }]}>
        <Text style={values.h2Style}>Featured products </Text>
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
        </ScrollView>              
    </SafeAreaView>
    
  )
}


const Sliderstyles = StyleSheet.create({
  slider:{
    margin:15,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default Homescreen