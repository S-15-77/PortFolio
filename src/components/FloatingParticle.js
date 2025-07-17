import { useEffect, useRef } from 'react';

const FloatingParticles = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const scrollY = useRef(0); // 🌟 Track scroll value

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3 + 1,
        dx: Math.random() * 0.5,
        dy: Math.random() * 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.current.forEach((p) => {
        // Dynamic behavior based on scroll
        const speedMultiplier = 1 + scrollY.current / 1000; // 🎯 Increase with scroll

        p.x += p.dx * speedMultiplier;
        p.y += p.dy * speedMultiplier;

        // Reset if out of bounds
        if (p.x > width) p.x = 0;
        if (p.y > height) p.y = 0;

        // Color based on scroll
        const hue = 200 + scrollY.current / 5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    // 🔁 Resize listener
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // 📜 Scroll listener
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', () => {});
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    />
  );
};

export default FloatingParticles;
