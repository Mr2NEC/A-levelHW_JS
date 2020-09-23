// task 1
function getImgSrcAndImgRotate() {
    let srcImg = prompt('Укажите ссылку на картинку', '');
    // let rotateImg = prompt('Укажите градус поворота картинки', '');
    function validateImgSrc(vSrcImg) {
        let http = 'http://';
        let https = 'https://';
        let splits = vSrcImg.split('');
        for (let i = 0; i < http.length; i++) {
            if (splits[i] === http[i]) {
            } else if ((http = https)) {
                if (splits[i] !== https[i]) {
                    getImgSrcAndImgRotate(alert('Это не ссылка!'));
                }
            }
        }
        for (let i = 0; i < splits.length; i++) {
            if (splits[i] === ' ') {
                getImgSrcAndImgRotate(alert('Удалите пробел с ссылки!'));
            }
        }
        if (splits.length <= 15) {
            getImgSrcAndImgRotate(alert('Это не ссылка!'));
        } else {
            return addImgSrc();
        }
        function addImgSrc() {
            let ImgSrc = document.querySelector('#myimg');
            ImgSrc.setAttribute('src', vSrcImg);
            console.log(ImgSrc);
        }
    }
    function validateImgRotate(vRotateImg) {}
    validateImgSrc(srcImg);
    // validateImgRotate(rotateImg);
}
getImgSrcAndImgRotate();
