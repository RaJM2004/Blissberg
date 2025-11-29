import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import VideoBackground from '@/components/VideoBackground';
import IndustryCard from '@/components/IndustryCard';
import Footer from '@/components/Footer';

const Industries = () => {
  const industriesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (industriesSectionRef.current && industriesSectionRef.current.contains(e.target as Node)) {
        e.preventDefault();
        industriesSectionRef.current.scrollLeft += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const industryIcons = {
    automotive: "https://www.svgrepo.com/show/354380/car-electric.svg",
    healthcare: "https://www.svgrepo.com/show/354428/medical-cross.svg",
    robotics: "https://www.svgrepo.com/show/354459/robot.svg",
    smartCity: "https://www.svgrepo.com/show/354397/cityscape.svg",
    finance: "https://www.svgrepo.com/show/354431/money-bag.svg",
    aerospace: "https://www.svgrepo.com/show/354381/rocket.svg",
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <section className="relative flex flex-col justify-center items-center min-h-[80vh] py-20 px-4 md:px-8 overflow-hidden">
        <VideoBackground videoUrl="/video1.mp4" fallbackImageUrl="/hero-bg.jpg" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <Navbar />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Transforming <span className="text-gradient">Industries</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
              Industry <span className="text-gradient">Solutions</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blissberg-primary to-blissberg-accent mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto text-center">
              Our technology is powering innovation across multiple sectors, from healthcare to automotive.
            </p>
          </div>
          
          <div 
            ref={industriesSectionRef}
            className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
          >
            <IndustryCard 
              name="Autonomous Vehicles"
              icon={industryIcons.automotive}
              description="Enabling real-time decision making and sensor fusion for self-driving cars with ultra-low latency processing."
              className="snap-center"
            />
            
            <IndustryCard 
              name="Healthcare & Biotech"
              icon={industryIcons.healthcare}
              description="Accelerating medical imaging analysis, drug discovery, and personalized medicine through advanced AI."
              className="snap-center"
            />
            
            <IndustryCard 
              name="Robotics & Automation"
              icon={industryIcons.robotics}
              description="Powering the next generation of intelligent robots with on-device learning and adaptive behavior."
              className="snap-center"
            />
            
            <IndustryCard 
              name="Smart Cities"
              icon={industryIcons.smartCity}
              description="Creating efficient urban infrastructure with edge computing solutions for traffic, energy, and security."
              className="snap-center"
            />
            
            <IndustryCard 
              name="Financial Services"
              icon={industryIcons.finance}
              description="Enabling real-time fraud detection and algorithmic trading with high-throughput, low-latency AI."
              className="snap-center"
            />
            
            <IndustryCard 
              name="Aerospace & Defense"
              icon={industryIcons.aerospace}
              description="Supporting mission-critical applications with secure, radiation-hardened AI acceleration hardware."
              className="snap-center"
            />
          </div>
          
          <div className="text-center mt-10">
            <p className="text-white/60 text-sm mb-2">Scroll horizontally to explore all industries →</p>
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              Request Industry Case Study
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;