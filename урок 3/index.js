// console.log('Учись, студент!');
// console.log('Учись, студент!');
// console.log('Учись, студент!');


// function study(){
//     console.log('Учись Учись студент!');
// }

// study()
// study()
// study()


// function study(name, subject) {
//     console.log("Учись, " + name + " пока не поздно!\nТвой предмет " + subject);
// }

// study('Абдурахим', 'JavaScript')
// study('Сезим', 'Android')
// study('Жумаш', 'Python')


// function sum(a,b){
//     return a + b
// }

// let result = sum(10, 20)
// console.log(result);


// function checkAge(age){
//     if (age >=18){
//         return "доступ разрешен"
//     }else{
//         return 'Доступ не разрешен'
//     }
// }

// console.log(checkAge(20));
// console.log(checkAge(15));


// function checkAge(){
//     let age = Number(document.getElementById("age").value);
//     if (age>=18) {
//         alert('Вы проходите!')
//     }else{
//         alert('Вы не проходите!')
//     }
// }

// function sum(a,b){
//     return a + b;
// }

// function declaration

// function multiply(a,b){
//     return a *b;
// }

// let res1 = sum(10,20);

// let res2 = multiply(res1, 5);

// document.writeln(res2)


// expression func

// let sum = function(a,b){
//     return a + b;
// }
// console.log(sum(10,20));


//стрелочная функция
// let sum = (a,b)=>{
//     return a + b;
// }
// console.log(sum(10,20));

// let sum2 = (a,b) => a + b;
// console.log(sum2(30,30));


//анонимная функция
// let hello = function(){
//     console.log('Привет!');
// };


// let student = {
//     name: 'Алим',

//     sayHello(){
//         console.log('Привет');
        
//     }
//     // sayHello: function(){
//     //     console.log('Привет');      
//     //}
// }

// student.sayHello();


//функция конструктор

// function Student(name, age){
//     this.name = name;
//     this.age = age;
// }

// let student1 = new Student('Иван', 23);

// console.log(student1.name);
// console.log(student1.age);

function checkStudent(){
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;
    let score = Number(document.getElementById('score').value)

    let result;

    if (score >=110) {
        result = 'Вы в универе';
    }else if (score>=80){
        result = 'Вы в колледже';
    }else{
        if(gender==='male'){
            result = 'Вы в армию!';
        }else{
            result = 'Вы замуж';
        }
    }


    document.getElementById('result').innerHTML = `
        <h2>Результат</h2>
        <p>Имя: ${name}</p>
        <p>Баллы: ${score}</p>
        <p>${result}</p>
    `;

}