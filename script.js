
/* Go to top the page */
let goUp = document.getElementById("goUp");

window.onscroll = function() {
    if(window.scrollY >= 1200){
        goUp.style.display = "block"
    } else {
        goUp.style.display = "none"
    }
}

goUp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}



/* This function for button in home page */
function goDown() {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    })
};



let emailInp = document.getElementById("emailInp");
let submitEm = document.getElementById("submitEm");
let errMsg = document.getElementById("errMsg");

let notiDiv = document.getElementById("notificationDiv");
let notiTitle = document.getElementById("notititle");
let notiTxt = document.getElementById("txt");
let okBtn = document.getElementById("okBtn");

submitEm.onclick = (e) => {
    e.preventDefault();

    let emailInpVal = emailInp.value
    if (emailInpVal.length === 0) {
        errMsg.innerHTML = "can't be empty"
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInpVal) === false) {
        errMsg.innerHTML = "not correct email"
    } else {
        errMsg.innerHTML = ""
    }

    // to be sure that the user will type just an email
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInpVal)) {
        notiDiv.style.display = "block";
        notiTitle.innerHTML = "Thank You For Subscribing!";
        notiTxt.innerHTML = "We hope you enjoy with us"
    }

}

okBtn.onclick = () => {
    notiDiv.style.display = "none";
}