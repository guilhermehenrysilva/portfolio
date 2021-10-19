/*JS - IMG OPTIONS*/
/*Seta a imgOptions Padrão*/
function setImgOptions() {
    document.getElementById("imgOptions").src = "img/options/homeOptions.png";
}

/*Seta a img :hover - AboutMe*/
function setImgAboutMe() {
    document.getElementById("imgOptions").src = "img/options/aboutMeSelect.png";
}

/*Seta a img :hover - Projects*/
function setImgProjects() {
    document.getElementById("imgOptions").src = "img/options/projectsSelect.png";
}
/*END*/
 
/*Effect Hologram*/
let bg = document.getElementById('homeOptions');
let count = 20;
for (let i = 0; i < count; i++) {
    let glitchBox = document.createElement('div');
    glitchBox.className = 'box';
    bg.appendChild(glitchBox);
}

setInterval(function () {
    let glitch = document.getElementsByClassName('box');
    for (let i = 0; i < glitch.length; i++) {
        glitch[i].style.left = Math.floor(Math.random() * 500) + 'vw';
        glitch[i].style.top = Math.floor(Math.random() * 500) + 'vh';
        glitch[i].style.width = Math.floor(Math.random() * 900) + 'px';
        glitch[i].style.height = Math.floor(Math.random() * 10) + 'px';

        glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + 'px';
    }
}, 30)
/*END*/
