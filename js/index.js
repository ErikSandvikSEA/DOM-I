const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
console.log('working')
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav menu
const navElements = document.querySelectorAll('nav a');
const navContents = Object.values(siteContent.nav)

function navLoop() {
  for (let i = 0; i < navElements.length; i++) {
    navElements[i].textContent = navContents[i]
  }
}
navLoop();

//CTA SECTION
const ctaContent = Object.values(siteContent.cta)
//h1
const ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = ctaContent[0]
//button
const ctaButtonText = document.querySelector('.cta-text button')
ctaButtonText.textContent = ctaContent[1]
//image
const ctaImg = document.querySelector('#cta-img')
ctaImg.src = ctaContent[2]

// MAIN CONTENT 
const mainContent = Object.values(siteContent["main-content"])
console.log(mainContent)
// h4 
const mainh4 = document.querySelectorAll('.text-content h4')
// console.log(mainh4)
function h4Content (nodeListIndex, mainContentIndex) {
  mainh4[nodeListIndex].textContent = mainContent[mainContentIndex]
}
h4Content(0, 0)
h4Content(1, 2)
h4Content(2, 5)
h4Content(3, 7)
h4Content(4, 9)

//p tags
const mainP = document.querySelectorAll('.text-content p')
console.log(mainP)
function mainPContent (nodeListIndex, mainContentIndex) {
  mainP[nodeListIndex].textContent = mainContent[mainContentIndex]
}
mainPContent(0,1)
mainPContent(1,3)
mainPContent(2,6)
mainPContent(3,8)
mainPContent(4,10)

