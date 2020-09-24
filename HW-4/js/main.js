// task 1
function getAndRotate() {
    let ImgSrc;
    let ImgRotate;
    function getValidateImgSrc() {
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
        ImgSrc = getValidateImgSrc();
    } while (ImgSrc === false);

    function getValidateImgRotate() {
        let clientRotateImg = prompt('Введите градус поворота картинки', '');
        let parse = parseInt(clientRotateImg);
        if (isNaN(parse)) {
            return false;
        } else return parse;
    }

    do {
        ImgRotate = getValidateImgRotate();
    } while (ImgRotate === false);

    let getImgSrc = document.querySelector('#myimg');
    getImgSrc.setAttribute('src', ImgSrc);
}
getAndRotate();
