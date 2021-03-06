// task_1

function task_1() {
    let headElem = document.querySelector('head');
    let styleElem = document.createElement('style');
    styleElem.textContent =
        '#wrapper {box-sizing:border-box;}.circleStyle {display: flex; justify-content:center; align-items: center; border-radius: 50%;}';
    headElem.appendChild(styleElem);

    function getAtr() {
        let widthElem = 320;
        let heightElem = widthElem;
        let mainElem = document.querySelector('#wrapper');
        let backgroundElem = ['green', 'yellow', 'blue', 'red'];
        for (let color of backgroundElem) {
            let circleElem = createСircle(widthElem, heightElem, color);
            mainElem.appendChild(circleElem);
            mainElem = circleElem;
            widthElem = widthElem / 2;
            heightElem = widthElem;
        }
    }
    getAtr();

    function createСircle(width, height, bgcolor) {
        circle = document.createElement('div');
        circle.classList.add('circleStyle');
        circle.style.cssText = `width: ${width}px; height: ${height}px; background: ${bgcolor}; `;
        return circle;
    }

    function playGame() {
        let circles = document.querySelectorAll('.circleStyle');

        let score = 0;
        let timer = false;

        for (let circle of circles) {
            circle.addEventListener('click', function (event) {
                if (this.style.width === '40px') {
                    score += 10;
                } else if (this.style.width === '80px') {
                    score += 8;
                } else if (this.style.width === '160px') {
                    score += 5;
                } else if (this.style.width === '320px') {
                    score += 2;
                }

                event.stopPropagation
                    ? event.stopPropagation()
                    : (event.cancelBubble = true);
            });

            circle.addEventListener('click', function (event) {
                if (timer === false) {
                    timer = true;
                    setTimeout(gameOver, 30000);
                }
            });
        }

        function gameOver() {
            alert(`The game is over, you score ${score} points.`);
            timer = false;
            score = 0;
        }
    }
    playGame();
}
task_1();

// task_2

function task_2() {
    function makeProfileTimer() {
        const START = new Date().getTime();
        alert('Замеряем время работы этого alert');
        const END = new Date().getTime();
        return function () {
            return `SecondWay: ${END - START}ms`;
        };
    }
    let timer = makeProfileTimer();
    alert(timer());
}
task_2();

// task_3

function task_3() {
    let result = countDown();
    function countDown() {
        let i = 5;
        return function () {
            if (i >= 0) {
                console.log(i--);
                setTimeout(result, 1000);
            } else {
                console.log('GO!');
            }
        };
    }
    result();
}
task_3();

// task_4

function task_4() {
    function myBind(func, context, ...rest) {
        return function (...args) {
            let id = Date.now().toString();

            context[id] = func;
            let result = context[id](...rest.concat(args));

            delete context[id];

            return result;
        };
    }
}
task_4();
