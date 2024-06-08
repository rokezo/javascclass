
const user = {
    name: "John",
    surname: "Smith",
    age: 50
};

console.log(user);
//var 1
console.log(user.name); // доступ до поля об'єкту
//var 2 
console.log(user["surname"])

user.age = 40;
user["age"] = 100;

// Масиви
const value = [1,3,4,6,32,54,4];
const emptyArray = []
const emptyArray2 = new Array();

console.log(values[4]);
values[values.length] = 200;

for(let i = 0; i < value.length; i++) { // вивід всіх елементів масиву
    console.log(values[i]);
}

// методи масиву

console.log("index: " + values.indexOf(4,3)); //повертає індекс елементу, -1 якщо значення немає
console.log("index: " + values.lastIndexOf(4));

values.push(314);
console.log(values);

console.log(values.includes(4));
// map - формує новий масив
function valueSquare() {
    return val ** 2;
}
const resArray = values.map(valueSquare);
console.log(resArray);

//sort
function sortFunc(a,b) {
    if(a < b) {
        return -1; // лівий елемент менший
    }
    else if (a === b) {
        return 0; // однакові
    }
    else {
        return -1; // правий елемент менший
    }
}
values.sort(sortFunc);
console.log(values);

// string

const text = "my text, string object methods";

console.log(text.length);
console.log(text.indexOf("text"));
console.log(text.includes("obj"));
// substring(startIndex, endIndex) - endIndex не включно
console.log(text.substring(0, 5));

const age = 10;

const ageText = `Hello user. You age ${age} 10, How are you?`;

console.log(ageText);

// Math

//випадкове число - повертає число від 0 - 1
console.log(Math.floor(Math.random() * 100));

const now = new Date();// поточна дата
const date = new Date(2020, 6, 5);// місяць передається індексом 0 - січень
console.log(now);

console.log(now.getDay()); // день тижня
console.log(now.getDate());// число місяця