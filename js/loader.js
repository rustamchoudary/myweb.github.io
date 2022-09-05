
html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}




 /* header  */
 .header.header-scrolled {
  background: rgb(59, 187, 170);
  width: auto;
  /* padding: 15px 0; */
  /* box-shadow: 0px 2px 20px rgb(1 41 112 / 10%); */
}

.fixed-top {
  position: fixed;
  top: -4px;
  right: 0;
  left: 0;
  z-index: 1030;
}


nav .nav-wrapper {
  position: sticky;
  height: 100%;
  width: 100%;
  display: block
 
}

/* navbar  */

nav {
  color: #fff;
  background-color: rgb(59, 187, 170);
  position: sticky;;
  width: 100%;
  height: 100%;
  line-height: auto;
}
.nav-wrapper{
   
    background-color: rgb(59, 187, 170);
    position: sticky;
    height: 100%;
    width: 100%;
    display: block;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    color: #000;
}

/* Hero  */

.hero{
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  height: 100vh;
  
}

.canvas {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
 
}

#particle-canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  /* width: 100%; */
  /* height: 100%; */
  /* background-color: #a714b8; */
  background-image: url('https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% 60%;
  overflow: hidden;
  
}

.wrapper{
  display: block;
  margin: 0%;
  padding: 0%;
  overflow: hidden;
  text-align: center;
  margin: 5em auto;
  width: 100%;
  max-width: 60em;
  transform-origin: bottom left;
  color: rgb(255, 255, 255);
  opacity: 0.7;
  font-size: 5em;
  text-transform: uppercase;
  line-height: 1;
  display: inline-block;
  padding-right: 30px;
  font-family: 'Teko', sans-serif;
  color:#fffbf1;
  font-weight: bold;
  font-family: 'Fuggles', cursive;
/*   background: "none"; */
    position:absolute;
    
 text-align: justify;

  margin-top: 12%;
  margin-left: auto;
  /* padding-left: ; */
  text-align: center;
}

/* NEW IN CANVAS  */

element.style {
  z-index: 20;
  position: relative;
}
canvas {
  display: block;
  vertical-align: bottom;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}


#string{
  align-items: center;
}
/* END Canvas Particle Animation */

/* Options of menu  */

nav ul a {
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    font-size: 1rem;
    color: #f7eeee;
    display: block;
    padding: 0 15px;
    cursor: pointer;
    font-weight: bold;

}




/* logo and Brand name  */

.logoc{
  color: #09090a;
  font-weight: bolder;
  text-align: left;
  /* font-family: Iceland; */
  font-size: 1rem;
  font-family: 'Tourney', cursive;
  font-family: 'Zen Tokyo Zoo', cursive;
}

.logoc :hover{
  /* color: #111118; */
  font-weight: bolder;
  text-align: right;
  -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
  -moz-animation: neon2 1.5s ease-in-out infinite alternate;
  animation: neon2 1.5s ease-in-out infinite alternate;
}


/*glow for webkit*/

@-webkit-keyframes neon2 {
  from {
    xt-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px rgb(214, 75, 196), 0 0 80px rgb(214, 75, 196);
  }
  to {
    xt-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px rgb(214, 75, 196), 0 0 80px rgb(214, 75, 196);
  }
}

/*glow for mozilla*/

@-moz-keyframes neon2 {
  from {
    xt-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px rgb(214, 75, 196), 0 0 80px rgb(214, 75, 196);
  }
  to {
    xt-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px rgb(214, 75, 196), 0 0 80px rgb(214, 75, 196);
  }
}


/*glow*/

@keyframes neon2 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px rgb(214, 75, 196), 0 0 80px rgb(214, 75, 196);
  }
  to {
    xt-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px rgb(214, 75, 196), 0 0 80px rgb(214, 75, 196);
  }
}


/*REEEEEEEEEEESPONSIVE*/

@media (max-width: 650px) {
  #logoc {
    width: 100%;
  }
  p {
    font-size: 3.5em;
  }
}

/* Options of menu  */



/* Mobile demo side navbar */



.sidenav{
    background-color: rgb(59, 187, 170);
    z-index: 9999;
    letter-spacing: 4px;
    display: block;
    /* position: relative; */
    
}

.sidenav :hover{
  background-color: rgb(245, 239, 248);
  z-index: 9999;
  letter-spacing: 5px;
  
}

/* navbarend */


/* Sticktheader */

.header.header-scrolled {
    background: rgb(59, 187, 170);
    /* padding: 15px 0; */
    /* box-shadow: 0px 2px 20px rgb(1 41 112 / 10%); */
}

.header {
    transition: all 0.5s;
    z-index: 997;
    padding: 0px 0;
    
}


.fixed-top {
    position: fixed;
    top: -4px;
    right: 0;
    left: 0;
    z-index: 1030;
}



 

.light{
    text-transform: capitalize;
}

/* slider end  */




/* .slider .indicators .indicator-item.active{
    background-color: rgb(59, 187, 170);
} */
.move {
    margin-bottom: 20px;
}

.logoc {
    margin-left: 15px;
}

/* paralex  */
.parallax-container{
    min-height: 180px;
    height: auto;
    border-radius: 30px;
} 
 /* span name of paralex  */

 .w3-display-middle{
   font-weight: normal;
   color: rgb(211, 233, 233);
   font-family: 'Zen Tokyo Zoo', cursive;
   font-size: 500%;
   text-align: center;
   margin-top: 100px;
 }





