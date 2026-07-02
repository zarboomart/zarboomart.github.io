// ============================
// ZarBoom ART
// app.js
// ============================

// پیام خوش آمد
window.addEventListener("load",()=>{

console.log("Welcome To ZarBoom ART");

});

// اسکرول نرم
document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// افکت دکمه‌ها
const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// انیمیشن کارت‌ها
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 15px 30px rgba(212,175,55,.5)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 10px 20px rgba(0,0,0,.4)";

});

});

// دکمه بازگشت به بالا
const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.left="20px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#d4af37";
topButton.style.color="#000";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.zIndex="9999";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ثبت‌نام آزمایشی
buttons.forEach(btn=>{

if(btn.textContent.includes("ثبت")){

btn.addEventListener("click",()=>{

alert("به‌زودی امکان ثبت‌نام آنلاین فعال می‌شود.");

});

}

});
