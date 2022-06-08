import { View, Text, Image ,SafeAreaView ,FlatList  ,StyleSheet ,Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
import values from '../const/values'
const { width } = Dimensions.get("screen")
const Card = ({item}) => {
  return (
    <TouchableOpacity >
      <View style={[styles.container, {backgroundColor: 'white'}]}>
        <Image style={styles.image} source={item.img}/>
          
        <Text style={[values.h2Style, {marginTop: 10}]}>{item.name}</Text>
        <Text style={[values.h2Style, {marginTop: 10}]}>{item.price}</Text>
       
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.33,
        height: 150,
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:30
    },
    image: {
        width: 100,
        height: 100,
        shadowColor: "#000",
        shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
    }
})
export default Card