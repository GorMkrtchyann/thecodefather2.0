let web = document.querySelector('#web');
let game = document.querySelector('#game');

let webSec = document.querySelector('.web');
let gameSec = document.querySelector('.game');

web.addEventListener("click", function(){
    game.classList.remove('but-active');
    web.classList.add('but-active');

    gameSec.style.display = 'none'
    webSec.style.display = 'block'
});

game.addEventListener("click", function(){
    web.classList.remove('but-active');
    game.classList.add('but-active');

    gameSec.style.display = 'block'
    webSec.style.display = 'none'
});

let scrollTop = document.querySelector('.scroll-top');

window.addEventListener("scroll", function(){
    scrollTop.classList.toggle('scroll-active', scrollY > 600)
});

let menuStiky = document.querySelector('.menu');

window.addEventListener("scroll", function(){
    menuStiky.classList.toggle('stiky', scrollY > 100)
});


let mobMenu = document.querySelector('.mob-menu');

mobMenu.addEventListener("click", function(){
    mobMenu.classList.toggle('mob-active')
});

window.addEventListener("scroll", function(){
    mobMenu.classList.remove('mob-active', this.scrollY > 200)
});

let li = document.querySelectorAll(".li");
let sec = document.querySelectorAll("section");

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("sec-active"));
    li[len].classList.add("sec-active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

let mobIcon = document.querySelectorAll('#mob');

function activeMobMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    mobIcon.forEach(ltx => ltx.classList.remove("mob-sec-active"));
    mobIcon[len].classList.add("mob-sec-active");
}
activeMobMenu();
window.addEventListener("scroll", activeMobMenu);

let linkGame = document.querySelector('#linkgame');
let linkWeb = document.querySelector('#linkweb');

linkWeb.addEventListener("click", function(){
    game.classList.remove('but-active');
    web.classList.add('but-active');

    gameSec.style.display = 'none'
    webSec.style.display = 'block'
});

linkGame.addEventListener("click", function(){
    web.classList.remove('but-active');
    game.classList.add('but-active');

    gameSec.style.display = 'block'
    webSec.style.display = 'none'
});

(function () {
    emailjs.init("user_Qz07KcIqlZNoyNuGl");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

        emailjs.send('service_srulwsk', 'template_3ddr04s', contactParams).then(function (res) {
            location.reload();
        })
}



