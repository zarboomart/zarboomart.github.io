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