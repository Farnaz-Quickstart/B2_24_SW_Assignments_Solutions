
function handleAddition () {
  
 
  let number1 = Number(document.getElementById("number1").value)
  let number2 = Number(document.getElementById("number2").value)
  document.getElementById("result").value = number1 + number2

}

function handleSubtraction () {
  let number1 = Number(document.getElementById("number1").value)
  let number2 = Number(document.getElementById("number2").value)
  document.getElementById("result").value = number1 - number2
}

function handleMultipication () {
  let number1 = Number(document.getElementById("number1").value)
  let number2 = Number(document.getElementById("number2").value)
  document.getElementById("result").value = number1 * number2
}

function handleDivision () {
  let number1 = Number(document.getElementById("number1").value)
  let number2 = Number(document.getElementById("number2").value)
  document.getElementById("result").value = number1 / number2
}


let myvar1 = "10"
let dayofWeek = ["sat", "sun", "Mon", "Thu"]
console.log (myvar1)
console.log (dayofWeek[0])
for (let i = 0 ; i < dayofWeek.length; i++) {
  console.log (dayofWeek[i])
}



