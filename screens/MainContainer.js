import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';


import Homescreen from './Homescreen';
import Cart from '../Components/Cart';
import Shops from './Shops';
import Profile from './Profile';
import CategoryScreen from './CategoryScreen';


const homeName = "Homescreen";
const categoryName = "Category";
const cartName = "Cart";
const profileName = "Account";
const shopName="Shops"

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === homeName) {
          iconName = focused ? 'home' : 'home-outline';

        } else if (rn === categoryName) {
          iconName = focused ? 'copy' : 'copy-outline';

        } else if (rn === cartName) {
          iconName = focused ? 'cart' : 'cart-outline';
        }
         else if (rn === profileName) {
          iconName = focused ? 'person' : 'person-outline';
        }
        else if (rn === shopName) {
          iconName = focused ? 'card' : 'card-outline';
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


<Tab.Screen name={homeName} component={Homescreen}  options={{headerShown:false}} />
<Tab.Screen name={categoryName} component={CategoryScreen} />
<Tab.Screen name={shopName} component={Shops} />
<Tab.Screen name={cartName} component={Cart} />


<Tab.Screen name={profileName} component={Profile} />


    </Tab.Navigator>
  )
}

export default MainContainer