import Conocimientos from '../helpers/Conocimientos.json'

let skill_box = document.getElementById("skills-content")


for (const skills in Conocimientos) {
    if (Conocimientos.hasOwnProperty(skills)) {
        console.log(Conocimientos[skills].img)
    }

    skill_box.innerHTML = `
        <div class="col-lg-2 m-lg-4 col-md-3 m-md-4 col-sm-3 m-sm-2 col-4 m-2 p-2 cards">
            <img src="${Conocimientos[skills].img}">${skills}</p>
        </div>`
}