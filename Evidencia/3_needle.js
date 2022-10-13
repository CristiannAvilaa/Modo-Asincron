const needle = require('needle')

const url = "https://isro.vercel.app/api/centres"

const f = async () => {
    try {
        let response = await needle('get', url)
        const tipos = response.body.centres
        tipos.forEach(element => {
            console.log(element.name)
            console.log('----------------')
        })
    } catch (error) {
        console.log(Error(error))
    }
  
}

f()

