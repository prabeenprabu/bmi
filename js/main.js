// ---------theme----------
let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
let body = document.querySelector("body");
// --light theme--
moon.addEventListener("click", () => {
    sun.style.display = "block";
    moon.style.display = "none";
    body.style.setProperty("--bg", "var(--white");
    body.style.setProperty("--text", "var(--dk-blue");
    body.style.setProperty("--secondary", "var(--cyan");
    body.style.setProperty("--primary", "var(--lt-cyan");
    document.querySelector(".main").style.backgroundColor =
        "rgba(180, 180, 180, 0.3)";
});
// --dark-theme--
sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";
    body.style.setProperty("--text", "var(--white");
    body.style.setProperty("--bg", "var(--dk-blue");
    body.style.setProperty("--primary", "var(--cyan");
    body.style.setProperty("--secondary", "var(--lt-cyan");
    document.querySelector(".main").style.backgroundColor =
        "rgba(255, 255, 255, 0.3)";
});
// ------to my account----
document.querySelector(".footer").addEventListener("click", () => {
    window.open("https://www.instagram.com/prabeen_ragupathi/", "_blank");
});

// ---bmi calulate----
let ans = document.querySelector(".ans span");
let an = document.querySelector(".ans");
document.querySelector(".btns").addEventListener("click", () => {
    let ht = document.querySelector("#height").value;
    let wt = document.querySelector("#weight").value;
    if (ht > 0 && wt > 0) {
        let m = ht / 100;
        let m2 = m * m;
        let res = wt / m2;
        if (res < 18.5) {
            ans.innerText = "under weight";
            an.style.backgroundColor = "#219ebc";
        } else if (res >= 18.5 && res <= 24.9) {
            ans.innerText = "normal weight";
            an.style.backgroundColor = "#40916c";
        } else if (res >= 25 && res <= 29.9) {
            ans.innerText = "over weight";
            an.style.backgroundColor = "#e76f51";
        } else if (res >= 30) {
            ans.innerText = "obesity";
            an.style.backgroundColor = "#e63946";
        }
    }
});
