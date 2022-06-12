import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';


import SellerHome from './SellerHome';
import SellerAddProduct from './SellerAddProduct';
import SellerProfile from './SellerProfile';

const sellerHomeName="Home"
const sellerAddName="AddProduct"
const sellerProfileName=" Profile"


const Tab = createBottomTabNavigator();



const SellerContainer = () => {
  return (
    <Tab.Navigator
    initialRouteName={sellerHomeName}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === sellerHomeName) {
          iconName = focused ? 'home' : 'home-outline';

        } else if (rn === sellerAddName) {
          iconName = focused ? 'add' : 'add-outline';

        } 
         else if (rn === sellerProfileName) {
          iconName = focused ? 'person' : 'person-outline';
        }
        

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#6C63FF',
      inactiveTintColor: 'grey',
      labelStyle: { paddingBottom: 10, fontSize: 10 },
      style: { padding: 10, height: 70}
    }}
    
    
    
  
    >


<Tab.Screen name={sellerHomeName} component={SellerHome}  options={{headerShown:false}} />
<Tab.Screen name={sellerAddName} component={SellerAddProduct} />



<Tab.Screen name={sellerProfileName} component={SellerProfile} />


    </Tab.Navigator>
  )
}

export default SellerContainer