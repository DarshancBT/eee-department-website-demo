let currentSlide=0;

const slides=[
{
 title:"Smart Grid Research",
 desc:"Advanced work in renewable integration and intelligent power systems.",
 image:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop"
},
{
 title:"Embedded Systems Lab",
 desc:"Microcontroller, IoT and real-time embedded project development.",
 image:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
},
{
 title:"Automation Projects",
 desc:"Robotics, drives and industrial control innovations.",
 image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
}
];

function updateSlide(){

 document.getElementById('slideTitle').innerText=
 slides[currentSlide].title;

 document.getElementById('slideDesc').innerText=
 slides[currentSlide].desc;

 document.getElementById('slideImage').src=
 slides[currentSlide].image;
}

function nextSlide(){

 if(currentSlide < slides.length-1){
 currentSlide++;
 updateSlide();
 }
}

function prevSlide(){

 if(currentSlide>0){
 currentSlide--;
 updateSlide();
 }
}

window.onload=updateSlide;



let currentSlide2 = 0;

const slides2 = [

{
title:"Smart Grid Research",
desc:"Advanced work in renewable integration and intelligent power systems.",
image:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop"
},

{
title:"Embedded Systems Lab",
desc:"Microcontroller, IoT and real-time embedded project development.",
image:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
},

{
title:"Automation Projects",
desc:"Robotics, drives and industrial control innovations.",
image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
}

];

function updateSlide2(){

document.getElementById('slideTitle2').innerText =
slides2[currentSlide2].title;

document.getElementById('slideDesc2').innerText =
slides2[currentSlide2].desc;

document.getElementById('slideImage2').src =
slides2[currentSlide2].image;

}

function nextSlide2(){

if(currentSlide2 < slides2.length-1){

currentSlide2++;

updateSlide2();

}

}

function prevSlide2(){

if(currentSlide2 > 0){

currentSlide2--;

updateSlide2();

}

}

window.addEventListener("load", function(){

updateSlide2();

});