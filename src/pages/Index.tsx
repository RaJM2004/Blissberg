import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import VideoBackground from '@/components/VideoBackground';
import AnimatedText from '@/components/AnimatedText';
import ProductCard from '@/components/ProductCard';
import IndustryCard from '@/components/IndustryCard';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';
import { ArrowRight, ChevronDown, Zap, Cpu, Brain, Shield } from 'lucide-react';

const Index = () => {
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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partners = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=150&h=50&q=80" },
    { name: "InnovateSys", logo: "https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=facearea&w=150&h=50&q=80" },
    { name: "FutureTech", logo: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=150&h=50&q=80" },
    { name: "DataMind", logo: "https://images.unsplash.com/photo-1519340333755-c6e2a6a2c5a0?auto=format&fit=facearea&w=150&h=50&q=80" },
    { name: "NextGen AI", logo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=150&h=50&q=80" },
    { name: "Quantum Solutions", logo: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=150&h=50&q=80" },
  ];

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
      {/* Hero Section with Video Background */}
      <section className="relative flex flex-col justify-center items-center min-h-[80vh] py-20 px-4 md:px-8 overflow-hidden">
        <VideoBackground videoUrl="/video1.mp4" fallbackImageUrl="/hero-bg.jpg" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <Navbar />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          <span className="text-4xl md:text-6xl font-extrabold text-white font-cinzel">BLISSBERG : </span>
 <span className="text-gradient">AI x SemiConductor </span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl">
            Building the next generation of neuromorphic AI chips and frameworks for a smarter, sustainable world.
          </p>
          <Button className="bg-gradient-to-r from-blissberg-primary to-blissberg-accent hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold" onClick={scrollToAbout}>
            Learn More <ChevronDown size={20} className="ml-2 animate-bounce" />
          </Button>
        </div>
      </section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Vision & <span className="text-gradient">Mission</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blissberg-primary to-blissberg-accent mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            At BlissBerg, we're dedicated to revolutionizing the future of computing through 
            the seamless integration of cutting-edge AI and semiconductor technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">
              <AnimatedText text="Pushing Technology Boundaries" />
            </h3>
            
            <p className="text-white/80 mb-6">
              Our mission is to push the boundaries of what's possible in AI computing by developing 
              neuromorphic architectures that mimic the human brain's efficiency and adaptability.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blissberg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <Zap size={20} className="text-blissberg-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">High-Performance Computing</h4>
                  <p className="text-white/70">Delivering unprecedented computational power with reduced energy consumption.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blissberg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <Cpu size={20} className="text-blissberg-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Advanced Semiconductor Design</h4>
                  <p className="text-white/70">Creating purpose-built chipsets optimized for AI and machine learning workloads.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blissberg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <Brain size={20} className="text-blissberg-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Neuromorphic Innovation</h4>
                  <p className="text-white/70">Developing chips that function more like biological neural networks than traditional processors.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl overflow-hidden relative group h-full">
            <div className="absolute inset-0 bg-gradient-radial from-blissberg-primary/20 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <div className="mb-6 text-right">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  <AnimatedText text="Our Research Philosophy" />
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blissberg-primary to-blissberg-accent ml-auto mb-4"></div>
              </div>
              
              <div className="space-y-6">
                <div className="glass-card p-4 rounded-lg transform transition-transform hover:scale-[1.02]">
                  <p className="text-white/80 italic">
                    "We believe the future of AI lies not in larger models, but in more efficient hardware 
                    architectures that fundamentally rethink how computation works."
                  </p>
                  <p className="text-right text-white mt-2 font-semibold">— Dr. Elena Karpov, Chief Scientist</p>
                </div>
                
                <div className="glass-card p-4 rounded-lg transform transition-transform hover:scale-[1.02]">
                  <p className="text-white/80 italic">
                    "By bringing intelligence to the edge through specialized silicon, we can enable 
                    a new generation of responsive, private, and sustainable AI applications."
                  </p>
                  <p className="text-right text-white mt-2 font-semibold">— Hiroshi Tanaka, CTO</p>
                </div>
              </div>
              
              <div className="mt-8 text-right">
                <a href="#" className="inline-flex items-center text-blissberg-primary hover:text-blissberg-accent transition-colors">
                  Read our research papers
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products Section */}
      <section id="products" className="py-20 px-4 md:px-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blissberg-dark/50 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-gradient">Products</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blissberg-primary to-blissberg-accent mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Explore our cutting-edge hardware and software solutions designed to accelerate AI innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="NeuralCore X1" 
              description="Our flagship neuromorphic processor that delivers 10x better energy efficiency with its spiking neural network architecture."
              imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            />
            
            <ProductCard 
              title="Quantum AI Accelerator" 
              description="A specialized coprocessor designed for quantum-inspired algorithms and large-scale matrix operations in deep learning."
              imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ProductCard 
              title="BlissML Framework" 
              description="An open-source software framework optimized for our hardware, enabling developers to build and deploy efficient ML models."
              imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ProductCard 
              title="Edge Intelligence Suite" 
              description="Complete solution for deploying AI at the edge, featuring our compact processors and specialized runtime environment."
              imageUrl="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ProductCard 
              title="BlissBerg DevKit" 
              description="Comprehensive development kit for researchers and engineers to prototype AI solutions on our neuromorphic hardware."
              imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ProductCard 
              title="Quantum Secure Module" 
              description="Hardware security module leveraging quantum-resistant cryptography to protect AI models and sensitive data."
              imageUrl="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              className="relative"
            >
              <div className="absolute top-4 right-4 bg-blissberg-accent text-white text-xs px-2 py-1 rounded-full">
                New
              </div>
            </ProductCard>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
              Transforming <span className="text-gradient">Industries</span>
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

      {/* Partners Section
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-blissberg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blissberg-primary to-blissberg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="h-16 w-full flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 max-w-[150px] transition-transform hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-4 md:px-8 glass-card mx-4 md:mx-8 rounded-xl my-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Stay Updated on <span className="text-gradient">AI Innovations</span>
          </h2>
          
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter for the latest updates on our technology,
            research breakthroughs, and industry insights.
          </p>
          
          <NewsletterForm />
          
          <div className="flex items-center justify-cente{/* -8">
             <Shield size={16} className="text-blissberg-primary mr-2" />
            <p className="text-white/60 text-sm">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

