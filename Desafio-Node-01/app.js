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
    for (let index = 0; index < files.length; index++) {
        citiesNumber.push(
            (await citiesInState(files[index])) +
                '-' +
                files[index].toString().split('.')[0]
        )
    }
    console.log(
        '3 - ',
        citiesNumber
            .sort(function (a, b) {
                return parseInt(b.split('-')[0]) - parseInt(a.split('-')[0])
            })
            .splice(0, 5)
    )
    console.log(
        '4 - ',
        citiesNumber
            .sort(function (a, b) {
                return parseInt(a.split('-')[0]) - parseInt(b.split('-')[0])
            })
            .splice(0, 5)
            .sort(function (a, b) {
                return parseInt(b.split('-')[0]) - parseInt(a.split('-')[0])
            })
    )
}

async function question() {
    rl.question('Digite UF de um estado: ', async (UF) => {
        const number = await citiesInState(`${UF}.json`)
        console.log('2 - ', `O número de cidades desse estado é de ${number}`)
        rl.close()
    })
}

async function findBigNameCity() {
    const states = JSON.parse(await fs.readFile('./Estados.json', 'utf-8'))
    await printNameCitiesBig(states)
}
async function printNameCitiesBig(states) {
    console.log('5 - ')
    for (let index = 0; index < states.length; index++) {
        const cities = JSON.parse(
            await fs.readFile(`./states/${states[index].Sigla}.json`, 'utf-8')
        )
        const city = cities.cidades
            .sort(function (a, b) {
                return parseInt(b.Nome.length - a.Nome.length)
            })
            .splice(0, 1)
        console.log('\n--------------')
        for (let j = 0; j < city.length; j++) {
            console.log(`${city[j].Nome} - ${states[index].Sigla}`)
        }
    }
}

async function printNameCitiesSmall(states) {
    console.log('6 - ')

    for (let index = 0; index < states.length; index++) {
        const cities = JSON.parse(
            await fs.readFile(`./states/${states[index].Sigla}.json`, 'utf-8')
        )
        const city = cities.cidades
            .sort(function (a, b) {
                return parseInt(a.Nome.length - b.Nome.length)
            })
            .splice(0, 1)
        console.log('\n--------------')
        for (let j = 0; j < city.length; j++) {
            console.log(`${city[j].Nome} - ${states[index].Sigla}`)
        }
    }
}
async function findSmallNameCity() {
    const states = JSON.parse(await fs.readFile('./Estados.json', 'utf-8'))
    await printNameCitiesSmall(states)
}

async function printNameCitiesSmallEver(cities, states) {
    console.log('8 - ')

    const city = cities
        .sort(function (a, b) {
            return parseInt(a.Nome.length - b.Nome.length)
        })
        .splice(0, 1)
    const state = states.find((element) => element.ID === city[0].Estado)
    console.log(`${city[0].Nome} - ${state.Sigla}`)
}
async function findSmallNameCityEver() {
    const cities = JSON.parse(await fs.readFile('./Cidades.json', 'utf-8'))
    const states = JSON.parse(await fs.readFile('./Estados.json', 'utf-8'))
    await printNameCitiesSmallEver(cities, states)
}

async function printNameCitiesBigEver(cities, states) {
    console.log('7 - ')

    const city = cities
        .sort(function (a, b) {
            return parseInt(b.Nome.length - a.Nome.length)
        })
        .splice(0, 1)
    const state = states.find((element) => element.ID === city[0].Estado)
    console.log(`${city[0].Nome} - ${state.Sigla}`)
}
async function findBigNameCityEver() {
    const cities = JSON.parse(await fs.readFile('./Cidades.json', 'utf-8'))
    const states = JSON.parse(await fs.readFile('./Estados.json', 'utf-8'))
    await printNameCitiesBigEver(cities, states)
}

async function start() {
    await createFile()
    await statesWithBigCities()
    await findBigNameCity()
    await findSmallNameCity()
    await findBigNameCityEver()
    await findSmallNameCityEver()
    await question()
}

start()
