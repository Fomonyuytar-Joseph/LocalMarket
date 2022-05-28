import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView ,TouchableOpacity ,Image} from 'react-native';
import LoginSVG from './assets/images/girl.svg'
import Create from './screens/Create';
import LoginScreen from './screens/LoginScreen';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shops from './screens/Shops';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LoginScreen} name="login" options={{headerShown:false}}/>
        <Stack.Screen component={Create} name="Create" options={{headerShown:false}}/>
        <Stack.Screen component={Shops} name="Shops"/>
        <Stack.Screen component={Login} name="Login"/>

      </Stack.Navigator>
      
    </NavigationContainer>
    
    // <Create/>
    
  );
}


