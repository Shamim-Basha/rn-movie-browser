import { View, StyleSheet, Keyboard, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import Row from '../components/Row'
import Search from '../components/Search'
import Api from '../Api'

export default function HomeScreen({navigation}) {
    const [searchInput,setSearchInput] = useState('')
    const [page, setPage] = useState(1)
    const [data , setData] = useState()
    const [error , setError] = useState(false)

    useEffect(()=>{

    },[data])

    async function handleClick(id){
        let response = await fetch(`http://www.omdbapi.com/?apikey=27328d0b&i=${id}`)
        let message = await response.json()
        navigation.navigate('Description',{message:message})
    }
    function handleChange (text) {
        setSearchInput(text)
    }
    async function handleSearch (){
        if(searchInput){
            setError(false)
            setPage(1)
            let result = await Api(searchInput,page)
            setData(result)
            Keyboard.dismiss()
        }else{
            setError(true)
        }
        
    }

    async function handlenext(){
        setPage(prev => prev+ 1)
        let result = await Api(searchInput,page)
        setData(result)
    }

    async function handleprev(){
        setPage(prev => prev- 1)
        let result = await Api(searchInput,page)
        setData(result)
    }

  return (
    <View style={styles.Container}>
        <Search input={searchInput} handleChange={handleChange} handleSearch={handleSearch}/>
        {!error?<Row search={data} handleClick={handleClick} page={page} handleprev={handleprev} handlenext={handlenext}/>:<Text style={{color:'red',fontSize:22,fontWeight:'bold',padding:22}}>Error !!</Text>}
    </View>
)
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        paddingVertical:30,
        paddingBottom:20,
        backgroundColor:'#fff'
    },
    
})