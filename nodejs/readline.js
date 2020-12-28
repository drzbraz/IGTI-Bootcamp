import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
})

question()
function question() {  
  rl.question("Digite um número: ", numero => {
    if (parseInt(numero) === -1) {
      rl.close()
    } else {
      question()
    }
    console.log(numero)
  })
}

