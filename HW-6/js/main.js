let wrapperElem = document.querySelector("#wrapper");

let bodyMassege = document.createElement("div");
bodyMassege.style.cssText =
    "width: 500px; padding: 10px; background: #00FFFF; display: flex; align-items: center; flex-direction: column; color: white";
bodyMassege.id = "bodyMassege";
wrapperElem.appendChild(bodyMassege);

let SomePosts = function getSomePosts() {
    let url = "https://jsonplaceholder.typicode.com/posts/";
    return function (index) {
        if (isNaN(index)) {
            index = "";
        }

        fetch(url + index)
            .then((response) => response.json())
            .then((json) => getMassegeElem(json));
    };
};

SomePosts()(1);

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

function createButtonElem() {
    let buttonElem = document.createElement("button");

    buttonElem.style.cssText = "width: 100px; height: 50px; margin-top: 20px;";
    buttonElem.innerText = "getData";

    wrapperElem.appendChild(buttonElem);
}
createButtonElem();
