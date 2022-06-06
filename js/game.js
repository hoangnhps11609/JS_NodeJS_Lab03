let rnd = Math.round(Math.random()*100)
let guessNum

do{
    guessNum = Number(prompt('Nhập số dự đoán: '))
    if(guessNum == rnd){
        alert('Bạn đạ đoán đúng')
    }else if (guessNum < rnd){
        alert('SỐ dự đoán < rnd')
    }else{
        alert('số dự đoán lớn hơn')
    }
}while(rnd != guessNum)