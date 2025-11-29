
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  alpha: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match the viewport
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(150, Math.floor(window.innerWidth * window.innerHeight / 8000));
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2.5 + 1;
        // Create colors from the blissberg palette with consistent opacity
        const colors = [
          'rgba(139, 92, 246, 0.4)', // primary
          'rgba(126, 105, 171, 0.4)', // secondary
          'rgba(14, 165, 233, 0.4)',  // accent
          'rgba(51, 195, 240, 0.4)',  // glow
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color,
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
          },
          alpha: Math.random() * 0.5 + 0.5,
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Move particles
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          // Draw a line if particles are close enough
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
    };
    
    initParticles();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
    />
  );
};

export default ParticleBackground;
