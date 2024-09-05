'use strict';



let name = 'джон';
let admin = name;
alert(admin)


let nazv = prompt('Введите название города', 'Москва');
let obraz = prompt('Введите год образования города', '2000');
let nasel = prompt('Введите количество населения города', '10');
let nast = '2024'-obraz;

alert(`Городу ${nazv} исполнилось ${nast} лет с момента образования. Населения -  ${nasel} количество человек`);

let radius = prompt('Введите радиус', '10');
let plosh = Math.PI * (radius**2);
alert(plosh);

let chislo1 = prompt('Введите первое число', '5');
let chislo2 = prompt('Введите второе число', '4');
alert(`Сумма ${chislo1 + chislo2} `);
alert(`Разность ${chislo1 - chislo2} `);
alert(`Частное ${chislo1 / chislo2} `);
alert(`Произведение ${chislo1 * chislo2} `);



