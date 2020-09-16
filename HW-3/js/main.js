function createArrPersons() {
    //Задание 1
    var persons = [
        {
            name: "Ivan",
            surname: "Ivanov",
            fatherName: "Ivanovich",
        },
    ];
    var person1 = {
        name: "Oleg",
        surname: "Olegov",
        fatherName: "Olegovich",
    };
    var person2 = {
        name: "Nikolay",
        surname: "Nikolaev",
        fatherName: "Nikolaevich",
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
        persons[i]["fullName"] = `${persons[i].name} ${persons[i].fatherName}`;
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
    str += "</table>";
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

function intRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
var a;
var b;
function enterNumbers() {
    function enterA() {
        var aCustom = prompt("Введите число a", "0");
        a = parseInt(aCustom);
        if (isNaN(a)) {
            alert("Число введено не верно!");
            enterA();
        }
    }
    enterA();
    function enterB() {
        var bCustom = prompt("Введите число b", "1");
        b = parseInt(bCustom);
        if (b <= a) {
            alert("Введеное число должно быть больше a!");
            enterB();
        } else if (isNaN(b)) {
            b = a;
            console.log(intRandom(0, (b = a)));
        } else console.log(intRandom(a, b));
    }
    enterB();
}
enterNumbers();
