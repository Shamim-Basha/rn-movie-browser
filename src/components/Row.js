import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'


const width = Dimensions.get('window').width
export default function Row({search, handleClick, page, handlenext,handleprev}) {
    return(
        <ScrollView style={styles.container}>
            {search?.Search?.map(movie =>
                <TouchableOpacity onPress={()=>handleClick(movie.imdbID)} style={styles.card} key= {movie.imdbID}>

                    <View>
                        <Image
                            style={styles.Poster}
                            source={{uri : `${movie.Poster}`}} />
                    </View>

                    <View style={styles.Detail}>
                        <Text style={styles.Title}> {movie.Title} </Text>
                        <View style={{flexDirection:'row', gap:10, justifyContent:'flex-start'}}>
                            <Text>{ movie.Year}</Text>
                            <Text>{movie.Type} </Text>
                        </View>
                    </View>

                </TouchableOpacity>
            )}
            {search?
            <View style={styles.cta}>
                {page!=1?<TouchableOpacity onPress={handleprev} style={styles.btn} ><Text style={{color:'white',}}>Prev</Text></TouchableOpacity>:<></>}
                {page !=100?<TouchableOpacity onPress={handlenext} style={styles.btn} ><Text style={{color:'white',}}>Next</Text></TouchableOpacity>:<></>}
            </View>:<></>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
    },
    card:{
        padding:7,
        marginTop:7,
        flexDirection:'row',
        borderRadius:20,
    },
    Poster:{
        height:100,
        width:100,
    },
    Detail:{
        flex:1,
        justifyContent:'center',
        marginLeft:20,
        gap:10,
        flexWrap:'wrap'
    },
    Title:{
        fontWeight:'bold',
        fontSize:15,
    },
    cta:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingVertical: 10,
        marginTop:10,

    },
    btn:{
        backgroundColor:'black',
        padding:10,
        paddingHorizontal:25,
        borderRadius:20,
    }
})