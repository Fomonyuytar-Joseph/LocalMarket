import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView ,TouchableOpacity ,Image} from 'react-native';
import LoginSVG from './assets/images/girl.svg'
import Create from './screens/Create';
import LoginScreen from './screens/LoginScreen';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shops from './screens/Shops';
import Homescreen from './screens/Homescreen';
import ProductsDetails from './Components/ProductsDetails';
import Cart from './Components/Cart';
import ShoeScreen from './screens/ShoeScreen';
import PhoneScreen from './screens/PhoneScreen';
import CosmeticScreen from './screens/CosmeticScreen';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LoginScreen} name="login" options={{headerShown:false}}/>
        <Stack.Screen component={Create} name="Create" options={{headerShown:false}}/>
        <Stack.Screen component={Shops} name="Shops" options={{headerShown:false}}/>
        <Stack.Screen component={Login} name="Login" options={{headerShown:false}}/>
        <Stack.Screen component={Homescreen} name="Homescreen" options={{headerShown:false}}/>
        <Stack.Screen component={ProductsDetails} name="ProductsDetails" options={{headerShown:false}}/>
        <Stack.Screen component={Cart} name="Cart" />
        <Stack.Screen component={ShoeScreen} name="Shoes"  />
        <Stack.Screen component={PhoneScreen} name="Phones"   />
        <Stack.Screen component={CosmeticScreen} name="Cosmetics"   />


      </Stack.Navigator>
      
    </NavigationContainer>
    
    // <Create/>
    
  );
}


