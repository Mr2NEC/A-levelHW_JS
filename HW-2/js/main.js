function enterColor() {
    var customerColor = prompt("Введите цвет", "");
    var color = customerColor.toLowerCase();
    if (color === "red") {
        document.write(
            "<div style='background-color: red;'>красный</div>" +
                "<div style='background-color: black; color: white;'>черный</div>"
        );
    } else if (color === "black") {
        document.write(
            "<div style='background-color: black; color: white;'>черный</div>"
        );
    } else if (color === "blue") {
        document.write(
            "<div style='background-color: blue;'>синий</div>" +
                "<div style='background-color: green;'>зеленый</div>"
        );
    } else if (color === "green") {
        document.write("<div style='background-color: green;'>зеленый</div>");
    } else {
        document.write("<div style='background-color: gray;'>Я не понял</div>");
    }
}
enterColor();
function enterAge() {
    var age = prompt("Сколько Вам лет?", "");
    if (age >= 0 && age <= 100) {
    } else {
        console.log("Ошибка");
    }
}
enterAge();
function enterMonth() {
    var customerMonth = prompt(
        "Чтобы узнать количество дней в месяце, введите название месяца в формате: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec.",
        ""
    );
    var month = customerMonth.toLowerCase();
    switch (month) {
        case "apr":
        case "jun":
        case "sep":
        case "nov":
            document.write("<div>В месяце 30 дней</div>");
            break;
        case "feb":
            document.write("<div>В месяце 28 или 29 дней</div>");
            break;
        case "jan":
        case "mar":
        case "may":
        case "jul":
        case "aug":
        case "oct":
        case "dec":
            document.write("<div>В месяце 31 днень</div>");
            break;
        default:
            document.write("<div>Это не месяц</div>");
    }
}
enterMonth();
function enterAgeAndWeather() {
    var age = +prompt("Сколько вам лет?", "");
    var customerWeather = prompt("Какая сейчас на улице погода?", "");
    var weather = customerWeather.toLowerCase();
    var infoAge;
    if (age < 17) {
        infoAge = "Прив, чё там в школе?";
    } else if (age > 17 && age < 30) {
        infoAge = "Го бухать!";
    } else if (age > 30 && age < 45) {
        infoAge = "Приветствую, а шекели есть?";
    } else if (age > 45 && age < 60) {
        infoAge = "You're My Heart, You're My Soul... Приветствую.";
    } else if (age > 60 && age < 100) {
        infoAge = "Привет, дед!";
    } else if (age > 100) {
        infoAge = "Ты ещё жив?";
    } else {
        infoAge = "Чет ты не прав, но всё равно. Привет!!!";
    }

    function enterWeather() {
        if (weather === "warm" || weather === "sunny" || weather === "clear") {
            document.write(
                "<div>" +
                    infoAge +
                    " Ну можно и выйти. А может го в доту?</div>"
            );
        } else if (weather === "hot" || weather === "cool") {
            document.write(
                "<div>" + infoAge + " Может ну его на эту улицу?</div>"
            );
        } else if (weather === "rain" || weather === "frosty") {
            document.write("<div>" + infoAge + " Сиди дома.</div>");
        } else {
            document.write(
                "<div>" +
                    infoAge +
                    " Не знаю какая у тебя там погода, но лучше сиди дома.</div>"
            );
        }
    }
    enterWeather();
}
enterAgeAndWeather();
