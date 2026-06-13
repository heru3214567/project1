const music = document.getElementById("bgMusic");

function playMusic() {
    music.play();
}

function enterSite() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if(name ==! "heran" || phone ==! "0985"){
    alert("Wrong name or phone number.");
    return;
}
    playMusic();

    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    document.getElementById("primaryPage").style.display = "block";
}

function showSecondary(){

    playMusic();

    document.getElementById("primaryPage").style.display = "none";
    document.getElementById("secondaryPage").style.display = "block";
}

function showNewBeginning(){

    playMusic();

    document.getElementById("secondaryPage").style.display = "none";
    document.getElementById("newPage").style.display = "block";
}
function showSecret(){

    playMusic();

    document.getElementById("newPage").style.display = "none";
    document.getElementById("secretPage").style.display = "block";

    resizeCanvas();
}

const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
const sceneCanvas = document.getElementById("scene");
const sceneCtx = sceneCanvas.getContext("2d");

function resizeCanvas(){

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

let traceProgress = 0;
const totalPoints = 400;

function drawHeart(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const centerX = canvas.width/2;
    const centerY = canvas.height/2;

    const scale = Math.min(canvas.width,canvas.height)/35;

    ctx.fillStyle = "#ff2a74";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ff2a74";

    for(let i=0;i<traceProgress;i++){

        const t = (i/totalPoints)*Math.PI*2;

        const x = 16*Math.pow(Math.sin(t),3);

        const y =
        13*Math.cos(t)
        -5*Math.cos(2*t)
        -2*Math.cos(3*t)
        -Math.cos(4*t);

        ctx.beginPath();
        ctx.arc(
            centerX + x*scale,
            centerY - y*scale,
            3,
            0,
            Math.PI*2
        );

        ctx.fill();
    }

    if(traceProgress < totalPoints){
        traceProgress += 3;
    }

    requestAnimationFrame(drawHeart);
}

resizeCanvas();
drawHeart();

window.addEventListener("resize", resizeCanvas);

sceneCanvas.width = 800;
sceneCanvas.height = 400;

function drawScene() {

    // Sky
    sceneCtx.fillStyle = "#87CEEB";
    sceneCtx.fillRect(
        0,
        0,
        sceneCanvas.width,
        sceneCanvas.height
    );

    // Green land
    sceneCtx.fillStyle = "green";
    sceneCtx.fillRect(
        0,
        sceneCanvas.height * 0.6,
        sceneCanvas.width,
        sceneCanvas.height * 0.4
    );

    // Flowers
    for (let i = 0; i < 50; i++) {

        drawFlower(
            Math.random() * sceneCanvas.width,
            sceneCanvas.height * 0.6 +
            Math.random() * (sceneCanvas.height * 0.35),
            Math.random() > 0.5 ? "yellow" : "purple"
        );
    }
}

function drawFlower(x, y, color) {

    // Stem
    sceneCtx.strokeStyle = "darkgreen";
    sceneCtx.lineWidth = 3;

    sceneCtx.beginPath();
    sceneCtx.moveTo(x, y);
    sceneCtx.lineTo(x, y - 25);
    sceneCtx.stroke();

    const topY = y - 30;

    // Petals
    sceneCtx.fillStyle = color;

    for (let i = 0; i < 6; i++) {

        const angle = (Math.PI * 2 / 6) * i;

        const px = x + Math.cos(angle) * 8;
        const py = topY + Math.sin(angle) * 8;

        sceneCtx.beginPath();
        sceneCtx.arc(
            px,
            py,
            5,
            0,
            Math.PI * 2
        );
        sceneCtx.fill();
    }

    // Center
    sceneCtx.fillStyle = "orange";

    sceneCtx.beginPath();
    sceneCtx.arc(
        x,
        topY,
        5,
        0,
        Math.PI * 2
    );

    sceneCtx.fill();
}

// Initial draw
drawScene();

// Redraw when screen size changes
window.addEventListener("resize", () => {

    sceneCanvas.width = 800;
    sceneCanvas.height = 400;

    drawScene();
});