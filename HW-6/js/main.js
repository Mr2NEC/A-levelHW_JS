function HW_6() {

    let wrapperElem = document.querySelector("#wrapper");

    let bodyMassege = document.createElement("div");
    bodyMassege.style.cssText =
        "width: 500px; padding: 10px; background: #00FFFF; display: flex; align-items: center; flex-direction: column; color: white";
    wrapperElem.appendChild(bodyMassege);

    let timer = true;

    let counter = makeCounter();

    function makeCounter () {
        let i = 1;
            return function () {
                return i++;
            };
    };

    function createSpanError (){
        let spanElem = document.createElement("span");
        spanElem.innerText = 'Chef, it is all gone !!!!';
        bodyMassege.appendChild(spanElem);
    }

    // Task 2

    let getPosts = function () {
        let index = counter()
        return () => fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
            .then((response) =>        
            {if(!response.ok){
                // Task 6 
                throw new Error('Не ОК')
            }else {return response.json()}
        })
            .then((json) => getMassegeElem(json))
            .catch(e => {
                createSpanError(); 
                getFailPosts(index);
            });
        };  

    let postPosts = function () {
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
            .then((json) => console.log(json))
            .catch((e) => {
                console.log('Error: ' + e.message);
            });
    };
    postPosts();

    let putPosts = function () {
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
            .then((json) => console.log(json))
            .catch((e) => {
                console.log('Error: ' + e.message);
                
            });
    };
    putPosts();

    let patchPosts = function () {
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
            .then((json) => console.log(json))
            .catch((e) => {
                console.log('Error: ' + e.message);   
            });
    };
    patchPosts();

    let deletePosts = function () {
        fetch('https://jsonplaceholder.typicode.com/posts/100', {
            method: 'DELETE',
        })
        .catch((e) => {
            console.log('Error: ' + e.message);
        });
    }
    deletePosts()

    // Task 3

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

    // Task 4

    function createbuttonElem() {
        let buttonElem = document.createElement("button");
        buttonElem.id = "btn"
        buttonElem.style.cssText = "width: 100px; height: 50px; margin-top: 20px;";
        buttonElem.innerText = "getData";

        wrapperElem.appendChild(buttonElem);

    // Task 5

        buttonElem.addEventListener("click", () => {
            if (timer === true) {
                getPosts()()
                timer = false
                setTimeout( () => {
                    timer = true
                }, 3 * 1000)
            }
        });
    }
    createbuttonElem();

    // Task 7

    function getFailPosts(index) {
        let button = document.querySelector('#btn')
        button.setAttribute("disabled", "disabled");
        function getFailPosts () {
            fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
            .then((response) => 
            {if(!response.ok){
                throw new Error('Не ОК')
            }else {return response.json()}
        })
            .then((json) => { 
                button.removeAttribute("disabled");
                getMassegeElem(json);})
            .catch(function () {
                return setTimeout(getFailPosts, 10 * 1000)
            } )  
        }  
        setTimeout(getFailPosts, 10 * 1000)
    }
}
HW_6()