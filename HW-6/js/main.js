let wrapperElem = document.querySelector("#wrapper");

let bodyMassege = document.createElement("div");
bodyMassege.style.cssText =
    "width: 500px; padding: 10px; background: #00FFFF; display: flex; align-items: center; flex-direction: column; color: white";
bodyMassege.id = "bodyMassege";
wrapperElem.appendChild(bodyMassege);

function createbuttonElem() {
    let buttonElem = document.createElement("button");

    buttonElem.style.cssText = "width: 100px; height: 50px; margin-top: 20px;";
    buttonElem.innerText = "getData";

    wrapperElem.appendChild(buttonElem);

    buttonElem.addEventListener("click", () => {
        Promise.all([someGet(), somePost(), somePut(), somePatch()]);
    });
}
createbuttonElem();

let someGet = function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => getMassegeElem(json));
};

function getMassegeElem(json) {
    console.log(json);
    for (i in json) {
        if (i === "title" || i === "body") {
            createElem(json[i]);
        }
    }
}

function createElem(text) {
    let massege = document.createElement("div");
    massege.style.cssText =
        "width: 400px; border: 2px solid white; margin: 10px; padding: 10px; background: #00AAFF;";
    massege.innerText = text;
    bodyMassege.appendChild(massege);
}

let somePost = function () {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "Lorem, ipsum dolor.",
            body:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, deserunt.",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};

let somePut = function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            body:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Enim voluptatum alias facere eius, provident ipsum.",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};

let somePatch = function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify({
            title: "Lorem",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};
