let a = Number(prompt("Nhập a: "));
let b = Number(prompt("Nhập b: "));
let opt = prompt("Nhập toán tử: + - * / ");
let result = 0;

switch (opt) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;

  case "/":
    result = a / b;
    break;
  default:
    result = "Toán tử ko hợp lệ";
    break;
}

if (typeof result == "number") {
  alert(`${a} ${opt} ${b} = ${result}`);
} else {
  alert(result);
}