.social-icon {
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.3rem;
    border-radius: 50%;
    transform: all 0.5s;
    margin-top: 50px;
    /* z-index: 5; */
    /* position: relative; */
    /* display: inline-block; */
}

.social-icon :hover {
    color: blueviolet;
    border-color: #bf0086;
    
}



.Modal-close{
    background:rgb(59, 187, 170);
    width: 80px;
    height: 38px;
    outline: none;
    border: none;
    border-radius: 15px;
    color: white;
    
}


.icon-company{
  color:   rgb(59, 187, 170);
}

.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
}

body {
  overflow: hidden; /*Hide scrollbars*/
  overflow-y: hidden; /*Hide vertical scrollbar*/
  overflow-x: hidden; /*Hide horizontal scrollbar*/
   width: 100%;
  height: 100%;
  padding: 0;
  margin: 0 0;

}
 @media print {
    html, body {
      display: none;   /* hide whole page */
        
    }

    
}

/* our services */

/* Manual cards */
.oservices {
  text-align: center;
  text-transform: uppercase;
  /* margin-top:  */
  
  
}


 @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap");
 .container1{
     align-items: right;
 }
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display:contents;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #201e1e;
  background:rgb(59, 187, 170)

}

body .container1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200;
  margin: 0 0;
}

body .container1 .card {
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 20px;
  transition: 0.5s;
  
}

body .container1 .card:nth-child(1) .box .content a {
  background: #2196f3;
}

body .container1 .card:nth-child(2) .box .content a {
  background: #e91e63;
}

body .container1 .card:nth-child(3) .box .content a {
  background: #23c186;
}

body .container1 .card:nth-child(4) .box .content a {
  background: #9b1694;
}

body .container1 .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: rgb(59, 187, 170);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}

body .container1 .card .box:hover {
  transform: translateY(-50px);
}

body .container1 .card .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}

body .container1 .card .box .content {
  padding: 20px;
  text-align: center;
}

body .container1 .card .box .content h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
}

body .container1 .card .box .content h3 {
  font-size: 1.8rem;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
}

body .container1 .card .box .content p {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
}

body .container1 .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
body .container1 .card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}



/* footer  */


.footer-one{
  background: rgb(59, 187, 170);
  margin-top: 1ch;
}

.footer-two{
  background: rgb(57, 121, 112);
  /* flex: 111 111 0px; */
  /* display: flex; */
}

.textcopy{
  text-align: center;
  height: 40%;
}
#wrapper:after {
  content:"";
  display:block;
  clear:both;
}




/* feedback form  */

.container2 {
  background-color: #c9ece9;
  padding-top: 5px;
}


h1 {
  font-family: 'Poppins', sans-serif, 'arial';
  font-weight: normal;
  font-size: 72px;
  color: rgb(15, 14, 14);
  text-align: center;
}

h4 {
  font-family: 'Roboto', sans-serif, 'arial';
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  line-height: 1.5;
}

/* ///// inputs /////*/

input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
  font-size: 0.75em;
  color: rgb(14, 13, 13);
  top: -5px;
  -webkit-transition: all 0.225s ease;
  transition: all 0.225s ease;
}

.styled-input {
  float: left;
  width: 293px;
  margin: 1rem 0;
  position: relative;
  border-radius: 4px;
}

@media only screen and (max-width: 768px){
  .styled-input {
      width:100%;
  }
}

.styled-input label {
  color: rgb(0, 0, 0);
  padding: 1.3rem 30px 1rem 30px;
  position: absolute;
  top: 10px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
}

.styled-input.wide { 
  width: 650px;
  max-width: 100%;
}

input,
textarea {
  padding: 30px;
  border: 10;
  width: 100%;
  font-size: 1rem;
  transition: all 0.25s ease;
  /* background-color: #fdf9f9; */
  color: rgb(0, 0, 0);
  border-radius: 4px;
}

input:focus,
textarea:focus { outline: 0; }

input:focus ~ span,
textarea:focus ~ span {
  width: 100%;
  -webkit-transition: all 0.075s ease;
  transition: all 0.075s ease;
}

textarea {
  width: 100%;
  min-height: 15em;
}

.input-container {
  width: 650px;
  max-width: 100%;
  margin: 20px auto 25px auto;
}

.submit-btn {
  float: right;
  padding: 7px 35px;
  border-radius: 60px;
  display: inline-block;
  background-color: rgb(59, 187, 170);
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
            0 2px 10px 0 rgba(0,0,0,0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.submit-btn:hover {
  transform: translateY(1px);
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
            0 1px 1px 0 rgba(0,0,0,0.09);
}

@media (max-width: 768px) {
  .submit-btn {
      width:100%;
      float: none;
      text-align:center;
  }
}

input[type=checkbox] + label {
color: #ccc;
font-style: italic;
} 

input[type=checkbox]:checked + label {
color: #f00;
font-style: normal;
}

.input-container {
  width: 650px;
  max-width: 100%;
  margin: 20px auto 0px auto;
}

/* map  */

.map{
  width: auto;
  height: 500px;
  border-radius: 57px;
  padding-top: 12px;
  margin-top: 1ch;
 
}

img {
  border-style: none;
  width: 108%;
  /* margin-right: 0%; */
  margin-left: 1%;
}

/* About us cards  */


/* Banner image  */
img {
  position: unset;
  margin-top: 10px;
  margin-left: 1px;
  width: 108%;
  height: auto;
  border-style: none;
  border-radius: 30px;
  /* box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1); */

}





