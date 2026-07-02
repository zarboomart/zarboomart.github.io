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
// ============================
// نمایش قیمت ذخیره شده
// ============================

window.addEventListener("DOMContentLoaded", () => {

    const price1 = localStorage.getItem("price1");
    const price2 = localStorage.getItem("price2");

    if (price1 && document.getElementById("price1")) {
        document.getElementById("price1").innerText = price1 + " تومان";
    }

    if (price2 && document.getElementById("price2")) {
        document.getElementById("price2").innerText = price2 + " تومان";
    }

});
// ============================
// ذخیره قیمت کلاس‌ها
// ============================

function savePrices(){

    const p1 = document.getElementById("priceInput1").value;
    const p2 = document.getElementById("priceInput2").value;

    if(p1==""){
        alert("قیمت سیاه‌قلم را وارد کنید");
        return;
    }

    if(p2==""){
        alert("قیمت نقاشی را وارد کنید");
        return;
    }

    localStorage.setItem("price1",p1);

    localStorage.setItem("price2",p2);

    alert("✅ قیمت‌ها ذخیره شدند.");

}
// =========================
// ثبت هنرجو
// =========================

const form = document.getElementById("registerForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("studentName").value;

const phone=document.getElementById("studentPhone").value;

const studentClass=document.getElementById("studentClass").value;

let students=JSON.parse(localStorage.getItem("students")) || [];

students.push({

name:name,

phone:phone,

class:studentClass

});

localStorage.setItem("students",JSON.stringify(students));

alert("✅ ثبت‌نام با موفقیت انجام شد.");

form.reset();

});

}
// =========================
// ثبت نام هنرجو
// =========================

const form = document.querySelector("form");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.querySelector('input[type="text"]').value;
const phone = form.querySelector('input[type="tel"]').value;
const course = form.querySelector("select").value;

let students = JSON.parse(localStorage.getItem("students")) || [];

students.push({
name:name,
phone:phone,
course:course
});

localStorage.setItem("students", JSON.stringify(students));

alert("ثبت نام با موفقیت انجام شد.");

form.reset();

});

}
// ثبت هنرجو
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const phone = form.querySelector("input[type='tel']").value;
    const course = form.querySelector("select").value;

    let students =
      JSON.parse(localStorage.getItem("students")) || [];

    students.push({
      name,
      phone,
      course,
    });

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

    alert("ثبت نام انجام شد ✅");

    form.reset();
  });
}

// نمایش هنرجویان در پنل مدیریت
const studentsTable = document.getElementById("studentsTable");

if (studentsTable) {

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  students.forEach(student => {

    studentsTable.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.phone}</td>
        <td>${student.course}</td>
      </tr>
    `;

  });

}
// ثبت نام هنرجو
const registerForm = document.querySelector("form");

if (registerForm) {

registerForm.addEventListener("submit", function(e){

e.preventDefault();

const student = {
name: document.querySelector('input[type="text"]').value,
phone: document.querySelector('input[type="tel"]').value,
course: document.querySelector("select").value
};

let students = JSON.parse(localStorage.getItem("students")) || [];

students.push(student);

localStorage.setItem("students", JSON.stringify(students));

alert("ثبت نام با موفقیت انجام شد.");

registerForm.reset();

});

}