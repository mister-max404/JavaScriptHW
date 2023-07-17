var num1 = +prompt("Son kiriting")
while (isNaN(num1) || num1 == 0) {
    var num1= +prompt("Noto'g'ri kiritdingiz, sonni boshidan kiriting")
}
var num2 = +prompt("Sonning darajasini kiriting")
while (isNaN(num2) || num2 == 0) {
    var num2= +prompt("Noto'g'ri kiritdingiz, sonni boshidan kiriting")
}
let box = 1
for (let i = 0; i < num2; i++) {
    box = box * num1
}
alert("Javob " +box)