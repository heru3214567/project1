const music = document.getElementById("music");

function enterSite() {

let name =
document.getElementById("name").value.toLowerCase();

let code =
document.getElementById("phone").value;

if(name !== "herani" || code !== "0985"){

alert("Only Herani can enter ❤️");
return;

}

document.getElementById("loginContainer")
.style.display="none";

document.getElementById("mainContent")
.style.display="block";

music.play();

startMagic();

showLoveMessage();
}

function startMagic(){

setInterval(createHeart,150);

setInterval(createLoveWords,500);

}

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

const hearts=[
"❤️","💖","💕","💘","💝","💗"
];

heart.innerHTML =
hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
Math.random()*5+4 + "s";

heart.style.fontSize =
Math.random()*30+20 + "px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},9000);

}

const words=[
"Herani ❤️",
"My Queen 👑",
"My Future 💍",
"I Love You ❤️",
"My Happiness 🌹",
"Forever Us 💕",
"You Are Beautiful ✨",
"You're My World 🌍"
];

function createLoveWords(){

const txt =
document.createElement("div");

txt.className="heart";

txt.innerHTML=
words[Math.floor(Math.random()*words.length)];

txt.style.color="cyan";

txt.style.left=
Math.random()*100+"vw";

txt.style.animationDuration=
Math.random()*7+5+"s";

document.body.appendChild(txt);

setTimeout(()=>{
txt.remove();
},10000);

}

function showLoveMessage() {

const messages = [
"❤️ You are my favorite notification.",
"💖 Every heartbeat whispers your name.",
"💕 My world became brighter because of you.",
"💘 You are the best thing that happened to me.",
"🌹 Forever isn't enough with you.",
"✨ You are my dream come true."
];

const photos = [
"img/a.jpg",
"img/b.jpg",
"img/c.jpg",
"img/d.jpg",
"img/e.jpg"
];

setInterval(() => {

const popup = document.createElement("div");

popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%) scale(0)";
popup.style.background = "rgba(255,255,255,0.12)";
popup.style.backdropFilter = "blur(15px)";
popup.style.padding = "20px";
popup.style.borderRadius = "20px";
popup.style.textAlign = "center";
popup.style.zIndex = "9999";
popup.style.boxShadow = "0 0 30px pink";
popup.style.transition = "0.6s";

const img = document.createElement("img");

img.src =
photos[Math.floor(Math.random() * photos.length)];

img.style.width = "220px";
img.style.height = "220px";
img.style.objectFit = "cover";
img.style.borderRadius = "15px";
img.style.marginBottom = "15px";
img.style.boxShadow = "0 0 20px white";

const text = document.createElement("h3");

text.innerHTML =
messages[Math.floor(Math.random() * messages.length)];

text.style.color = "white";

popup.appendChild(img);
popup.appendChild(text);

document.body.appendChild(popup);

setTimeout(() => {
popup.style.transform =
"translate(-50%, -50%) scale(1)";
}, 100);

setTimeout(() => {
popup.style.transform =
"translate(-50%, -50%) scale(0)";
}, 4500);

setTimeout(() => {
popup.remove();
}, 5200);

}, 8000);

}
/* ==========================
   PHOTO MEMORY SYSTEM
========================== */

const memories = [
{
    photo:"img/a.jpg",
    text:"❤️ My Beautiful Herani"
},
{
    photo:"img/b.jpg",
    text:"💕 The Reason I Smile"
},
{
    photo:"img/c.jpg",
    text:"🌹 My Favorite Person"
},
{
    photo:"img/d.jpg",
    text:"✨ My Forever Love"
},
{
    photo:"img/e.jpg",
    text:"💖 My Future"
},
{
    photo:"img/f.jpg",
    text:"🥰 My Happiness"
},
{
    photo:"img/g.jpg",
    text:"💘 My Queen"
},
{
    photo:"img/h.jpg",
    text:"❤️ My Everything"
}
];

/* Shuffle Memories */

let shuffledMemories = [];
let memoryIndex = 0;

function shuffleMemories(){

    shuffledMemories = [...memories];

    for(let i = shuffledMemories.length - 1; i > 0; i--){

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [shuffledMemories[i], shuffledMemories[j]]
        =
        [shuffledMemories[j], shuffledMemories[i]];
    }

    memoryIndex = 0;
}

shuffleMemories();

function getNextMemory(){

    if(memoryIndex >= shuffledMemories.length){

        shuffleMemories();
    }

    return shuffledMemories[memoryIndex++];
}


/* ==========================
   POPUP MEMORY CARD
========================== */

function showMemoryCard(){

    const memory = getNextMemory();

    const popup = document.createElement("div");

    popup.classList.add("memory-card");

    popup.innerHTML = `
        <img src="${memory.photo}">
        <h3>${memory.text}</h3>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {

        popup.classList.add("show");

    },100);

    setTimeout(() => {

        popup.classList.remove("show");

        setTimeout(()=>{
            popup.remove();
        },600);

    },5000);
}

setInterval(showMemoryCard,7000);


/* ==========================
   FLOATING HEARTS
========================== */

const heartEmojis = [
"❤️",
"💖",
"💕",
"💘",
"💝",
"💗"
];

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML =
    heartEmojis[
        Math.floor(
            Math.random() *
            heartEmojis.length
        )
    ];

    heart.classList.add("heart");

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    Math.random() * 20 + 20 + "px";

    heart.style.animationDuration =
    Math.random() * 4 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);
}

setInterval(createHeart,300);


/* ==========================
   FLOATING LOVE TEXT
========================== */

const loveTexts = [

"Herani ❤️",
"My Queen 👑",
"My Happiness 🌹",
"My Future 💍",
"Forever Us 💕",
"I Love You ❤️",
"Beautiful Smile ✨",
"Only Mine 💘"
];

function createLoveText(){

    const text =
    document.createElement("div");

    text.classList.add("floating-text");

    text.innerHTML =
    loveTexts[
        Math.floor(
            Math.random() *
            loveTexts.length
        )
    ];

    text.style.left =
    Math.random() * 100 + "vw";

    text.style.animationDuration =
    Math.random() * 4 + 6 + "s";

    document.body.appendChild(text);

    setTimeout(()=>{
        text.remove();
    },10000);
}

setInterval(createLoveText,800);