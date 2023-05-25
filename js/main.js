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
