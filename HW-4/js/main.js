// task 1

function task_1() {
    let ImgSrc;
    let ImgRotate;

    function getAndValidateImgSrc() {
        let clientSrcImg = prompt('Введите ссылку на картинку', '');

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
        let clientRotateImg = prompt('Введите градус поворота картинки', '');
        let parse = parseInt(clientRotateImg);
        if (isNaN(parse)) {
            return false;
        } else return parse;
    }

    do {
        ImgRotate = getAndValidateImgRotate();
    } while (ImgRotate === false);

    let ImgSrcHtml = document.querySelector('#myimg');
    ImgSrcHtml.setAttribute('src', ImgSrc);

    function addElement() {
        let mainElem = document.querySelector('#main');
        let imgElem = document.createElement('img');
        imgElem.src = ImgSrc;
        imgElem.alt = '';
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
        let castomTagId = prompt('Введите id тега', '');
        return castomTagId;
    }

    let tagId = getTagId();

    function deleteTag(fTagId) {
        let TagIdHtml = document.querySelector('#' + fTagId);
        TagIdHtml !== null
            ? TagIdHtml.remove()
            : alert(
                  'Нельзя удалить этот тег, потому что в вёрстке этого тега нету.'
              );
    }
    deleteTag(tagId);
}
task_2();

// task 3

function task_3() {
    function createTable(content) {
        let mainElem = document.querySelector('#main');
        let tableElem = document.createElement('table');
        mainElem.appendChild(tableElem);
        content();
    }

    function writeInTable() {
        let tableElem = document.querySelector('table');
        for (let i = 1; i < 10; i++) {
            let trElem = document.createElement('tr');
            trElem.id = `tr${i}`;
            tableElem.appendChild(trElem);

            for (let j = 1; j < 10; j++) {
                let trid = document.querySelector('#tr' + i);
                let tdElem = document.createElement('td');
                tdElem.style = 'border: 1px solid black; padding: 5px;';
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
    let currentElem = null;

    let tableElem = document.querySelector('table');

    tableElem.onmouseover = function (event) {
        if (currentElem) return;
        let target = event.target.closest('td');
        if (!target) return;
        if (!tableElem.contains(target)) return;
        currentElem = target;
        target.style.background = '#3366CC';
    };

    tableElem.onmouseout = function (event) {
        if (!currentElem) return;
        let relatedTarget = event.relatedTarget;
        while (relatedTarget) {
            if (relatedTarget == currentElem) return;

            relatedTarget = relatedTarget.parentNode;
        }
        currentElem.style.background = '';
        currentElem = null;
    };
}
task_4();
