
export default async function Api(title,page){
    let response = await fetch(`http://www.omdbapi.com/?apikey=27328d0b&s=${title}&page=${page}`)
    let data = await response.json()
    return data
}