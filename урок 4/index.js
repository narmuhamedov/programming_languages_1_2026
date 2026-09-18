let budgetTracker = {
    expenses: [],


    addExpense(name, amount){
        let newExpense = {title:name, sum:amount};
        this.expenses.push(newExpense);
    },

    calculateTotal(){
        let total = 0;
        for (let i=0; i<this.expenses.length; i++){
            total += this.expenses[i].sum
        }
        return total;
    },

    render(){
        let listElement = document.getElementById('expense-list');
        let balanceElement = document.getElementById('total-balance');

        listElement.innerHTML = '';

        this.expenses.forEach(expense=>{
            let li = document.createElement('li');
            li.innerHTML = `<span>${expense.title}</span> <b>-${expense.sum} сом</b>`;
            listElement.appendChild(li);
        });

        balanceElement.textContent = this.calculateTotal();
    }
};

function hadleAddClick(){
    let nameInput = document.getElementById('expense-name');
    let amountInput = document.getElementById('expense-amount');

    let name = nameInput.value.trim();
    amount = parseFloat(amountInput.value);


    if(name==='' || isNaN(amount)|| amount <=0){
        alert('Пожалуйста заполните поля корректно!');
        return;
    }

    budgetTracker.addExpense(name,amount);
    budgetTracker.render();

    nameInput.value = '';
    amountInput.value = ''
}

document.getElementById('add-btn').addEventListener('click', hadleAddClick);








// let fruits = ['Яблоко', 'Бананы', 'Апельсины'];

// // create delete update
// fruits.push('Киви');
// fruits.pop();
// fruits[0] = 'Мандарин';


// console.log(fruits);

// console.log(fruits[0]);

// let user = {
//     name: 'Radomir',
//     balance: 1000,

//     //Метод объекта
//     showBalance(){
//         console.log(`У пользователя ${this.name} на счету ${this.balance} сом`);
        
//     },

//     //метод с параметром

//     buyItem(price){
//         this.balance -= price;
//         console.log('Покупка совершенна, Остаток', `${this.balance} сом`);
        
//     }
// }

// user.showBalance();
// user.buyItem(300);
