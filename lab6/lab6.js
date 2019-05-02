window.onload = function (ev) {
    var imgs = document.getElementById("thumbnails").getElementsByTagName("img");
    var bigImg = document.getElementById("featured");

    imgs[0].onclick = function () {
        bigImg.getElementsByTagName("img")[0].src = "images/medium/5855774224.jpg";
        bigImg.getElementsByTagName("img")[0].title = "Battle";
        bigImg.getElementsByTagName("figcaption")[0].innerHTML = "Battle";
    }

    imgs[1].onclick = function () {
        bigImg.getElementsByTagName("img")[0].src = "images/medium/5856697109.jpg";
        bigImg.getElementsByTagName("img")[0].title = "Luneburg";
        bigImg.getElementsByTagName("figcaption")[0].innerHTML = "Luneburg";
    }

    imgs[2].onclick = function () {
        bigImg.getElementsByTagName("img")[0].src = "images/medium/6119130918.jpg";
        bigImg.getElementsByTagName("img")[0].title = "Bermuda";
        bigImg.getElementsByTagName("figcaption")[0].innerHTML = "Bermuda";
    }

    imgs[3].onclick = function () {
        bigImg.getElementsByTagName("img")[0].src = "images/medium/8711645510.jpg";
        bigImg.getElementsByTagName("img")[0].title = "Athens";
        bigImg.getElementsByTagName("figcaption")[0].innerHTML = "Athens";
    }

    imgs[4].onclick = function () {
        bigImg.getElementsByTagName("img")[0].src = "images/medium/9504449928.jpg";
        bigImg.getElementsByTagName("img")[0].title = "Florence";
        bigImg.getElementsByTagName("figcaption")[0].innerHTML = "Florence";
    }

    bigImg.onmouseover = function () {
        bigImg.getElementsByTagName("figcaption")[0].style.opacity = "0.8";
        bigImg.getElementsByTagName("figcaption")[0].style.transitionDuration = "1000ms";
    }

    bigImg.onmouseout = function () {
        bigImg.getElementsByTagName("figcaption")[0].style.opacity = "0";
        bigImg.getElementsByTagName("figcaption")[0].style.transitionDuration = "1000ms";
    }
}
