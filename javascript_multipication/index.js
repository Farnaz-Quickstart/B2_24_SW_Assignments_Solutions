function generateTable () {


  let inputNumber = document.getElementById("input_number").value;
  let input_result = document.getElementById("input_result");
  console.log (input_result);

  for (let i = 0 ; i <= 10 ; i++) {
    console.log (`${inputNumber} X ${i} = ${i*inputNumber}`)
    input_result.innerHTML +=`${inputNumber} X ${i} = ${i*inputNumber} <br>`
  }
 
} 