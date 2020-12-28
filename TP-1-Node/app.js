import {promises as fs} from 'fs'
async function searchState() {

  try {
    const citites = []    
    const city = JSON.parse(await fs.readFile("Cidades.json", "utf-8"))
    const state = JSON.parse(await fs.readFile('Estados.json', "utf-8"))

    for (let i = 0; i < city.length; i++){
      for (let j = 0; j< state.length; j++){
        if (city[i].Estado === state[j].ID) {         
          await fs.appendFile(`${(state[j].Sigla)}.json`,JSON.stringify(city[i]))
        }

      }
    }
    console.log(citites)
    // if (city).Estado === JSON.parse(state).ID) {
     // }
  } catch (error) {
    console.log(error)    
  }
}

searchState()