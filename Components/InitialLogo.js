import { View, Text ,StyleSheet } from "react-native";
import React from "react";

const InitialLogo = () => {
  const name = "Queen";
  return (
    <View>
    <View
      style={{
        
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: "#6C63FF",
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        marginLeft:30

        
      }}
    >
      <Text
        style={{
            marginTop:1,
            // margin:'auto',
          color: "white",
          height: 100,
          width: 100,
          fontSize: 70,
          textAlign:'center',
         
          
          
         
        }}
      >
        Q
      </Text>
      
    </View>
    <View style={{textAlign:'center',justifyContent:'center' ,alignContent:'center'}}>
     <Text style={styles.userText}>Nfongeh Queen</Text> 

      </View>

<View>



</View>




    </View>
  );
};


const styles= StyleSheet.create({
userText:{

    fontSize:30



}


})
export default InitialLogo;
