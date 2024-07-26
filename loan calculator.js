 function loancalculate(){
    const Amount = document.querySelector("#Amount").value;
    const rate = document.querySelector("#rate").value;
    const months = document.querySelector("#months").value;
    const intrest = Amount * (rate *0.01) / months
    const total = ((Amount / months) + intrest) 

  //  if (Amount <=0 || rate <=0 || months <=0 ) {
    //    alert("Please insert correct values")
      //  return;
        
    //}

    document.querySelector("#total").innerHTML = "EMI :" + total
    
    

 }
 function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }
 
 
