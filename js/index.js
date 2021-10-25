/*JS - IMG OPTIONS*/
/*Seta a imgOptions Padrão*/
let escolhendo = false;
function setImgDefault() {
    document.getElementById("imgOptions").src = "img/options/homeOptions.png";
    escolhendo = false;
}

/*Seta a img :hover - AboutMe*/
function setImgAboutMe() {
    document.getElementById("imgOptions").src = "img/options/aboutMeSelect.png";
    escolhendo = true;
}

/*Seta a img :hover - Projects*/
function setImgProjects() {
    document.getElementById("imgOptions").src = "img/options/projectsSelect.png";
    escolhendo = true;
}

/*Effect Img Btn Colors*/
let contador = 1;
let crescente = true;
if (!escolhendo) {
    setInterval(function effectImg() {

        while (crescente && !escolhendo) {
            document.getElementById("imgOptions").src = "img/effect/homeOptions-" + contador + ".png";
            contador++;
            if (contador == 21) {
                crescente = false;
                contador = 20;
            }
            break;
        }

        while (!crescente && !escolhendo) {
            document.getElementById("imgOptions").src = "img/effect/homeOptions-" + contador + ".png";
            contador--;
            if (contador == 0) {
                crescente = true;
                contador = 1;
            }
            break;
        }
    }, 135)
}

/*Effect Div Hologram*/
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





