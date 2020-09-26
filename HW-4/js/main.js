// task 1

function task_1() {
    let ImgSrc;
    let ImgRotate;

    function getAndValidateImgSrc() {
        let clientSrcImg = prompt("Введите ссылку на картинку", "");

        let re1 = /^(https?:\/\/)+([^\s]+(?=\.(jpg|gif|png))\.\2)/;
        let re2 = /\s/;

        if (re1.test(clientSrcImg) === false) {
            return false;
        } else {
            if (re2.test(clientSrcImg) !== false) {
                return false;
            } else return clientSrcImg;
        }
    }

    do {
        ImgSrc = getAndValidateImgSrc();
    } while (ImgSrc === false);

    function getAndValidateImgRotate() {
        let clientRotateImg = prompt("Введите градус поворота картинки", "");
        let parse = parseInt(clientRotateImg);
        if (isNaN(parse)) {
            return false;
        } else return parse;
    }

    do {
        ImgRotate = getAndValidateImgRotate();
    } while (ImgRotate === false);

    let ImgSrcHtml = document.querySelector("#myimg");
    ImgSrcHtml.setAttribute("src", ImgSrc);

    function addElement() {
        let mainElem = document.querySelector("#main");
        let imgElem = document.createElement("img");
        imgElem.src = ImgSrc;
        imgElem.alt = "";
        imgElem.style.cssText = `transform:rotate(${ImgRotate}deg); width: 100px`;
        mainElem.appendChild(imgElem);
    }

    function addImgToHtml(fun) {
        let rotate = ImgRotate;
        for (let i = 0; i < 5; i++) {
            fun();
            ImgRotate += rotate;
        }
    }
    addImgToHtml(addElement);
}
task_1();

// task 2

function task_2() {
    function getTagId() {
        let castomTagId = prompt("Введите id тега", "");
        return castomTagId;
    }

    let tagId = getTagId();

    function deleteTag(fTagId) {
        let TagIdHtml = document.querySelector("#" + fTagId);
        TagIdHtml !== null
            ? TagIdHtml.remove()
            : alert(
                  "Нельзя удалить этот тег, потому что в вёрстке этого тега нету."
              );
    }
    deleteTag(tagId);
}
task_2();

// task 3

function task_3() {
    function createTable(content) {
        let mainElem = document.querySelector("#main");
        let tableElem = document.createElement("table");
        mainElem.appendChild(tableElem);
        content();
    }

    function writeInTable() {
        let tableElem = document.querySelector("table");
        for (let i = 1; i < 10; i++) {
            let trElem = document.createElement("tr");
            trElem.id = `tr${i}`;
            tableElem.appendChild(trElem);

            for (let j = 1; j < 10; j++) {
                let trid = document.querySelector("#tr" + i);
                let tdElem = document.createElement("td");
                tdElem.style = "border: 1px solid black; padding: 5px;";
                tdElem.innerText = `${j} * ${i} = ${i * j}`;
                trid.appendChild(tdElem);
            }
        }
    }
    createTable(writeInTable);
}
task_3();

// task 4

function task_4() {
    let nullElem = null;

    let tableElem = document.querySelector("table");

    tableElem.onmouseover = function (event) {
        if (nullElem) return;
        let target = event.target.closest("td");
        if (!target) return;
        if (!tableElem.contains(target)) return;
        nullElem = target;
        target.style.background = "#3366CC";
    };

    tableElem.onmouseout = function (event) {
        if (!nullElem) return;
        let relatedTarget = event.relatedTarget;
        while (relatedTarget) {
            if (relatedTarget == nullElem) return;

            relatedTarget = relatedTarget.parentNode;
        }
        nullElem.style.background = "";
        nullElem = null;
    };
}
task_4();

// task 5

function task_5() {
    let mainElem = document.querySelector("#main");

    function createInput() {
        let createInputElem = document.createElement("input");
        createInputElem.type = "number";
        mainElem.appendChild(createInputElem);
    }

    function createButton() {
        let createButtonElem = document.createElement("button");
        createButtonElem.type = "submit";
        createButtonElem.innerText = "Submit";
        mainElem.appendChild(createButtonElem);
    }
    function createDiv() {
        let createDivElem = document.createElement("div");
        createDivElem.id = "result";
        mainElem.appendChild(createDivElem);
    }

    function addElem(fun, amount) {
        for (i = 0; i < amount; i++) {
            fun();
        }
    }
    addElem(createInput, 2);
    addElem(createButton, 1);
    createDiv();

    function getInputValueSum() {
        let input = document.querySelectorAll("input");
        let valueSum = null;
        for (let i of input) {
            valueSum += parseInt(i.value);
        }
        return valueSum;
    }

    let btn = document.querySelector("button");
    btn.onclick = function () {
        let result = getInputValueSum();
        let div = document.querySelector("#result");
        if (!isNaN(result)) {
            div.innerText = result;
        } else {
            div.innerText = "Введите корректные данные.";
        }
    };
}
task_5();

// task 6

function task_6() {
    let persons = [
        {
            name: "Vasyan",
            age: 21,
        },
        {
            name: "Kolyan",
            age: 22,
        },
        {
            name: "Mashka",
            age: 17,
        },
    ];

    function personsSortBy(stringNameOrAge) {
        if (stringNameOrAge === "name") {
            persons.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
        } else if (stringNameOrAge === "age") {
            persons.sort(function (a, b) {
                return a.age - b.age;
            });
        } else {
            alert("Параметр задан неверно!");
        }
    }
    personsSortBy("age");

    console.log(persons);
}
task_6();

// task 7

function task_7() {
    let myArray = [
        " hello darkness   my old   friend ",
        " i've come to   talk  with   you again    ",
    ];
    function validateSpaces(Arr) {
        let validArray = Arr.map(function (str) {
            let re = /\s\s/;
            do {
                str = str.replace(re, " ");
            } while (re.test(str) === true);
            return str;
        });
        return validArray;
    }
    let newArray = validateSpaces(myArray);
    console.log(newArray);
}
task_7();

// task 8

function task_8() {
    let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

    function isPrime(num) {
        if (num <= 1) return false;
        else if (num === 2) return true;
        else {
            for (let i = 2; i < num; i++) if (num % i === 0) return false;
            return true;
        }
    }

    console.log(array.filter(isPrime)); // [53, 2, 5, 7, 31, 97, 17]

    function filter(array, cb) {
        let newArray = [];
        function createNewArray() {
            for (let i of array) {
                if (cb(i) === true) {
                    newArray.push(i);
                }
            }
        }
        createNewArray();
        return newArray;
    }
    let newArray = filter(array, isPrime);
    console.log(newArray);
}
task_8();
