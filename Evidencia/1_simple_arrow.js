// Dependecia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://rickandmortyapi.com/api/character"
// Función para conectar a una API pública
const get_data = (endpoint, exito , fallo)=>{
    // 1. Crear el objeto de conexión
    const h = new http()
    // 2. abrir una conexión a la API
    h.open('GET', endpoint)
    //3. Enviar la request definida
    h.send()
    //4. Una vez, recibida la response, tratar la info
    h.onload = () => {
        if(h.status === 200){
            exito(h.responseText)
        }
        else{
            fallo(h.status)
        }
    }
}


const exito = data => {
    const tipos = JSON.parse(data).results
    tipos.forEach(function (element){
        console.log(`Tipo: ${element.name}`)
        console.log(`-----------------------`)
    });
}


const fallo = (status) =>{
     console.log(status)
}

get_data(url, exito, fallo)