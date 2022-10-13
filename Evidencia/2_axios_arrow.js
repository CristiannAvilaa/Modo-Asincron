const axios = require('axios')

const url = "https://isro.vercel.app/api/spacecrafts"

//configuración de request
let config = {
    url : url,
    method: 'get'
}

//realizar la operación async
axios(config)
    .then(response => response.data.spacecrafts)
    .then (data =>{
    data.forEach(function (tipo) {
        console.log(`Tipo: ${tipo.name}`)
        console.log(`-----------------------`)
        })
    })
    .catch((error) =>{
    console.log(Error(`$error`))
})