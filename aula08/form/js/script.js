window.addEventListener('load', ()=>{
  console.log('Página completamente carregada')

  var nameInput = document.querySelector('#nameInput')
  var form = document.querySelector('form')
  form.addEventListener('submit', (event)=>{
    event.preventDefault()
    var nameInput = document.querySelector('#nameInput')
    alert(nameInput.value + ' cadastrado com sucesso!')
  })
  
  nameInput.addEventListener('keyup', (event)=>{
    var count = event.target.value    
    var span = document.querySelector('#nameLength')   

    span.textContent = count.length
  })

})
