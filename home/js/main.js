let scrollTop = document.querySelector('.scroll-top');

window.addEventListener("scroll", function(){
    scrollTop.classList.toggle('scroll-active', scrollY > 600)
});

let menuStiky = document.querySelector('.menu');

window.addEventListener("scroll", function(){
    menuStiky.classList.toggle('stiky', scrollY > 100)
});

document.querySelector('.web-section').addEventListener("click", function(){
    document.querySelector('.web-section').classList.toggle('pitem-active');
    document.querySelector('.game-section').classList.remove('pitem-active');
    document.querySelector('.temp-section').classList.remove('pitem-active');
});
document.querySelector('.game-section').addEventListener("click", function(){
    document.querySelector('.game-section').classList.toggle('pitem-active');
    document.querySelector('.web-section').classList.remove('pitem-active');
    document.querySelector('.temp-section').classList.remove('pitem-active');
});
document.querySelector('.temp-section').addEventListener("click", function(){
    document.querySelector('.temp-section').classList.toggle('pitem-active');
    document.querySelector('.web-section').classList.remove('pitem-active');
    document.querySelector('.game-section').classList.remove('pitem-active');
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


document.querySelector('#web-logo').addEventListener("mouseenter", function(){
    document.querySelector('#web-icon').classList.add('prom-active');
});
document.querySelector('#web-icon').addEventListener("mouseleave", function(){
    document.querySelector('#web-icon').classList.remove('prom-active');
});

document.querySelector('#game-logo').addEventListener("mouseenter", function(){
    document.querySelector('#game-icon').classList.add('prom-active');
});
document.querySelector('#game-icon').addEventListener("mouseleave", function(){
    document.querySelector('#game-icon').classList.remove('prom-active');
});

document.querySelector('#temp-logo').addEventListener("mouseenter", function(){
    document.querySelector('#temp-icon').classList.add('prom-active');
});
document.querySelector('#temp-icon').addEventListener("mouseleave", function(){
    document.querySelector('#temp-icon').classList.remove('prom-active');
});

window.addEventListener("scroll", function(){
    document.querySelector('#web-icon').classList.remove('prom-active', this.scrollY > 100)
});
window.addEventListener("scroll", function(){
    document.querySelector('#game-icon').classList.remove('prom-active', this.scrollY > 100)
});
window.addEventListener("scroll", function(){
    document.querySelector('#temp-icon').classList.remove('prom-active', this.scrollY > 100)
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
};

function Emailvalidation(){
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
    }else{
        form.classList.remove("valid")
        form.classList.add("invalid")
    }
};




