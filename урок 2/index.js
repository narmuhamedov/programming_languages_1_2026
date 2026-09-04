//Температура
function calculate(){
    let batken = Number(document.getElementById('batken').value);
    let jalalabad = Number(document.getElementById('jalalabad').value);
    let issyk = Number(document.getElementById('issyk').value);
    let naryn = Number(document.getElementById('naryn').value);
    let oshOblast = Number(document.getElementById('oshOblast').value);
    let talas = Number(document.getElementById('talas').value);
    let chuy = Number(document.getElementById('chuy').value);

    let temp = [
        batken, jalalabad,issyk,naryn, oshOblast, talas, chuy
    ]

    let sum = 0;

    for (let i = 0; i < temp.length; i++){
        sum = sum + temp[i];
    }

    let average = sum/temp.length;

    document.getElementById('result').textContent='Средняя температура: ' + average.toFixed(1) + "°C"


}

//Пример квадрата
// let color = String(prompt('введите цвет: красный, желтый, зеленый').toLowerCase());
// let square = document.getElementById("square");
// if (color==='красный') {
//     square.style.background = 'red';   
// }else if(color==='зеленый'){
//     square.style.background = 'green';
// }else if(color==='желтый'){
//     square.style.background = 'yellow';
// }else{
//     alert('такого цвета в условии нету!');
// }



//Циклы
// for (let i=0; i <=20; i++){
//     if(i%2 ===0){
//         document.write("Четные числа - " + i)
//     }
// }


// for (let i = 1; i<=10; i++){
//     document.writeln("5 x " + i + " = " + 5 * i);
// }


// for(let i = 1; i<=5; i++){
//     alert(i);
// }


// > < >= <= == === != !==
// И - &&

// let grade = Number(prompt('Введите оценку!'));
// if (grade === 5){
//     alert('Отлично');
// }else if (grade === 4){
//     alert('Хорошо');
// }else if (grade === 3){
//     alert('Удов');
// }else if (grade <=2 && grade>=0){
//     alert('Неудов');
// }else{
//     alert('Вы не верно ввели оценку!');
// }


// let num = Number(prompt('Введите число!'));
// if (num % 2 === 0) {
//     alert('Четное число');
// }else{
//     alert('Нечетное');
// }

// let age = Number(prompt('Введите возраст'));
// if (age >= 18) {
//     alert('Вы можете войти');
// }else{
//     alert('Вы не можете войти');
// }



// let age = 20;

// if (age >= 18) {
//     alert('Вы совершеннолетний');
// }else{
//     alert('Вы не совершеннолетний');
// }