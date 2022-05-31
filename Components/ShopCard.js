import { View, Text ,StyleSheet ,Dimensions, Image} from 'react-native'

const {height ,width}= Dimensions.get('window')
const cardWidth=width/2.2

const ShopCard = ({item}) => {
 
  return (
    <View style={styles.card}>
     
        
      <Image source={item.img} style={{  width:'100%' ,height:'70%' ,}} />
      <View style={{flex:1,flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.shopText}>{item.name}</Text>
        <Text style={styles.locationText}>{item.location}</Text>
        <Text>{item.time}</Text>
      </View>
      
    </View>
  )
}
const styles= StyleSheet.create({
 card:{
     height:height/2.8,
     backgroundColor:'#e5e5e5',
     width:cardWidth,
     marginTop:15,
      margin:5,
      // marginRight:10,
     borderRadius:5,
     marginBottom:20,
     elevation: 6,
     shadowColor: "#000",
     shadowOpacity: 0.27,
shadowRadius: 4.65,
    //  padding:15
     


 },

 shopText:{
   fontWeight:'bold',
   color:'#3C3C3C',
   fontFamily:'sans-serif-condensed',
   fontSize:17
   
   

 },
 locationText:{
   fontFamily:'Roboto'
 }
 



})
export default ShopCard