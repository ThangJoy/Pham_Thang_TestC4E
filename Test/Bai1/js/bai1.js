function calculatePrimeSum() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let sum = 0;
  
    if (number1 < number2) {
      for (let i = number1; i <= number2; i++) {
        if (isPrime(i)) {
          sum += i;
        }
      }
  
      document.getElementById("result").innerHTML = "Tổng các số nguyên tố từ " + number1 + " đến " + number2 + " là: " + sum;
    } else {
      document.getElementById("result").innerHTML = "Vui lòng nhập số a nhỏ hơn số b.";
    }
  }
  
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  