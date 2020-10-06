let getSomeInfo = function (type, index) {
    if (isNaN(index)) {
        index = '';
    }

    fetch(`https://jsonplaceholder.typicode.com/${type}/${index}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
};

getSomeInfo('posts', 1);
getSomeInfo('comments', 1);
getSomeInfo('albums', 1);
getSomeInfo('photos', 1);
getSomeInfo('todos', 1);
getSomeInfo('users');
