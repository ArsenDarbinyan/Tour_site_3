

const PARTICLES_ENABLED = true;//!window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.innerWidth >= 1024;



const ParticlesModule = (() => {
  let canvas = null;
  let ctx = null;
  let particles = [];
  let animationId = null;
  let isResizing = false;

  const impulse = {
    x: 0,
    y: 0,
    active: false,
    radius: 150,
    timeout: null
  };

  class Particle {
    constructor(w, h) {
      this.w = w;
      this.h = h;

      this.x = Math.random() * w;
      this.y = Math.random() * h;

      this.r = Math.random() * 2 + 1;

      this.vx = Math.random() * 0.4 + 0.2;
      this.vy = -(Math.random() * 0.4 + 0.2);

      this.fx = 0;
      this.fy = 0;
      this.friction = 0.94;

      this.baseAlpha = Math.random() * 0.5 + 0.3;
      this.alpha = this.baseAlpha;

      this.colorLight = "0, 217, 139";
      this.colorDark = "0, 255, 157";
    }

    update(isLight) {
      if (impulse.active) {
        const dx = this.x - impulse.x;
        const dy = this.y - impulse.y;

        const d2 = dx * dx + dy * dy;
        const r2 = impulse.radius * impulse.radius;

        if (d2 < r2) {
          const force = (r2 - d2) / r2;

          const len = Math.sqrt(d2) || 1;
          const nx = dx / len;
          const ny = dy / len;

          this.fx += nx * force * 1.4;
          this.fy += ny * force * 1.4;
        }
      }

      this.fx *= this.friction;
      this.fy *= this.friction;

      this.x += this.vx + this.fx;
      this.y += this.vy + this.fy;

      if (this.x < -10) this.x = this.w + 10;
      if (this.x > this.w + 10) this.x = -10;
      if (this.y < -10) this.y = this.h + 10;
      if (this.y > this.h + 10) this.y = -10;

      if (isLight) {
        this.alpha = Math.min(0.8, this.baseAlpha + 0.4);
      } else {
        this.alpha = this.baseAlpha;
      }
    }

    draw(isLight) {
      ctx.fillStyle = `rgba(${isLight ? this.colorLight : this.colorDark}, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }

    resize(w, h) {
      this.w = w;
      this.h = h;
    }
  }

  function triggerImpulse(x, y) {
    impulse.x = x;
    impulse.y = y;
    impulse.active = true;

    clearTimeout(impulse.timeout);

    impulse.timeout = setTimeout(() => {
      impulse.active = false;
    }, 350);
  }

  function handleClick(e) {
    triggerImpulse(e.clientX, e.clientY);
  }

  function handleTouch(e) {
    if (!e.touches.length) return;
    triggerImpulse(e.touches[0].clientX, e.touches[0].clientY);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isLight = document.documentElement.classList.contains("light");

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.update(isLight);
      p.draw(isLight);
    }

    animationId = requestAnimationFrame(animate);
  }

  function resize() {
    if (isResizing) return;
    isResizing = true;

    setTimeout(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let i = 0; i < particles.length; i++) {
        particles[i].resize(canvas.width, canvas.height);
      }

      isResizing = false;
    }, 150);
  }

  return {
    init: () => {
      if (!PARTICLES_ENABLED) return;

      canvas = document.getElementById("particles-canvas");

      if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "particles-canvas";

        Object.assign(canvas.style, {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: "1"
        });

        document.body.prepend(canvas);
      }

      ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles = [];
      const count = 36;

      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }

      window.addEventListener("click", handleClick);
      window.addEventListener("touchstart", handleTouch, { passive: true });
      window.addEventListener("resize", resize);

      animate();

      console.log(`[Particles] optimized click-only mode: ${count}`);
    },

    destroy: () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("resize", resize);

      if (canvas?.parentNode) canvas.remove();

      canvas = null;
      ctx = null;
      particles = [];
    }
  };
})();


window.ParticlesModule = ParticlesModule;
