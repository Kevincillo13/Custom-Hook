import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Card({ data = null, navigation }) {
   function handleClick() {
      navigation.navigate("Details", { url: data?.url });
   }

   return (
      
      <TouchableOpacity style={styles.container} onPress={handleClick}>
         <Text style={styles.text}>{data?.name}</Text>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#ffe069',
      borderColor: "white", 
      height: 200,
      width: 300, 
      margin: 1,
      display: "flex",
      justifyContent: "center", 
      alignItems: "center", 
      elevation: 5,
   },
   text: {
      color: "white",
      fontSize: 20, 
      fontWeight: "bold", 
      textShadowColor: "#000000", 
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
   },
});
