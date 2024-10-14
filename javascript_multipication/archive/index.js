function generateTable () {

  let inputNumber = document.getElementById("input_number").value;
  let input_result = document.getElementById("input_result");

  for (let i = 0 ; i <= 10 ; i++) {
    inputname = `result${i}`
    document.getElementById(inputname).value = i

    if ((i*inputNumber % 2 ) == 0) 
        input_result.innerHTML +=`${inputNumber} X ${i} = ${i*inputNumber} <br>`
    else
      input_result.innerHTML +=`<span style="color:red">${inputNumber} X ${i} = ${i*inputNumber} </span><br>`
  }


 
} 