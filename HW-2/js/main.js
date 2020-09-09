function enterColor() {
    var color = prompt('Введите цвет', '');
    var colorLowerCase = color.toLowerCase();
    if (colorLowerCase === 'red') {
        document.write(
            "<div style='background-color: red;'>красный</div>" +
                "<div style='background-color: black; color: white;'>черный</div>"
        );
    } else if (colorLowerCase === 'black') {
        document.write(
            "<div style='background-color: black; color: white;'>черный</div>"
        );
    } else if (colorLowerCase === 'blue') {
        document.write(
            "<div style='background-color: blue;'>синий</div>" +
                "<div style='background-color: green;'>зеленый</div>"
        );
    } else if (colorLowerCase === 'green') {
        document.write("<div style='background-color: green;'>зеленый</div>");
    } else {
        document.write("<div style='background-color: gray;'>Я не понял</div>");
    }
}
enterColor();
function enterAge() {
    var age = prompt('Сколько Вам лет?', '');
    if (age <= 0 || age <= 100) {
    } else {
        console.log('Ошибка');
    }
}
enterAge();
function enterMonth() {
    var month = prompt(
        'Чтобы узнать количество дней в месяце, введите название месяца в формате: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec.',
        ''
    );
    var monthLowerCase = month.toLowerCase();
    switch (monthLowerCase) {
        case 'apr':
        case 'jun':
        case 'sep':
        case 'nov':
            document.write('<div>В месяце 30 дней</div>');
            break;
        case 'feb':
            document.write('<div>В месяце 28 или 29 дней</div>');
            break;
        case 'jan':
        case 'mar':
        case 'may':
        case 'jul':
        case 'aug':
        case 'oct':
        case 'dec':
            document.write('<div>В месяце 31 днень</div>');
            break;
        default:
            document.write('<div>Это не месяц</div>');
    }
}
enterMonth();
function enterAgeAndWeather() {
    var age = +prompt('Сколько вам лет?', '');
    var weather = prompt('Какая сейчас на улице погода?', '');
    if (age < 17) {
        alert('Ghbdtn ');
    } else if (age > 18 && age < 30) {
        alert('молодежь');
    } else if (age > 30 && age < 45) {
        alert('зрелость');
    } else if (age > 45 && age < 60) {
        alert('закат');
    } else if (age > 60) {
        alert('Привет, дед!');
    } else {
        alert('Чет ты не прав, но всё равно. Привет!!!');
    }
    function enterWeather() {
        if (weather === 'warm') {
            alert('Ghbdtn ');
        } else if (weather === 'hot') {
            alert('Может ну его на эту улицу?');
        } else if (weather === 'cool') {
            alert('зрелость');
        } else if (weather === 'frosty') {
            alert('закат');
        } else if (weather === 'clear') {
            alert('закат');
        } else if (weather === 'stuffy') {
            alert('закат');
        } else if (weather === 'cloudy') {
            alert('закат');
        } else if (weather === 'sunny') {
            alert('Привет, дед!');
        } else {
            alert('Чет ты не прав, но всё равно. Привет!!!');
        }
    }
}
enterAgeAndWeather();
