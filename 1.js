

//1. Реалізувати алгоритм: сортування бульбашкою для наступного масиву [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]
let refuge = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];
Bubble()
// 2. Вивести всі алгоритми цієї лекції і попередньої в функції, викличте функції 
//лінійний алгоритм пошуку
linear()
//бінарний алгоритм пошук
binar()
//бульбашковий алгоритм сортування
Bubble()

//3. Створіть функцію яка виводить в консоль пояснення того що таке hosting
HostingFunction()
//4. Створіть функцію яка виводить в консоль пояснення що таке scope
ScopeFunction()
//5. Створіть функцію яка виводить в консоль пояснення чим поганий var 
VarFunction()



//1. Реалізувати алгоритм: сортування бульбашкою для наступного масиву [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]
function Bubble() {
   

    for (let i = 0; i < refuge.length; i++) {
        for (let j = 0; j < refuge.length; j++) {
            if (refuge[j] > refuge[j + 1]) {
                let box = refuge[j]
                refuge[j] = refuge[j + 1]
                refuge[j + 1] = box
            }
        }
    }
    console.log('від меншого до більшого\n', refuge);

    for (let i = 0; i < refuge.length; i++) {
        for (let j = 0; j < refuge.length; j++) {
            if (refuge[j] < refuge[j + 1]) {
                let box = refuge[j]
                refuge[j] = refuge[j + 1]
                refuge[j + 1] = box
            }
        }
    }
    console.log('від більшого до меншого\n', refuge);

}

// 2. Вивести всі алгоритми цієї лекції і попередньої в функції, викличте функції 
function linear() {
    console.log('лінійний пошук\n', '---------');
    let search = prompt(' Введіть наступне з міст: Київ, Херсон, Крим, Запоріжжя, Донецьк, Білгород, Львів')
    let found = 0
    let linear = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']
    for (i = 0; i < linear.length; i++) {
        if (search === linear[i]) {
            console.log('лінійний пошук: масиву [Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів]');
            console.log('Місто:', linear[i], 'під номером', i + 1)
            found = 1;
            break;
        }

    }
    if (!found) {
        console.log('Помилка запиту: місто в масиві не знайдено');
    }
}


function binar(){
    console.log('бінарний пошук\n', '---------');

let search2 = Number(prompt('введіть число:'))
let linear2 = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]
let StartSearch2 = 0
let EndShearch2 = linear2.length - 1
let found2 = false
let center

while (StartSearch2 <= EndShearch2) {
    center = Math.round((StartSearch2 + EndShearch2) / 2)

    if (linear2[center] === search2) {
        console.log('число знайдено');
        EndShearch2 = StartSearch2
        found2 = true;
    } else if (linear2[center] > search2) {
        EndShearch2 = center -1
    } else if (linear2[center] < search2) {
        StartSearch2 = center +1
    }
}
if (!found2) {
    console.log('Помилка, такого числа в масиві не має');
} 
}


//3. Створіть функцію яка виводить в консоль пояснення того що таке hosting
function HostingFunction() {
    console.log('hosting - мезанізм за допомогою якого, певні обьекти JS, зокрема фунцкції, в коді виходять вище своєї області видимості .');
}


//4. Створіть функцію яка виводить в консоль пояснення що таке scope
function ScopeFunction() {
    console.log(' scope - це область видимості, яка визначає, що в конкретному райфоні було задекларовано, створено та проініциалізовано  ');
}


//5. Створіть функцію яка виводить в консоль пояснення чим поганий var 
function VarFunction() {
    console.log(' var поганий,  тим що - це застарлий спосіб оголошення перемінної, підвергаются підняттю  hoistingу по типу функцій і може бути використана до її оголошення, але без присвоєення. Також var  ігнорує блочну обьласть видимості');
}