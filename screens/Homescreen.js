import { View, Text ,StyleSheet,SafeAreaView} from 'react-native'
import React from 'react'
import Greeter from '../Components/greeter'
import styles from '../const/styles'
import Spacer from '../Components/Spacer'
import Homebutton from '../Components/Homebutton'
import Homeinput from '../Components/Homeinput'
import values from '../const/values'



const Homescreen = () => {
  return (
    <SafeAreaView style={[styles.container ]}>
        <View style={styles.horizontalPaddingView}>
      <Greeter user={{
                    img: 'https://yt3.ggpht.com/ytc/AKedOLTkTJuNwAOnHrFVGRLwbncwovkgiqXjD2ceQYuKDA=s900-c-k-c0x00ffffff-no-rj',
                    name: 'Siviwe'
                    }}/>
                    <Spacer height={20}/>
                    
                    <Homeinput placeholder='Search' icon='search-outline' />
                    <Spacer height={20} />
                    <Text style={values.h2Style}>Categories</Text>
                     <Spacer height={20} />
                    </View>
                    
                   
    </SafeAreaView>
    
  )
}


export default Homescreen