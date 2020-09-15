function arrPersons() {
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
arrPersons();
