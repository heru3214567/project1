const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const dateText = document.getElementById("date");
const greeting = document.getElementById("greeting");

function updateClock(){

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    hours.innerHTML = h.toString().padStart(2,"0");
    minutes.innerHTML = m.toString().padStart(2,"0");
    seconds.innerHTML = s.toString().padStart(2,"0");

    const options = {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    };

    dateText.innerHTML =
        now.toLocaleDateString("en-US", options);

    if(h < 12){
        greeting.innerHTML = "🌞 Good Morning";
    }
    else if(h < 18){
        greeting.innerHTML = "☀️ Good Afternoon";
    }
    else{
        greeting.innerHTML = "🌙 Good Evening";
    }
}

setInterval(updateClock,1000);
updateClock();



const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle{

    constructor(){

        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;

        this.size = Math.random()*4+1;

        this.speedX = Math.random()*2-1;
        this.speedY = Math.random()*2-1;
    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        if(this.x > canvas.width) this.x = 0;
        if(this.x < 0) this.x = canvas.width;

        if(this.y > canvas.height) this.y = 0;
        if(this.y < 0) this.y = canvas.height;
    }

    draw(){

        ctx.fillStyle = "cyan";

        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}

for(let i=0;i<150;i++){
    particles.push(new Particle());
}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(particle=>{

        particle.update();
        particle.draw();

        particles.forEach(other=>{

            const dx =
            particle.x - other.x;

            const dy =
            particle.y - other.y;

            const distance =
            Math.sqrt(dx*dx + dy*dy);

            if(distance < 120){

                ctx.beginPath();

                ctx.strokeStyle =
                "rgba(0,255,255,0.2)";

                ctx.moveTo(
                    particle.x,
                    particle.y
                );

                ctx.lineTo(
                    other.x,
                    other.y
                );

                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener(
    "resize",
    ()=>{

        canvas.width =
        window.innerWidth;

        canvas.height =
        window.innerHeight;
    }
);
