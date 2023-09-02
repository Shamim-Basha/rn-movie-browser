import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const width = Dimensions.get('window').width

export default function DescriptionScreen({route}) {
  const {message} = route.params
  const data = message
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri : `${data.Poster}`}} />
        <View style={styles.details}>
          <Text style={styles.Title}>{data.Title} ({data.Year})</Text>
          <Text>Directors : {data.Director}</Text>
          <Text>Writers: {data.Writer}</Text>
          <Text>Run Time: {data.Runtime}</Text>
          <Text>{data.Genre}</Text>
          <Text>Rating: <Ionicons name="star" size={14} color={'yellow'} /> {data.imdbRating} ({data.imdbVotes})</Text>
            <View style={{marginLeft:50}}>

            {data.Ratings.map(rating => <Text key={rating.Source}>{rating.Source} : {rating.Value}</Text>)}
          </View>
          <Text>Released: {data.Released}</Text>
          <Text>Rated : {data.Rated}</Text>
          <Text style={{fontWeight:'bold'}}>Plot:</Text>
          <Text style={styles.Plot}>{data.Plot}</Text>
          <Text>Awards: {data.Awards}</Text>
          <Text>Cast: {data.Actors}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image:{
    height:width/1.5,
    width:width
  },
  Title:{
    textAlign:'center',
    margin: 10,
    fontWeight:'bold',
    fontSize:20,
  },
  details:{
    padding:10,
    marginVertical:10,
    borderRadius:10,
    gap:7
  },
  Plot:{
    lineHeight:16,
  }
})