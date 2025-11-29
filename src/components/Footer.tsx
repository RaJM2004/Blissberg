import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="BlissBerg Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-bold text-white">BlissBerg</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Pioneering the future at the intersection of AI and semiconductor technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">News & Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">AI Chipsets</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Neuromorphic Processors</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Research Papers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Developer Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Community</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">© 2025 BlissBerg. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
