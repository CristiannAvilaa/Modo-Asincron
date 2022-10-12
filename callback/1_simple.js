// Dependecia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"

get_data(url, exito, fallo)

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

// Función para conectar a una API pública

function get_data(endpoint, exito , fallo){
    // 1. Crear el objeto de conexión
    const h = new http()
    // 2. abrir una conexión a la API
    h.open('GET', endpoint)
    //3. Enviar la request definida
    h.send()
    //4. Una vez, recibida la response, tratar la info
    h.onload = function (){
        exito(h.responseText)
    }
}

 // Invocar get_data
 
