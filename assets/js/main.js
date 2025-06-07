/* Loading */
const loadingText = "Loading, please wait...";
const loadingElement = document.getElementById('loadingText');
const loadingScreen = document.getElementById('loadingScreen');
const content = document.getElementById('content');

let index = 0;
let isTyping = true;

function typeWriter() {
    if (isTyping) {
        if (index < loadingText.length) {
            loadingElement.innerHTML += loadingText.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Typing speed
        } else {
            isTyping = false; // Start backspacing
            setTimeout(typeWriter, 500); // Wait before backspacing
        }
    } else {
        if (index > 0) {
            loadingElement.innerHTML = loadingText.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, 50); // Backspacing speed
        } else {
            isTyping = true; // Start typing again
            setTimeout(typeWriter, 500); // Wait before typing again
        }
    }
}

window.onload = function() {
    typeWriter();
    setTimeout(() => {
        loadingScreen.style.opacity = '0'; // Start fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }, 1000); // Wait for fade out to complete
    }, 2000); // Total duration for loading
};



/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Christian D. Villena Jr."," a Student"," a Junior Developer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

 // FOR ABOUT
  document.addEventListener("DOMContentLoaded", function() {
    const aboutMeSection = document.getElementById('aboutMe');
    
    // Trigger the animation by changing opacity and transform
    setTimeout(() => {
        aboutMeSection.style.opacity = 1;
        aboutMeSection.style.transform = 'translateY(0)';
    }, 100); // Delay to allow for DOM content to load
});
 
  
  