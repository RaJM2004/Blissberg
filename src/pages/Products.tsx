import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import VideoBackground from '@/components/VideoBackground';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <section className="relative flex flex-col justify-center items-center min-h-[80vh] py-20 px-4 md:px-8 overflow-hidden">
        <VideoBackground videoUrl="/video1.mp4" fallbackImageUrl="/hero-bg.jpg" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <Navbar />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Our <span className="text-gradient">Products</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blissberg-dark/50 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Cutting-edge <span className="text-gradient">Solutions</span>
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

      <Footer />
    </div>
  );
};

export default Products;