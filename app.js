// ============================
// ZarBoom ART
// app.js
// ============================

// پیام خوش آمد
window.addEventListener("load", () => {
    console.log("Welcome To ZarBoom ART");
});

// اسکرول نرم
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });
});

// افکت دکمه ها
document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform="scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform="scale(1)";
    });

});

// دکمه بازگشت بالا
const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.left="20px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#d4af37";
topButton.style.color="#000";
topButton.style.fontSize="24px";
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

topButton.onclick=()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};
// ============================
// نمایش قیمت ها
// ============================

window.addEventListener("DOMContentLoaded",()=>{

    const price1=document.getElementById("price1");
    const price2=document.getElementById("price2");

    if(price1){

        const p=localStorage.getItem("price1");

        if(p){
            price1.innerText=p+" تومان";
        }

    }

    if(price2){

        const p=localStorage.getItem("price2");

        if(p){
            price2.innerText=p+" تومان";
        }

    }

});

// ============================
// ذخیره قیمت ها
// ============================

function savePrices(){

    const p1=document.getElementById("priceInput1");
    const p2=document.getElementById("priceInput2");

    if(!p1 || !p2){
        return;
    }

    localStorage.setItem("price1",p1.value);
    localStorage.setItem("price2",p2.value);

    alert("✅ قیمت‌ها ذخیره شد");

}

// ============================
// ثبت نام هنرجو
// ============================

const registerForm=document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

const student={

name:document.getElementById("studentName").value,

phone:document.getElementById("studentPhone").value,

course:document.getElementById("studentClass").value

};

let students=JSON.parse(localStorage.getItem("students")) || [];

students.push(student);

localStorage.setItem("students",JSON.stringify(students));

alert("✅ ثبت نام انجام شد");

registerForm.reset();

});

}