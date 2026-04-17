// Username welcome
document.getElementById("submit").onclick = function () {
    let username = document.getElementById("username").value;
    document.getElementById("myh1").textContent = "Welcome " + username;
};

// Rectangle area
document.getElementById("calculate").onclick = function () {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);

    let area = length * width;

    document.getElementById("result").textContent = "Area = " + area;
};