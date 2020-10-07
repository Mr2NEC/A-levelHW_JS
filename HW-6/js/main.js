let SomePosts = function getSomePosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts/';
    return function (index) {
        if (isNaN(index)) {
            index = '';
        }

        fetch(url + index)
            .then((response) => response.json())
            .then((json) => createMassegeElem(json))
            .then(() => createButtonElem());
    };
};

SomePosts()(2);

let wrapperElem = document.querySelector('#wrapper');

function createMassegeElem(json) {
    console.log(json);
    let bodyMassege = document.createElement('div');
    bodyMassege.style.cssText =
        'width: 500px; padding: 10px; background: #00FFFF; display: flex; align-items: center; flex-direction: column; color: white';
    wrapperElem.appendChild(bodyMassege);
    let massegeTitle = document.createElement('div');
    massegeTitle.style.cssText =
        'width: 400px; border: 2px solid white; margin: 10px; padding: 10px; background: #00AAFF;';
    massegeTitle.innerText = json.title;
    bodyMassege.appendChild(massegeTitle);
    let massegeBody = document.createElement('div');
    massegeBody.style.cssText =
        'width: 400px; border: 2px solid white; margin: 10px; padding: 10px; background: #00AAFF;';
    massegeBody.innerText = json.body;
    bodyMassege.appendChild(massegeBody);
}

function createButtonElem() {
    let buttonElem = document.createElement('button');

    buttonElem.style.cssText = 'width: 100px; height: 50px; margin-top: 20px;';
    buttonElem.innerText = 'getData';

    wrapperElem.appendChild(buttonElem);
}
