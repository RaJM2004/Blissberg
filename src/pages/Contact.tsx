import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import VideoBackground from '@/components/VideoBackground';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <section className="relative flex flex-col justify-center items-center min-h-[80vh] py-20 px-4 md:px-8 overflow-hidden">
        <VideoBackground videoUrl="/video1.mp4" fallbackImageUrl="/hero-bg.jpg" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <Navbar />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Stay <span className="text-gradient">Connected</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Stay Updated on <span className="text-gradient">AI Innovations</span>
              </h2>
              
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter for the latest updates on our technology,
                research breakthroughs, and industry insights.
              </p>
              
              <NewsletterForm />
              
              <div className="flex items-center justify-center mt-4">
                <Shield size={16} className="text-blissberg-primary mr-2" />
                <p className="text-white/60 text-sm">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Business Inquiries</h3>
              <p className="text-white/80 mb-4">Interested in our products or solutions? Let's discuss how we can help your business.</p>
              <Button className="bg-gradient-to-r from-blissberg-primary to-blissberg-accent hover:opacity-90 transition-opacity w-full">
                Schedule a Meeting
              </Button>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Support</h3>
              <p className="text-white/80 mb-4">Need technical assistance? Our support team is here to help you.</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;