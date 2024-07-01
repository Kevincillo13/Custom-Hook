import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';

export function Details({ navigation, route }) {
   const [pokemonData, setPokemonData] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchPokemonData = async () => {
         const { url } = route.params;
         if (url) {
            try {
               const response = await fetch(url);
               if (response.status !== 200) {
                  throw new Error('Error en la petición');
               }
               const data = await response.json();
               setPokemonData(data);
            } catch (error) {
               console.error('Error fetching Pokémon data:', error);
            } finally {
               setLoading(false);
            }
         } else {
            setLoading(false);
         }
      };

      fetchPokemonData();
   }, [route.params]);

   function handleClick() {
      navigation.navigate('Home');
   }

   return (
      <TouchableOpacity onPress={handleClick} style={styles.touchable}>
         {loading ? (
            <ActivityIndicator size="large" color="#FF0000" />
         ) : pokemonData ? (
            <View style={styles.view}>
               <Text style={styles.text}>Poke Name: {pokemonData.name}</Text>
               <Image source={{ uri: pokemonData.sprites.front_default}}
               style={styles.image}></Image>
               <Text style={styles.text}>Poke Height: {pokemonData.height}</Text>
               <Text style={styles.text}>Poke Weight: {pokemonData.weight}</Text>
            </View>
         ) : (
            <Text style={styles.text}>No Pokémon data available</Text>
         )}
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   touchable: {
      flex: 1,
      backgroundColor: "#FF0000", // Fondo rojo de la Pokédex
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
   },
   text: {
      fontSize: 24, // Ajuste del tamaño de fuente
      lineHeight: 28,
      marginVertical: 10,
      color: "white", // Texto blanco
      textTransform: "capitalize",
      fontWeight: "bold",
      textShadowColor: "#000000", // Sombra en el texto
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
   },
   view: {
      // Fondo blanco para el contenido
      borderColor: "#000000", // Bordes negros
      padding: 20,
      alignItems: "center",
      width: "40%",
      shadowColor: "#000000", // Sombra para darle profundidad
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 5, // Elevación en Android
   },
   image: {
      width: 200,
      height: 200,
      marginBottom: 20,
      backgroundColor: '#ffe069',
      alignItems: 'center',
      justifyContent: 'center', 
    },
});
