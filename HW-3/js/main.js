function createArrPersons() {
    //Задание 1
    var persons = [
        {
            name: 'Ivan',
            surname: 'Ivanov',
            fatherName: 'Ivanovich',
        },
    ];
    var person1 = {
        name: 'Oleg',
        surname: 'Olegov',
        fatherName: 'Olegovich',
    };
    var person2 = {
        name: 'Nikolay',
        surname: 'Nikolaev',
        fatherName: 'Nikolaevich',
    };

    persons.push(person1, person2);
    console.log(persons);

    //Задание 2

    for (var i = 0; i < persons.length; i++) {
        console.log(persons[i]);
    }

    //Задание 3

    for (var i = 0; i < persons.length; i++) {
        console.log(`${persons[i].name} ${persons[i].surname}`);
    }

    //Задание 4

    for (var i = 0; i < persons.length; i++) {
        persons[i]['fullName'] = `${persons[i].name} ${persons[i].fatherName}`;
        console.log(persons[i]);
    }

    //Задание 5

    var jsonStrPersons = JSON.stringify(persons);
    console.log(jsonStrPersons);

    //Задание 6
    var jsonResponse =
        '{"name": "Anatoliy", "surname": "Anatoli", "fatherName": "Anatolievich", "fullName": "Anatoliy Anatolievich"}';

    var jsonParPersons = JSON.parse(jsonResponse);
    persons.push(jsonParPersons);
    console.log(persons);

    //Задание 7

    var str = "<table border='1'>";
    for (let i = 0; i < persons.length; i++) {
        str += `<tr><td>${persons[i].name}</td><td>${persons[i].surname}</td><td>${persons[i].fatherName}</td><td>${persons[i].fullName}</td></tr>`;
    }
    str += '</table>';
    document.write(str);
}
createArrPersons();

//Задание 8

function avg2(a = 1, b = 1) {
    return (a + b) / 2;
}
console.log(avg2(5, 6));

//Задание 9

function sum3(a = 0, b = 0, c = 0) {
    return a + b + c;
}
console.log(sum3(5, 6));

//Задание 10

function enterNumber(text) {
    var numberCustom = prompt(`Введите ${text} число `, '0');
    number = parseInt(numberCustom);
    return number;
}

function genRndInt(min, max) {
    if (isNaN(min) && isNaN(max)) {
        min = 0;
        max = 1;
    }
    if (isNaN(max) || max === null) {
        max = 0;
    }
    if (min > max) {
        var c = min;
        min = max;
        max = c;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function intRandom() {
    var minNumber, maxNumber;
    do {
        minNumber = enterNumber('минимальное');
        maxNumber = enterNumber('максимальное');
        if (minNumber > maxNumber) {
            alert(`Максимальное число должно быть больше ${minNumber}!`);
        }
    } while (minNumber > maxNumber);

    var rndInt = genRndInt(minNumber, maxNumber);
    console.log(`Случайное число ${rndInt}`);
}
intRandom();
