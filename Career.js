// income 동적 기능 추가
const income = document.getElementById("income");
const income_des = document.getElementById("keywords_des_income");
const income_closeBtn = document.getElementById("income_closeBtn");

income.addEventListener("click", function () {
    income_des.className = "show";
});

income_closeBtn.addEventListener("click", function () {
    income_des.className = "hide";
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

// growth 동적 기능 추가
const growth = document.getElementById("growth");
const growth_des = document.getElementById("keywords_des_growth");
const growth_closeBtn = document.getElementById("growth_closeBtn");

growth.addEventListener("click", function () {
    growth_des.className = "show";
});

growth_closeBtn.addEventListener("click", function () {
    growth_des.className = "hide";
});

// team 동적 기능 추가
const team = document.getElementById("team");
const team_des = document.getElementById("keywords_des_team");
const team_closeBtn = document.getElementById("team_closeBtn");

team.addEventListener("click", function () {
    team_des.className = "show";
});

team_closeBtn.addEventListener("click", function () {
    team_des.className = "hide";
});
