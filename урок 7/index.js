async function getRandomUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    if (!response.ok){
        throw new Error(`Ошибка сервера ${response.status}`);
    }
    const user = await response.json();
    

    console.log(`Имя ${user.name}`);
    console.log(`Email ${user.email}`);
}catch(error){
    console.error('Ошибка сервера!');
    
}
}

getRandomUser()











// const checkExamResult = new Promise((resolve, reject)=>{
//     let passed = false;
//     setTimeout(()=>{
//         if (passed){
//             resolve('Ура ты сдал экзамен!')
//         }else{
//             reject('К сожалению не зачет!')
//         }
//     }, 3000);
// });

// checkExamResult
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
//     .finally(()=>{
//         console.log('Этот блок выполнится в любом случае!');
//     })





// function loadUser(id, callback){
//     setTimeout(()=>{
//         document.writeln('Данные пользователя получены!');
//         const user = {id: id, name:'Иванов Иван'};
//         callback(user);
//     }, 5000);
// }

// loadUser(1, (userData)=>{
//     document.writeln(`Привет, ${userData.name}! ID - ${userData.id}`);
// })

// document.writeln('Сейчас кое что выйдет.......')