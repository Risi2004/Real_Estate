let signin = document.querySelector(".sign__in")
let btn1 = document.querySelector(".navbar__section__two__btn1")
let btn2 = document.querySelector(".sign__in__btn1")


btn1.addEventListener("click",function(){
    window.location.href = "login.html"
})
btn2.addEventListener("click",function(){
    signin.style.display = "none"
})