import { Instagram, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#222] pt-20 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-heading font-black text-3xl tracking-wide mb-2">POWERZONE GYM</div>
            <div className="text-[#E50914] text-xs font-bold tracking-[4px] uppercase mb-6">EST. 2014</div>
            <p className="text-[#888888] mb-8">Vasai East's Premier Training Destination.</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-[#161616] border border-[#222] flex items-center justify-center text-white hover:border-[#E50914] hover:text-[#E50914] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Watch us on YouTube" className="w-10 h-10 rounded-full bg-[#161616] border border-[#222] flex items-center justify-center text-white hover:border-[#E50914] hover:text-[#E50914] transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://wa.me/917020048231" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" className="w-10 h-10 rounded-full bg-[#161616] border border-[#222] flex items-center justify-center text-white hover:border-[#25D366] hover:text-[#25D366] transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-[#888888]">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><button onClick={() => {document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}} className="hover:text-[#E50914] transition-colors">Home</button></li>
              <li><button onClick={() => {document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}} className="hover:text-[#E50914] transition-colors">About</button></li>
              <li><button onClick={() => {document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}} className="hover:text-[#E50914] transition-colors">Services</button></li>
              <li><button onClick={() => {document.getElementById('membership')?.scrollIntoView({behavior: 'smooth'})}} className="hover:text-[#E50914] transition-colors">Membership</button></li>
              <li><button onClick={() => {document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}} className="hover:text-[#E50914] transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-[#888888]">Information</h4>
            <ul className="space-y-4 text-[#888888]">
              <li className="flex gap-2">
                <strong className="text-white min-w-[80px]">Hours:</strong>
                <span>Mon-Sun 5AM–11PM</span>
              </li>
              <li className="flex gap-2">
                <strong className="text-white min-w-[80px]">Phone:</strong>
                <a href="tel:07020048231" className="hover:text-[#E50914] transition-colors">07020048231</a>
              </li>
              <li className="flex gap-2">
                <strong className="text-white min-w-[80px]">Location:</strong>
                <span>Evershine City<br/>Vasai East, 401208</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#555] font-medium tracking-wide">
          <div>© 2025 Powerzone Gym · Since 2014 · Evershine City Vasai East</div>
          <div className="text-[#E50914]">DESIGNED FOR CHAMPIONS</div>
        </div>
      </div>
    </footer>
  );
}
