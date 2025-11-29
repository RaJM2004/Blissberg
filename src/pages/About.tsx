import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import VideoBackground from '@/components/VideoBackground';
import AnimatedText from '@/components/AnimatedText';
import Footer from '@/components/Footer';
import { Zap, Cpu, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <section className="relative flex flex-col justify-center items-center min-h-[80vh] py-20 px-4 md:px-8 overflow-hidden">
        <VideoBackground videoUrl="/video1.mp4" fallbackImageUrl="/hero-bg.jpg" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <Navbar />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            About <span className="text-gradient font-extrabold font-cinzel">BLISSBERG</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;