// Dependecia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"

// Función para conectar a una API pública
function get_data(endpoint){
    let promise = new Promise(function(resolve, rejected){
        // 1. Crear el objeto de conexión
             const h = new http()
        // 2. abrir una conexión a la API
            h.open('GET', endpoint)
        //3. Enviar la request definida
             h.send()
        //4. Una vez, recibida la response, tratar la info
            h.onload = function (){
                if(h.status === 200){
                    resolve(h.responseText)
                }else{
                    rejected(h.status)
            }
        }
    })
    return promise
}

function exito(data){
    const tipos = JSON.parse(data).results
    tipos.forEach(function (element){
        console.log(`Tipo: ${element.name}`)
        console.log(`-----------------------`)
    });
}

function fallo(status){
    console.log(status)
}

get_data(url).then(function(data){
    exito(data)
})