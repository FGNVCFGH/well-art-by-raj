// smok.js
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1"; // header aur footer ke peeche

const ctx = canvas.getContext("2d");
let width, height;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Particles
let particles = [];
const particleCount = 60; // thoda zyada for dense effect

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 180 + 80, // size range
    dx: (Math.random() - 0.5) * 1.15, // slow movement
    dy: (Math.random() - 0.5) * 1.15,
    hue: Math.random() * 360 // dynamic color
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach(p => {
    // color ko rotate karna for smooth transition
    p.hue += 0.6;
    let color = `hsla(${p.hue}, 70%, 60%, 0.25)`;

    ctx.beginPath();
    let gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    // motion update
    p.x += p.dx;
    p.y += p.dy;

    // boundary looping
    if (p.x < -p.r) p.x = width + p.r;
    if (p.x > width + p.r) p.x = -p.r;
    if (p.y < -p.r) p.y = height + p.r;
    if (p.y > height + p.r) p.y = -p.r;
  });

  requestAnimationFrame(animate);
}
animate();
