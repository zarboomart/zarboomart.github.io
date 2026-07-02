// ===============================
// ZarBoom ART
// app.js
// ===============================

// پیام خوش آمد
window.addEventListener("load", () => {
    console.log("Welcome To ZarBoom ART");
});

// ===============================
// نمایش قیمت‌ها
// ===============================

window.addEventListener("DOMContentLoaded", () => {

    const p1 = localStorage.getItem("price1");
    const p2 = localStorage.getItem("price2");

    if (document.getElementById("price1") && p1) {
        document.getElementById("price1").innerText = p1 + " تومان";
    }

    if (document.getElementById("price2") && p2) {
        document.getElementById("price2").innerText = p2 + " تومان";
    }

});

// ===============================
// ذخیره قیمت‌ها
// ===============================

function savePrices() {

    const p1 = document.getElementById("priceInput1");
    const p2 = document.getElementById("priceInput2");

    if (!p1 || !p2) return;

    localStorage.setItem("price1", p1.value);
    localStorage.setItem("price2", p2.value);

    alert("✅ قیمت‌ها ذخیره شدند");

}
// ===============================
// ثبت نام هنرجو
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const student = {

            name: document.getElementById("studentName").value,

            phone: document.getElementById("studentPhone").value,

            course: document.getElementById("studentClass").value

        };

        let students = JSON.parse(localStorage.getItem("students")) || [];

        students.push(student);

        localStorage.setItem("students", JSON.stringify(students));

        alert("✅ ثبت‌نام با موفقیت انجام شد");

        registerForm.reset();

    });

}

// ===============================
// نمایش هنرجویان در داشبورد
// ===============================

const studentsTable = document.getElementById("studentsTable");

if (studentsTable) {

    const students = JSON.parse(localStorage.getItem("students")) || [];

    studentsTable.innerHTML = "";

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
// ===============================
// حذف همه هنرجویان
// ===============================

function clearStudents(){

    if(confirm("همه هنرجویان حذف شوند؟")){

        localStorage.removeItem("students");

        location.reload();

    }

}
function deleteStudent(index){

let students=JSON.parse(localStorage.getItem("students")) || [];

students.splice(index,1);

localStorage.setItem("students",JSON.stringify(students));

location.reload();

}