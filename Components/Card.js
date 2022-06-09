import { View, Text, Image ,SafeAreaView ,FlatList  ,StyleSheet ,Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
import values from '../const/values'
import Icon from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get("screen")
const Card = ({item ,navigation}) => {
  return (
    <View style={{marginTop:20 ,marginBottom:8.5}}>
    <TouchableOpacity onPress={navigation.navigate('ProductsDetails')} >
      <View style={[styles.container, {backgroundColor: 'white'}]}>
        <Image style={styles.image} source={item.img}/>

        <View style={styles.infocontainer} >  
          <View>
        <Text >{item.name}</Text>
        <Text>{item.price}</Text>
        </View>

        <View style={{ marginLeft:50}}>
        <Icon name="plussquare" size={28} color={'#6C63FF'} />
        </View>

        </View>
       
      </View>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width /2.2,
        height: 160,
        borderRadius: 5,
        marginLeft:12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:5,
       
    },
    image: {
        width: 105,
        height: 100,
        shadowColor: "#000",
        shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
    },
    infocontainer:{
      flexDirection:'row' ,
      justifyContent:'space-around'
      
      



    }
})
export default Card