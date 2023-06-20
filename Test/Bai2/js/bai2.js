function Triangle() {
    let num = parseInt(document.getElementById("number1").value);
    if (num < 1 || num > 10) {
        document.getElementById("triangle-output").innerText="\nSố nguyên đầu vào không hợp lệ. Vui lòng nhập số từ 1 đến 10.";
      return;
    }
  
    let triangle = "\n";
  
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
        triangle += "* ";
      }
      triangle += "\n";
    }

    document.getElementById("triangle-output").innerText = triangle;
}
