const fs = require('fs')
const { createInflate } = require('zlib')

let city = fs.readFileSync('./Cidades.json')
let state = fs.readFileSync('./Estados.json')
let JSONCity = JSON.parse(city)
let JSONState = JSON.parse(state)
class App{

  async Read(){
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
    }
  } 
}

new App().Read()