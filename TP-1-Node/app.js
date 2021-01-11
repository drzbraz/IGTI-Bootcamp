import { promises as fs } from 'fs'
import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
async function createFile() {
    try {
        const cities = JSON.parse(await fs.readFile('Cidades.json', 'utf-8'))
        const states = JSON.parse(await fs.readFile('Estados.json', 'utf-8'))

        states.map((states) => {
            const findCity = cities.filter((city) => {
                if (states.ID === city.Estado) return city
            })
            fs.writeFile(
                `./states/${states.Sigla}.json`,
                JSON.stringify({ cidades: findCity })
            )
        })
    } catch (error) {
        console.log(error)
    }
}

async function citiesInState(UF) {
    const state = JSON.parse(await fs.readFile(`./states/${UF}`, 'utf-8'))

    return state.cidades.length
}
async function statesWithBigCities() {
    const citiesNumber = []
    const files = await fs.readdir('./states')
    let value = 0
    for (let index = 0; index < files.length; index++) {
        citiesNumber.push(
            (await citiesInState(files[index])) +
                '-' +
                files[index].toString().split('.')[0]
        )
    }
    console.log(
        citiesNumber
            .sort(function (a, b) {
                return parseInt(b.split('-')[0]) - parseInt(a.split('-')[0])
            })
            .splice(0, 5)
    )

    // for (let index = 0; index < citiesNumber.length; index++) {
    //     if ()

    //         const element = array[index];

    // }
    // console.log(citiesNumber)
}

async function question() {
    rl.question('Digite UF de um estado: ', async (UF) => {
        const number = await citiesInState(UF)
        console.log(`O número de cidades desse estado é de ${number}`)
        rl.close()
    })
}

createFile()
statesWithBigCities()
// question()
