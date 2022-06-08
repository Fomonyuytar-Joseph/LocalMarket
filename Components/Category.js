import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import values from '../const/values'
const { width } = Dimensions.get("screen")
const Category = ({category, onPress}) => {
  return (
    <TouchableOpacity onPress={ onPress}>
      <View style={[styles.container, {backgroundColor: 'white'}]}>
        <Image style={styles.image} source={category.img}/>
          
        <Text style={[values.h2Style, {marginTop: 10}]}>{category.heading}</Text>
       
      </View>
    </TouchableOpacity>
  )
}
//kj
export default Category

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