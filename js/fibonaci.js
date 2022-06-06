let f0 = Number(prompt("Nhập số thứ 1: "));
let f1 = Number(prompt("Nhập số thứ 2: "));

document.writeln("<h1>");
for (let i = 0; i < 10; i++) {
  document.writeln(`${f0}`);
  const tmp = f0;
  f0 = f1;
  f1 = tmp + f1;
}
document.writeln("</h1>");
