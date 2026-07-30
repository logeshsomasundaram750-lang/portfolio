// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ================================
// Scroll Reveal Animation
// ================================

const cards = document.querySelectorAll(".card, .project");

function reveal() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < trigger){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ================================
// Typing Effect
// ================================

const text = [
    "Computer Science Engineer",
    "Java Developer",
    "Python Programmer",
    "Full Stack Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero h3").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            index = 0;
            count++;
            type();

        },1500);

    }
    else{

        setTimeout(type,100);

    }

}

type();


// ================================
// Active Section Highlight
// ================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

});


// ================================
// Sidebar Animation
// ================================

const sidebarItems = document.querySelectorAll(".sidebar li");

sidebarItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform = "translateX(8px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform = "translateX(0px)";

    });

});


// ================================
// Project Hover Effect
// ================================

const projects = document.querySelectorAll(".project");

projects.forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";

    });

    project.addEventListener("mouseleave",()=>{

        project.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";

    });

});


// ================================
// Welcome Message
// ================================

window.onload = function(){

    console.log("Welcome to Logesh S Portfolio");

};


// ================================
// Scroll To Top Button
// ================================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#274c77";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }
    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ================================
// Hero Fade In
// ================================

const hero = document.querySelector(".hero");

hero.style.opacity = "0";

setTimeout(()=>{

    hero.style.transition = "1.5s";
    hero.style.opacity = "1";

},300);


// ================================
// Footer Year Auto Update
// ================================

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Logesh S | Portfolio. All Rights Reserved.`;