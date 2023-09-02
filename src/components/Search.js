import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Search({input,handleChange,handleSearch}) {
  return (
    <View style={styles.SearchBOx}>
      <TextInput style={styles.SearchInput} placeholder='Search' value={input} onChangeText={text => handleChange(text)}/>
      <TouchableOpacity style={styles.SearchBtn} onPress={handleSearch} >
        <Text style={{color:'white'}}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  SearchBOx:{
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:10
  },
  SearchInput:{
    flex:1,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    padding:5,
    paddingHorizontal:12
  },
  SearchBtn:{
    backgroundColor:'black',
    borderRadius:20,
    paddingHorizontal:12,
    paddingVertical:7,
  }
})