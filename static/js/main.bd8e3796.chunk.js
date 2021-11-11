(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(6),s=a.n(n),i=(a(11),a(12),a(2));function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}var o=a(0);var m=function(e){var t=e.pages,a=void 0===t?[]:t,r=e.setCurrentPage,n=e.currentPage;return Object(c.useEffect)((function(){document.title=l(n.name)}),[n]),Object(o.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand fs-1 fw-bolder",href:"https://smithfamily42.github.io/react-portfolio/",children:"Brad Smith's Portfolio"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent",children:Object(o.jsx)("ul",{className:"navbar-nav ms-auto mb-lg-0",children:a.map((function(e){return Object(o.jsx)("li",{className:"me-5 nav-item ".concat(n.name===e.name&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){return r(e)},children:l(e.name)})},e.name)}))})})]})})};var j=function(e){return Object(o.jsx)("header",{className:"flex-row space-between px-1",children:e.children})};var d=function(){return Object(o.jsxs)("footer",{className:"flex-row justify-content-between text-center p-2",children:[Object(o.jsxs)("p",{className:"d-inline px-5",children:["\xa9 2021 ",Object(o.jsx)("a",{href:"mailto:smithfamily42@gmail.com",children:"Brad Smith"})]}),[{name:"fab fa-github",link:"https://github.com/smithfamily42"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/bradley-smith-64586b21/"},{name:"fab fa-twitter",link:"https://twitter.com/smithfamily42"}].map((function(e){return Object(o.jsx)("a",{className:"mx-5 fs-2",href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("i",{className:e.name})},e.name)}))]})},b=function(e){return Object(o.jsx)("div",{children:e.children})},h=a.p+"static/media/vetProfilePic.a7b84bd1.JPG";var u=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"px-5 my-5 container",children:Object(o.jsxs)("div",{className:"my-2 row",children:[Object(o.jsx)("div",{className:"mx-auto my-4 col-lg-4 col-md-4 col-sm-8",children:Object(o.jsx)("img",{src:h,alt:"Brad Smith Profile Pic",className:"img-fluid rounded-circle"})}),Object(o.jsx)("p",{children:"I am a blossoming full-stack web developer with experience and a passion for learning and growing. I am seeking a full stack web developer role that allows me to showcase my diverse, well-rounded skill set. I have a bachelor's degree and I have recently earned the full-stack web development certification from University of California - Berkeley\u2019s Coding Bootcamp. I have contributed to and built web presences for government organizations and small business clients/employers."}),Object(o.jsx)("p",{children:"My commitment to growth and development has positioned me to help employers with my new skills and this helps me maintain high levels of motivation and be an impactful contributor. I thrive with front end technologies (HTML, CSS) and leading my team with MySQL and modeling in MVC. Furthermore, I am versed in React, MongoDB, and GraphQL."}),Object(o.jsxs)("p",{children:["You can reach me by email: ",Object(o.jsx)("a",{href:"mailto:smithfamily42@gmail.com",children:"smithfamily42@gmail.com"})]})]})})})};var p=function(e){var t=e.project,a=t.name,c=t.repo,r=t.link,n=t.description;return Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"card justify-content-center shadow mb-5 ",children:[Object(o.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("img",{src:"/react-portfolio"+"/projects/".concat(a,".jpg"),alt:a,className:"pb-4 mx-auto d-block img-fluid rounded",width:"66%"})}),Object(o.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(o.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fab fa-github fs-1"})})}),Object(o.jsx)("p",{className:"d-inline mx-auto display-8 fw-bold",children:n})]})]})})};var f=function(){var e=Object(c.useState)([{name:"reactPortfolio",description:"React Portfolio",link:"https://smithfamily42.github.io/react-portfolio",repo:"https://github.com/smithfamily42/react-portfolio"},{name:"watchlist",description:"Model View Controller Group Project",link:"https://teamwatchlist.herokuapp.com/",repo:"https://github.com/smithfamily42/watchlist"},{name:"travelTunes",description:"Interactive Front-End Group Project",link:"https://rotichd.github.io/travel-music/",repo:"https://github.com/RotichD/travel-music"},{name:"uru",description:"Interactive Full-Stack MERN Group Project",link:"https://uru.herokuapp.com/",repo:"https://github.com/acevezl/uru"},{name:"firstPortfolio",description:"First Portfolio",link:"https://smithfamily42.github.io/first-portfolio/",repo:"https://github.com/smithfamily42/first-portfolio"},{name:"techBlog",description:"Model View Controller Tech Blog",link:"https://bradtechblog.herokuapp.com",repo:"https://github.com/smithfamily42/mvcTechBlog"}]),t=Object(i.a)(e,1)[0];return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4",children:t.map((function(e,t){return Object(o.jsx)(p,{project:e},"project"+t)}))})})},x=a(3),O=a(5);var g=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(i.a)(n,2),l=s[0],m=s[1],j=a.name,d=a.email,b=a.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);m(t?"":"Your email is invalid.")}else e.target.value.length?m(""):m("".concat(e.target.name," is required."));l||(r(Object(O.a)(Object(O.a)({},a),{},Object(x.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(o.jsx)("section",{children:Object(o.jsxs)("form",{id:"contact-form",className:"m-auto",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",a)},children:[Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsx)("label",{className:"col-sm-2 col-form-label",htmlFor:"name",children:"Name:"}),Object(o.jsx)("div",{className:"col-sm-8",children:Object(o.jsx)("input",{type:"text",name:"name",defaultValue:j,onBlur:h})})]}),Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsx)("label",{className:"col-sm-2 col-form-label",htmlFor:"email",children:"Email address:"}),Object(o.jsx)("div",{class:"col-sm-10",children:Object(o.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:h})})]}),Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsx)("label",{className:"col-sm-2 col-form-label",htmlFor:"message",children:"Message:"}),Object(o.jsx)("div",{class:"col-sm-10",children:Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:h})})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"mx-auto error-text",children:l})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"col-sm-2",type:"submit",children:"Submit"})})]})})};var v=function(){return Object(o.jsx)("section",{className:"my-5",children:Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsxs)("p",{children:["Download my ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/file/d/1goZNdQS_e_JEWpZD3FhfPqiBXCrZSGZn/view?usp=sharing",children:"resume"})]}),Object(o.jsx)("h3",{children:"Front-end Skills"}),Object(o.jsxs)("ul",{className:"skills",children:[Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"jQuery"}),Object(o.jsx)("li",{children:"Responsive Design"}),Object(o.jsx)("li",{children:"React"}),Object(o.jsx)("li",{children:"Bootstrap"})]}),Object(o.jsx)("h3",{children:"Back-end Skills"}),Object(o.jsxs)("ul",{className:"skills",children:[Object(o.jsx)("li",{children:"APIs"}),Object(o.jsx)("li",{children:"Node"}),Object(o.jsx)("li",{children:"Express"}),Object(o.jsx)("li",{children:"MySQL, Sequelize"}),Object(o.jsx)("li",{children:"MongoDB, Mongoose"}),Object(o.jsx)("li",{children:"REST"}),Object(o.jsx)("li",{children:"GraphQL"}),Object(o.jsx)("li",{children:"Progressive Web Apps"})]})]})})};var w=function(e){var t=e.currentPage;return Object(o.jsxs)("section",{className:"p-5",children:[Object(o.jsx)("h2",{children:l(t.name)}),Object(o.jsx)(b,{children:function(){switch(t.name){case"about me":return Object(o.jsx)(u,{});case"portfolio":return Object(o.jsx)(f,{});case"contact":return Object(o.jsx)(g,{});case"resume":return Object(o.jsx)(v,{});default:return Object(o.jsx)(u,{})}}()})]})};var N=function(){var e=Object(c.useState)([{name:"about"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(i.a)(e,1)[0],a=Object(c.useState)(t[0]),r=Object(i.a)(a,2),n=r[0],s=r[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{children:Object(o.jsx)(m,{pages:t,setCurrentPage:s,currentPage:n})}),Object(o.jsx)("main",{children:Object(o.jsx)(w,{currentPage:n})}),Object(o.jsx)(d,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),y()}},[[14,1,2]]]);
//# sourceMappingURL=main.bd8e3796.chunk.js.map