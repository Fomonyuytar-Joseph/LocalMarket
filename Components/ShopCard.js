import { View, Text ,StyleSheet ,Dimensions, Image} from 'react-native'

const {height ,width}= Dimensions.get('window')
const cardWidth=width/2

const ShopCard = () => {
 
  return (
    <View style={styles.card}>
     
        
      <Image source={require('../assets/images/shop.jpg')} style={{  width:'100%' ,height:'70%' ,}} />
      <View>
        <Text>Mami Puff</Text>
        <Text>Mami Puff</Text>
        <Text>Mami Puff</Text>
      </View>
      
    </View>
  )
}
const styles= StyleSheet.create({
 card:{
     height:height/3,
     backgroundColor:'#e5e5e5',
     width:cardWidth,
     marginTop:15,
    // //  marginLeft:10,
     borderRadius:5,
     marginBottom:20,
    //  padding:15
     


 }



})
export default ShopCard