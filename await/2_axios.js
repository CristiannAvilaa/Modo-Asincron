const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//configuración de request
let config = {
    url : url,
    method: 'get'
}

function exito(data){
    
}

const f = async () => {
    try {
        let response = await axios(config)
        const tipos = response.data.results
        tipos.forEach(element => {
            console.log(element.name)
            console.log('----------------')
        })
    } catch (error) {
        console.log(Error(error))
    }
}
f()

