window.addEventListener("load", function(event) {
  console.log("All resources have been loaded!");
});

var red = '0'
var blue = '0'
var green = '0'

function updateRed(val) {
  document.querySelector('#red').value = val;   
  red= val
  document.getElementById('square').style.backgroundColor = 'rgb('+red+','+blue+','+green+')';   
}    
function updateGreen(val) {
  document.querySelector('#green').value = val;     
  blue = val
  document.getElementById('square').style.backgroundColor = 'rgb('+red+','+blue+','+green+')';   
}    
function updateBlue(val) {
  document.querySelector('#blue').value = val;       
  green = val
  document.getElementById('square').style.backgroundColor = 'rgb('+red+','+blue+','+green+')';   
  }
