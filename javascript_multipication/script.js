function generateMultipication () {
  let inputValue = document.getElementById("input_number").value
  let inputResult = document.getElementById("result")
  let inputResult1 = document.getElementById("result1")
  console.log (inputResult1)
  inputResult1.value = "<br>This is a test <br>" 


  for (let i = 0 ; i <=10 ; i++) {
    let result = inputValue * i
    inputResult.innerHTML += `${inputValue} X ${i} = ${result} <br>`
  }

}