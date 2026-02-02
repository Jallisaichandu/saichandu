const content =document.getElementById("content");
const hero = document.querySelector(".hero");
const menu = document.getElementById("mobileMenu");

 
showhome();

function showhome(){
    hero.classList.add("show-image");     
    menu.classList.remove("show"); 
    content.innerHTML=`
   <h1>Hi ,<br>I'm <span>SAI CHANDU JALLI</span></h1>
    <h2>Developer</h2>
    <h3>MORE ABOUT ME</h3>
     <a href="SAI CHANDU JALLI-1.pdf" download class="download-btn">
        download CV
     </a>
    <div class="social-icons">
        <a href="https://github.com/Jallisaichandu " target="_blank">
        <i class ="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jalli-saichandu630/" target="_blank">
        <i class ="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/JalliSaich96089 " target="_blank">
        <i class ="fab fa-twitter"></i>
        </a>
   </div>
    `;

}
function showabout(){
    hero.classList.add("show-image");      
  menu.classList.remove("show"); 
    content.innerHTML=`
    <h2>About Me</h2>
    <p>Hello! I'm Sai Chandu Jalli, a passionate developer with a knack for creating innovative solutions. With a strong foundation in programming and a love for technology, I enjoy turning ideasinto reality through code. When I'm not coding, you can find me exploring new tech trends or working on personal projects to enhance my skills.</p> 
    `;
}

function showskills(){
    hero.classList.add("show-image");      
  menu.classList.remove("show"); 
    content.innerHTML=`
    <h2>My Skills</h2>
    <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js</li>
        <li>Python, java, </li>
        <li>Database Management (SQL,Excel, MongoDB)</li>
        <li>Version Control (Git)</li>                                                                                          
        <li>Tools: VS Code, GitHub, Servicenow</li>
    </ul>
    `;
}
function showworks(){
    hero.classList.add("show-image");      
  menu.classList.remove("show"); 
    content.innerHTML=`
    <h2>My Works</h2>
    <p>Here are some of my projects:</p>
    <ul>
        <li>Project 1: Portfolio Website - Created a personal portfolio to showcase my skills and projects.</li>
        <li>Project 2: Haptic Communication System - Developed a haptic feedback system for mobile devices.</li>
    </ul>
    `;
}
function showcontact(){
    hero.classList.add("show-image");      
  menu.classList.remove("show"); 
    content.innerHTML=`
    <h2>Contact Me</h2>
    <p>Mobile: +91 7674082671 / 7207020327</p>
    <p>Gmail: chandusai.jalli@gmail.com</p>
    `;
}
function toggleMenu() {
  menu.classList.toggle("show");
  document.querySelector(".hamburger").classList.toggle("active");
}
