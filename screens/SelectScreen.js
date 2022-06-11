import { View, Text ,FlatList ,StyleSheet } from 'react-native'
import React from 'react'
import Category from "../Components/Category";
import values from "../const/values";
import { Selectdata } from "../const/data";

const SelectScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View>

        <Text style={styles.text}> How do you want to use the app </Text>
      </View>
    <View style={{marginLeft:50}}>
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
        flexDirection:'column',
        justifyContent:'center',
        
        // alignItems:'center'
        
    },

    text:{
      fontSize:24 ,
      fontWeight:'bold' , 
      color:'#3C3C3C' , 
      textAlign:'center',
      marginBottom:140


    }


})
export default SelectScreen