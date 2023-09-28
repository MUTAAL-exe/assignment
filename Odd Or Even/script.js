function checkOddOrEven() {
  
    const number = parseInt(document.getElementById("numberInput").value);
  
 
    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return;
    }
  

    const result = number % 2 === 0 ? "Even" : "Odd";

    const resultBox = document.getElementById("resultBox");
    resultBox.textContent = `${number} is ${result}.`;
    resultBox.style.display = "block";
  }
  