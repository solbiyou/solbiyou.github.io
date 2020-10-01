'use strict';


// Make the navbar transparent when it's on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`NavbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
        navbar.classList.remove('navbar--dark');
  }
});




// Handle scrolling when tapping on the navbar menu\
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  navbarMenu.classList.remove('open');

  scrollIntoView(link);

});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle_btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//click on contact me to move to contact part
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
  scrollIntoView('#contact');
});

// make home slowly fade to tranparent as scrolled down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});


//bringup the arrow button
const arrowbtn = document.querySelector(".fa-arrow-circle-up");
arrowbtn.addEventListener('click', () => {
  //arrowbtn.style.opacity = window.scrollY / homeHeight;
  scrollIntoView('#home');
});

document.addEventListener('scroll', () => {
  arrowbtn.style.opacity = window.scrollY / (homeHeight*2);
  if (window.scrollY > homeHeight/2) {
    arrowbtn.style.display = "block";
  }
  else {
    arrowbtn.style.display = "none";
  }
});


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; //if undefined, ues the one on the right
  
  if(filter === null) {
    return;
  }

  //remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.active');
  active.classList.remove('active');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('active');

  projectContainer.classList.add('animation-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');

      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('animation-out');
  }, 300);

});


//helepr funcion
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
}

