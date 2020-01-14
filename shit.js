var massiv = [];
while(true) {
    var num = parseInt(prompt("Введите номер"));
    massiv.push(num);
    if(num == "" || num == null || massiv.length > 5) {
        var summ = 0;
        for(var i = 0; i < massiv.length; i++) {
            summ += massiv[i];
        }
    alert(summ);
    break;
    }
}