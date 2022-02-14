/**
 * const html = {
 *  getElementById: function(){},
 * }
 */

// accounting 동적 기능 추가
const accounting = document.getElementById("accounting");
const accounting_des = document.getElementById("keywords_des_accounting");
const accounting_closeBtn = document.getElementById("accounting_closeBtn");

accounting.addEventListener("click", function () {
    accounting_des.className = "show";
});

accounting_closeBtn.addEventListener("click", function () {
    accounting_des.className = "hide";
});

// Eco_friendly 동적 기능 추가
const Eco_friendly = document.getElementById("Eco_friendly");
const Eco_friendly_des = document.getElementById("keywords_des_Eco_friendly");
const Eco_friendly_closeBtn = document.getElementById("Eco_friendly_closeBtn");

Eco_friendly.addEventListener("click", function () {
    Eco_friendly_des.className = "show";
});

Eco_friendly_closeBtn.addEventListener("click", function () {
    Eco_friendly_des.className = "hide";
});

// photo 동적 기능 추가
const photo = document.getElementById("photo");
const photo_des = document.getElementById("keywords_des_photo");
const photo_closeBtn = document.getElementById("photo_closeBtn");

photo.addEventListener("click", function () {
    photo_des.className = "show";
});

photo_closeBtn.addEventListener("click", function () {
    photo_des.className = "hide";
});