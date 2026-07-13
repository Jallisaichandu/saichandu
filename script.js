// MOBILE MENU

const menu = document.getElementById("mobileMenu");

function toggleMenu(){

    menu.classList.toggle("show");

}


// CLOSE MENU AFTER CLICKING LINKS

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show");

    });

});




// ACTIVE NAVBAR WHILE SCROLLING

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });
    // EMAILJS

emailjs.init("*********************");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
      "service_*********",
      "template_*********",
      this
    )
    .then(() => {

      alert("Message Sent Successfully ✅");

      this.reset();

    })
    .catch((error) => {

      console.log(error);
    
        alert("Failed to send message. Please try again later. ❌");

    });

});

});