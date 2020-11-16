const express = require('express')
const server = express()
const axios = require('axios')

async function getUsers(){


   await axios.get('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo').then(function (response){
   const array = response
   const found = array.data.results.filter(person =>{
     return person.gender ==='male'
   })

   var cont = 0 
   const result = found.filter(person =>{
    if (person.name.first.indexOf("a" !==-1)){
      cont++
     }
     return person.name.first.indexOf("a" !==-1)

    })

    console.log(cont)
  })
}


 getUsers()

server.listen(3000, ()=>{
  console.log('server running 3000 port')
})