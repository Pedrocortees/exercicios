const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function heartFunction(t) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return { x, y };
}

for (let i = 0; i < 1000; i++) {
  const t = Math.random() * Math.PI * 2;
  const { x, y } = heartFunction(t);
  particles.push({
    x: canvas.width / 2 + x * 20,
    y: canvas.height / 2 - y * 20,
    radius: Math.random() * 2 + 1,
    alpha: Math.random(),
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 0, 0, ${p.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

animate();
document.addEventListener("click", function () {
  alert("Te Amo ❤️");
});
