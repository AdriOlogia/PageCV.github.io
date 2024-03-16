import Conocimientos from '../helpers/Conocimientos.json'
import ScrollReveal from 'scrollreveal'

let skill_box = document.getElementById("skills-content")

for (const skills in Conocimientos) {
    if (Conocimientos.hasOwnProperty(skills)) {
        skill_box.innerHTML += `
        <div class="col-lg-2 m-lg-4 col-md-3 m-md-4 col-sm-3 m-sm-2 col-4 m-2 p-2 cards">
            <img src="${Conocimientos[skills].img}" alt="${skills}">
        </div>
        `
    }
}

const node_content_section3 = document.querySelector(".content-section-3")
const node_img_section3 = node_content_section3.querySelectorAll("img")

ScrollReveal().reveal(node_img_section3, {
    delay: 700,
    reset: true,
    easing: 'ease-in',
    origin: 'bottom',
    rotate: {
        x: 20,
        z: 20
    }

});