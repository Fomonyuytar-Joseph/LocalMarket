import {View, SafeAreaView, Image, Text, StyleSheet ,ScrollView,TouchableOpacity} from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Sliderdata} from '../const/data'

const ProductsDetails = ({navigation ,route}) => {

  const item=route.params;
  return (
    
    <SafeAreaView
    style={{
        flex: 1,
        backgroundColor:'white',
        }}>
<View   style={styles.header}>
<Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
<TouchableOpacity>
<Icon name="shopping-cart" size={28} onPress={()=>navigation.navigate('Cart')}/>
</TouchableOpacity>

</View>

<View style={styles.imageContainer} >

<Image  source={item.img} style={{resizeMode: 'contain', flex: 1}}/>

{/* <Text>Hiu</Text> */}
</View>
<View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Vendor:  {item.seller}</Text>

          {/* item Price */}
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>  
              {item.price}       
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {item.description}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={styles.buyBtn}>
              <Text
                style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Add to Kart
              </Text>
            </View>
          </View>
        </View>
      </View>








    </SafeAreaView>
   
  )
}



const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imageContainer: {
      flex: 0.45,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailsContainer: {
      flex: 0.55,
      backgroundColor: 'white',
      marginHorizontal: 7,
      marginBottom: 7,
      borderRadius: 20,
      marginTop: 30,
      paddingTop: 30,
    },
    line: {
      width: 25,
      height: 2,
      backgroundColor: 'black',
      marginBottom: 5,
      marginRight: 3,
    },
    borderBtn: {
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 40,
    },
    borderBtnText: {fontWeight: 'bold', fontSize: 28},
    buyBtn: {
      width: 130,
      height: 50,
      backgroundColor: '#6C63FF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    priceTag: {
      backgroundColor: '#6C63FF',
      width: 80,
      height: 40,
      justifyContent: 'center',
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    },
  });
export default ProductsDetails