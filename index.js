// задание 1
// let num1 = prompt('введите первое число');
// let num2 = prompt('введите второе число');

// alert(num1 * num2)

// задание 2 

// let num1 = prompt('введите имя');
// let num2 = prompt('введите фамилию');
// let num3 = prompt('введите возраст');

// alert(num1 + ' ' + num2 + ' ' + num3)

// задание 3 

// pol(prompt('введите пол'));                 
// function pol(p){
//     if (p != ""){
//         alert("Ваш пол " + p);
//     }
//     else {
//         alert("Ваш пол не определен");
//     }
// }

// задание 4

// ned(prompt('введите число от 1 до 7'));
// function ned(a){
//     switch (a){
//     case "1": 
//         alert("Понедельник");
//         break;
//     case "2": 
//         alert("Вторник");
//         break;
//     case "3": 
//         alert("Среда");
//         break;
//     case "4": 
//         alert("Четверг");
//         break;
//     case "5": 
//         alert("Пятница");
//         break;
//     case "6": 
//         alert("Суббота");
//         break;
//     case "7": 
//         alert("Воскресенье");
//         break;
//     }
// }

// задание 5

// for (i = 1; i < 100;i++){
//     if(i<18){
//         console.log(i + ' ребенок');
//     }else if(18 <= i && i <= 30){
//         console.log(i + ' молодой');
//     }else if(31 <= i && i <= 55){
//         console.log(i + ' зрелыый');
//     }else if(56 <= i){
//         console.log(i + ' старый');
//     }
// }

// Задание 6

// let nam = prompt("Как тебя зовут?");
// let lett = prompt("Сколько тебе лет?");
// let ega; 
// age(lett);
// function age(i) {
//     if(i<18){
//         return ega = 'ребенок';
//     }else if(18 <= i && i <= 30){
//         return ega = 'молодой';
//     }else if(31 <= i && i <= 55){
//         return ega = 'зрелый';
//     }else if(56 <= i){
//         return ega = 'старый';
//     }
// }

// alert(nam + " имеет возраст " + lett + " и он " + ega);

// задание 7

// function pp(){
//     alert('PRIVET MIR DON')
// }

// задание 8

// function zz(){
//    let div=  document.getElementById('dd');
//    div.value='dddd';
// }

// задание 9

// function zz(){
//     let div = document.getElementById('dd');
    
//     if(div.value != ''){
//         alert(div.value)
//     }else{
//         alert('Вы ничего не ввели в поле ')
//     }
// }

// задание 10

// let input = document.getElementById('ff');
// function asd(){
//     input.disabled = 1
// }

// function asd1(){
//     input.disabled = 0
// }

// задание 11

// let qwe = document.getElementById('hh');
// let inp = document.getElementById('dd')

// let i = 0

// function bb(){
//     if(i == 0){
//         qwe.style.display = "none"
//         inp.value = "Показать квадрат"
//         return i = 1
//     }
//     if(i == 1){
//         qwe.style.display = "block"
//         inp.value = "Скрыть квадрат"
//         return i = 0
//     }
// }

// Задание 12


// let qwe = document.getElementById('hh');

// qwe.addEventListener("mouseover", () => {
//     qwe.style.background = "green"
// })

// qwe.addEventListener("mouseout", () => {
//     qwe.style.background = "brown"
// })