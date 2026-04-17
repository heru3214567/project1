const ropeHandle = document.getElementById("ropeHandle");
const lampShade = document.getElementById("lampShade");
const loginForm = document.getElementById("loginForm");

let lampOn = false;

ropeHandle.onclick = function () {
    lampOn = !lampOn;

    // Toggle lamp light
    if (lampOn) {
        lampShade.classList.add("lamp-on");
        loginForm.classList.remove("hidden");
        loginForm.classList.add("visible");
    } else {
        lampShade.classList.remove("lamp-on");
        loginForm.classList.remove("visible");
        loginForm.classList.add("hidden");
    }
};