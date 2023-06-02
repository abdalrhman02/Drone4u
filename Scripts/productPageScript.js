let mainImg = document.getElementById("mainImg");
let ulImg = document.getElementById("allImgs");

ulImg.addEventListener("click", (e) => {
    ele = e.target;
    mainImg.setAttribute("src" , `${ele.src}`)
});



let minus = document.getElementById("less");
let count = document.getElementById("num");
let plus = document.getElementById("more");

let prNow = document.getElementById("priceNow");
let prBefore = document.getElementById("priceBefore");

let c = 1
plus.onclick = () => {
    c++
    count.innerHTML = c;
    prNow.innerHTML = +prNow.dataset.price * parseInt(count.innerHTML)
}

minus.onclick = () => {
    if( c === 1 ) {
        minus.style.opacity = "0.5"
        return
    }

    c--;
    count.innerHTML = c;
    prNow.innerHTML = +prNow.dataset.price * parseInt(count.innerHTML)
}