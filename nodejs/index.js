// import {promises as fs} from 'fs'
// asynchronous function asycn await

// init()
// async function init() {
//   try {
//     await fs.writeFile("teste.txt", "bla bla blas")
//     await fs.appendFile("teste.txt", "final do arquivo")
//     const data = await fs.readFile("teste.txt", "utf-8")
//     console.log(data)

//   } catch (error) {
//     console.log(error)
//   }
// }


// asynchronous function promises
// fs.writeFile("teste.txt", "bla bla blas").then(() => {
//   fs.appendFile("teste.txt", "final do arquivo").then(() => {
//     fs.readFile("teste.txt", "utf-8").then(resp => {
//       console.log(resp)
//     }).catch(err => {
//       console.log(err)
//     })
//   }).catch(err => {
//     console.log(err)
//   })
// }).catch(err => {
//   console.log(err)
// })



// asynchronous function callback
// console.log("1")
// fs.writeFile('teste.txt', "bla bla bla", function (err) {
//   console.log("2")  
//   if (err) {
//     console.log(err)
//   } else {
//     fs.appendFile("teste.txt","\nto no final do arquivo", (err) => {
//       if (err) console.log(err)
//       else {
//         fs.readFile("teste.txt", "utf-8", (err, data) => {
//           if (err) {
//             console.log(err)
//           } else {
//             console.log(data)
//           }
//         })
        
//       }
//     })
//   }
// })
// console.log("3")



// synchronous function
// try {
//   console.log('1')
//   fs.writeFileSync("teste.txt", "bla bla bla")
//   console.log('2')
//   const data = fs.readFileSync("teste.txt", "utf-8")
//   console.log(data)
//   console.log("3")
// } catch (error) {
//   console.log(error)
// }
