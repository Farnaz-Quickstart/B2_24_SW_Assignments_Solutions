function generateMultipication () {
  let inputValue = document.getElementById("input_number").value
  let inputResult = document.getElementById("result")


  for (let i = 0 ; i <=10 ; i++) {
    console.log (`${inputValue} x ${i} = ${inputValue*i}`)
    // let result = inputValue * i
     inputResult.innerHTML += `${inputValue} x ${i} = ${inputValue*i} <br>`

  }

}