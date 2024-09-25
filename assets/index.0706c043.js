import{j as e,a,S as h,P as m,A as p,b as u,r as s,R as g,B as f}from"./vendor.941d3c36.js";const v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}};v();var d="/vite-react-deploy/assets/bharat.6b2722f2.jpeg";const b=()=>e("section",{id:"home",className:"hero",children:a("div",{className:"hero__content",children:[e("div",{className:"hero__image-wrapper",children:e("img",{src:d,alt:"Sai Bharat Reddy",className:"hero__image"})}),a("div",{className:"hero__text",children:[a("h1",{className:"hero__title",children:[e("span",{className:"hero__greeting",children:"Hey there!"}),e("br",{}),"I'm ",e("span",{className:"hero__name",children:"Sai Bharat Reddy"})]}),e("p",{className:"hero__description",children:"A Passionate Software Developer"}),e("button",{className:"hero__button",children:"Reach Out"}),e("div",{className:"hero__social-media",children:[{icon:"logo-instagram",link:"https://www.instagram.com/bharat_reddy007/"},{icon:"logo-facebook",link:"#"},{icon:"logo-linkedin",link:"https://www.linkedin.com/in/sai-bharat-reddy-5446b0194/"},{icon:"logo-twitter",link:"#"}].map((r,o)=>e("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"hero__social-icon",children:e("ion-icon",{name:r.icon})},o))})]})]})});const N=()=>e("section",{id:"about",className:"about-section",children:a("div",{className:"about-wrapper",children:[e("div",{className:"about-image",children:e("img",{src:d,alt:"Sai Bharat Reddy",className:"about-portrait"})}),a("div",{className:"about-details",children:[a("h2",{className:"about-title",children:["Who ",e("span",{children:"I Am"})]}),e("p",{className:"about-description",children:"I am Sai Bharat Reddy, a dedicated Software Developer with an array of skills spanning multiple programming languages like C, C++, Java, Python, and SQL. I have successfully completed numerous projects, including a Farm Management System designed to aid farmers and an Automated Railway Crossing System focused on enhancing safety. I hold a Bachelor of Engineering in Computer Science from Nagarjuna College of Engineering, where I honed my skills further."}),e("div",{className:"about-stats",children:[{text:"Years of Experience",count:"01"},{text:"Projects Delivered",count:"04"},{text:"Organizations Contributed",count:"03"}].map((r,o)=>a("div",{className:"stat-item",children:[a("h3",{children:[r.count,e("span",{children:"+"})]}),e("p",{children:r.text})]},o))}),e("a",{href:"./src/assets/BharatReddy.pdf",download:!0,children:e("button",{className:"download-btn",children:"Grab My CV"})})]})]})});const y=()=>{const c=[{icon:"code-slash-outline",proficiency:"C Programming",percentage:85},{icon:"logo-codepen-outline",proficiency:"C++ Programming",percentage:80},{icon:"logo-java-outline",proficiency:"Java",percentage:75},{icon:"logo-python",proficiency:"Python",percentage:85},{icon:"server",proficiency:"SQL Database",percentage:70},{icon:"logo-html5",proficiency:"HTML",percentage:90},{icon:"logo-css3",proficiency:"CSS",percentage:88},{icon:"logo-javascript",proficiency:"JavaScript",percentage:80}];return e("section",{id:"skills-section",children:a("div",{className:"skills-wrapper",children:[a("h3",{children:["Key ",e("span",{children:"Competencies"})]}),e("p",{children:"Technical Expertise"}),e("div",{className:"skills-grid",children:c==null?void 0:c.map((r,o)=>a("div",{className:"skill-box",children:[e("div",{className:"progress-circle",style:{background:`conic-gradient(rgb(8, 145, 170) ${r.percentage}%, #ddd ${r.percentage}%)`},children:e("div",{className:"icon-container",children:e("ion-icon",{name:r.icon})})}),e("p",{className:"skill-text",children:r.proficiency})]},o))})]})})};var w="/vite-react-deploy/assets/project-1.3c972bed.png",k="/vite-react-deploy/assets/project-2.1216209b.png",S="/vite-react-deploy/assets/project-3.8675e2a8.png";const _=()=>a("section",{id:"projects",children:[a("div",{className:"project-header",children:[a("h2",{children:["Explore My ",e("span",{children:"Portfolio"})]}),e("p",{children:"A showcase of my recent work"})]}),e("div",{className:"project-gallery",children:e(h,{slidesPerView:1.5,spaceBetween:30,breakpoints:{768:{slidesPerView:3},1024:{slidesPerView:3.5}},loop:!0,autoplay:{delay:4e3},pagination:{clickable:!0},modules:[m,p],className:"project-slider",children:[{img:w,name:"Shopping App",description:"An e-commerce app with dynamic product search and checkout"},{img:k,name:"Chat App",description:"A real-time messaging application with secure communication"},{img:S,name:"Facebook Clone",description:"A social media clone with news feed, messaging, and profiles"}].map((r,o)=>e(u,{children:a("div",{className:"project-card",children:[e("img",{src:r.img,alt:r.name,className:"project-img"}),a("div",{className:"project-details",children:[e("h3",{children:r.name}),e("p",{children:r.description})]})]})},o))})})]});const j=()=>a("section",{id:"contact-section",children:[a("div",{className:"contact-header",children:[a("h2",{children:["Let's ",e("span",{children:"Connect"})]}),e("p",{children:"Feel free to drop me a message!"})]}),a("div",{className:"contact-content",children:[e("div",{className:"form-wrapper",children:a("form",{className:"contact-form",children:[e("input",{type:"text",placeholder:"Full Name"}),e("input",{type:"email",placeholder:"Email Address"}),e("textarea",{placeholder:"Your Message"}),e("button",{type:"submit",className:"btn-send",children:"Submit"})]})}),e("div",{className:"contact-details",children:[{logo:"mail",text:"saibharatreddy007@gmail.com"},{logo:"logo-whatsapp",text:"+1-5515541024"},{logo:"location",text:"New York, USA"}].map((r,o)=>a("div",{className:"contact-item",children:[e("div",{className:"icon-wrapper",children:e("ion-icon",{name:r.logo})}),e("p",{children:r.text})]},o))})]})]});const x=()=>a("footer",{className:"footer-container",children:[a("div",{className:"footer-content",children:[a("div",{className:"footer-section about",children:[e("h3",{children:"About Me"}),e("p",{children:"I'm Sai Bharat Reddy, a passionate software developer with a love for building applications that solve real-world problems. Whether you're looking to collaborate or just want to say hello, feel free to reach out!"})]}),a("div",{className:"footer-section links",children:[e("h3",{children:"Quick Links"}),a("ul",{children:[e("li",{children:e("a",{href:"#home",children:"Home"})}),e("li",{children:e("a",{href:"#about",children:"About"})}),e("li",{children:e("a",{href:"#projects",children:"Projects"})}),e("li",{children:e("a",{href:"#contact",children:"Contact"})})]})]}),a("div",{className:"footer-section social",children:[e("h3",{children:"Follow Me"}),a("div",{className:"social-icons",children:[e("a",{href:"https://www.instagram.com/bharat_reddy007/",target:"_blank",rel:"noopener noreferrer",children:e("ion-icon",{name:"logo-instagram"})}),e("a",{href:"https://www.linkedin.com/in/sai-bharat-reddy-5446b0194/",target:"_blank",rel:"noopener noreferrer",children:e("ion-icon",{name:"logo-linkedin"})}),e("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",children:e("ion-icon",{name:"logo-facebook"})})]})]}),e("div",{className:"footer-section back-to-top",children:e("a",{href:"#home",children:"Back to Top"})})]}),a("div",{className:"footer-bottom",children:[e("p",{children:"Copyright \xA9 2024 Bharat Reddy. All rights reserved."}),e("p",{children:"Developed by Sai Bharat Reddy"})]})]});const A=()=>{const[c,r]=s.exports.useState(!1),[o,l]=s.exports.useState(!1),i=[{label:"HOME",href:"#home"},{label:"ABOUT",href:"#about"},{label:"SKILLS",href:"#skills"},{label:"WORK",href:"#work"},{label:"CONTACT",href:"#contact"}];return s.exports.useEffect(()=>{const n=()=>r(window.scrollY>50);return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),e("header",{className:c?"navbar header-scrolled":"navbar",children:a("div",{className:"nav-container",children:[e("div",{className:"brand-logo",children:e("span",{className:"logo-highlight",children:"SAI Bharat"})}),e("nav",{className:"desktop-nav",children:e("ul",{className:"nav-links",children:i.map((n,t)=>e("li",{className:"nav-item",children:e("a",{href:n.href,className:"nav-link",children:n.label})},t))})}),e("div",{className:"hamburger-menu",onClick:()=>l(!o),children:e("span",{className:"menu-icon",children:o?"\u2716":"\u2630"})}),e("nav",{className:`mobile-nav ${o?"active":""}`,children:e("ul",{className:"mobile-nav-links",children:i.map((n,t)=>e("li",{className:"mobile-nav-item",onClick:()=>l(!1),children:e("a",{href:n.href,className:"mobile-nav-link",children:n.label})},t))})})]})})},C=()=>a("div",{children:[e(A,{}),e(b,{}),e(N,{}),e(y,{}),e(_,{}),e(j,{}),e(x,{})]});g.render(e(f,{children:e(C,{})}),document.getElementById("root"));