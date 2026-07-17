AOS.init({

    duration:1000,

    once:true

});
// Mobile Menu (abhi sirf placeholder)
// Iska full function hum Hero section ke baad add karenge.// =============================
// AOS
// =============================

AOS.init({
    duration: 800,
    once: true
});

// =============================
// SERVICES DATA
// =============================

const services = {

installation: {
title: "AC Installation & Shifting",
items: [
"Split AC Installation",
"Window AC Installation",
"Split AC Uninstallation",
"Window AC Uninstallation",
"AC Relocation / Shifting",
"Indoor & Outdoor Unit Mounting"
]
},

repair: {
title: "AC Repair Services",
items: [
"AC Not Cooling Repair",
"Water Leakage Repair",
"AC Noise Problem Repair",
"Bad Smell Removal",
"AC Auto On/Off Issue",
"Power Supply Issue",
"Thermostat Repair",
"PCB Repair",
"Compressor Repair",
"Fan Motor Repair",
"Capacitor Replacement",
"Sensor Replacement",
"Remote Issue Repair"
]
},

cleaning: {
title: "Cleaning & Maintenance",
items: [
"AC General Service",
"AC Deep Cleaning",
"Indoor Unit Cleaning",
"Outdoor Unit Cleaning",
"Cooling Coil Cleaning",
"Condenser Cleaning",
"Filter Cleaning",
"Blower Cleaning",
"Drain Pipe Cleaning",
"Chemical Foam Cleaning",
"Jet Wash Service",
"Annual Maintenance (AMC)"
]
},

gas: {
title: "Gas & Cooling Services",
items: [
"AC Gas Refilling",
"Gas Top-up",
"Gas Leakage Detection",
"Gas Leakage Repair",
"Cooling Performance Check",
"Pressure Testing"
]
},

parts: {
title: "AC Parts Replacement",
items: [
"Compressor Replacement",
"PCB Replacement",
"Fan Motor Replacement",
"Capacitor Replacement",
"Copper Pipe Replacement",
"Drain Pipe Replacement",
"Insulation Replacement",
"Thermostat Replacement",
"Sensor Replacement"
]
},

pipe: {
title: "Copper Piping & Drainage",
items: [
"Copper Pipe Installation",
"Copper Pipe Extension",
"Copper Pipe Insulation",
"Drain Pipe Installation",
"Drain Pipe Replacement"
]
},

electrical: {
title: "Electrical Services",
items: [
"AC Wiring",
"MCB Installation",
"Power Socket Installation",
"Voltage Checking",
"Stabilizer Installation",
"Stabilizer Repair"
]
},

commercial: {
title: "Commercial AC Services",
items: [
"Cassette AC Service",
"Tower AC Service",
"Ductable AC Service",
"VRV / VRF AC Service",
"Central AC Maintenance",
"Office AC Maintenance"
]
},

residential: {
title: "Residential AC Services",
items: [
"Home AC Service",
"Apartment AC Service",
"Villa AC Service"
]
}

};

// =============================
// ELEMENTS
// =============================

const popup = document.getElementById("servicePopup");
const popupTitle = document.getElementById("popupTitle");
const popupList = document.getElementById("popupList");
const popupBtn = document.getElementById("popupBtn");
const closePopup = document.querySelector(".close-popup");

// =============================
// OPEN POPUP
// =============================

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("click",()=>{

const key = card.dataset.service;

const data = services[key];

popupTitle.innerText = data.title;

popupList.innerHTML = "";

data.items.forEach(service=>{

popupList.innerHTML += `<div>✔ ${service}</div>`;

});

// WhatsApp Button

popupBtn.onclick = ()=>{

const msg = `Hello Shiv Air Conditioner,

Name :

Mobile Number :

Address :

Selected Service :
${data.title}

Problem :

Thank You.`;

window.open(
`https://wa.me/919601853642?text=${encodeURIComponent(msg)}`,
"_blank"
);

};

popup.style.display="flex";

});

});

// =============================
// CLOSE
// =============================

closePopup.onclick=()=>{

popup.style.display="none";

};

window.onclick=(e)=>{

if(e.target==popup){

popup.style.display="none";

}

};
// ==========================
// REVIEW POPUP
// ==========================

const reviewPopup = document.getElementById("reviewPopup");

const openReview = document.getElementById("openReviewPopup");

const closeReview = document.querySelector(".close-review");

openReview.onclick = () => {

    reviewPopup.classList.add("active");

};

closeReview.onclick = () => {

    reviewPopup.classList.remove("active");

};

window.addEventListener("click",(e)=>{

if(e.target==reviewPopup){

reviewPopup.style.display="none";

}

});

// ==========================
// REVIEW FORM
// ==========================

document.getElementById("reviewForm").addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("reviewName").value;

const rating=document.getElementById("rating").value;

const review=document.getElementById("reviewText").value;

const msg=`Hello Shiv Air Conditioner,

New Customer Review

Name : ${name}

Rating : ${rating}

Review :
${review}

Thank You.`;

window.open(

`https://wa.me/919601853642?text=${encodeURIComponent(msg)}`,

"_blank"

);

});
// ==========================
// SCROLL TO TOP
// ==========================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Menu item click hone ke baad menu close ho jaye
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});