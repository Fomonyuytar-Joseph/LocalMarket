import { View, Text ,FlatList ,StyleSheet } from 'react-native'
import React from 'react'
import Category from "../Components/Category";
import values from "../const/values";
import { Selectdata } from "../const/data";

const SelectScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={{ paddingLeft: values.horizontalPadding }}>
    <FlatList
      numColumns={2}
      data={Selectdata}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          category={item}
          onPress={(val) => navigation.navigate(`${val}`)}
        />
      )}
    />
  </View>
  </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }


})
export default SelectScreen