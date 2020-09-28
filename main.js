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

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoView(link);

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


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
}

