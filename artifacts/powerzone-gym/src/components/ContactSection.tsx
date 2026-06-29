import { useState } from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const id = setTimeout(() => setSubmitted(false), 5000);
    return () => clearTimeout(id);
  };

  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-[#E50914] font-bold tracking-widest text-sm mb-4">GET IN TOUCH</div>
            <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase mb-10">WHERE TO FIND US</h2>
            
            <div className="space-y-4">
              <div className="bg-[#161616] p-6 rounded-lg flex items-start gap-4 border border-[#222]">
                <MapPin className="text-[#E50914] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-[#888888] leading-relaxed">C-150, B-001, Annant Shrada CHS LTD, Evershine City, Vasai East, Maharashtra 401208.<br/>Next to Evershine Medical, Before Last Stop, Main Rd.</p>
                </div>
              </div>
              <div className="bg-[#161616] p-6 rounded-lg flex items-start gap-4 border border-[#222]">
                <Phone className="text-[#E50914] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <a href="tel:07020048231" className="text-[#888888] hover:text-[#E50914] transition-colors">07020048231</a>
                </div>
              </div>
              <div className="bg-[#161616] p-6 rounded-lg flex items-start gap-4 border border-[#222]">
                <Clock className="text-[#E50914] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Hours</h4>
                  <p className="text-[#888888]">Monday to Sunday<br/>Opens Early, Closes 11 PM</p>
                </div>
              </div>
              <div className="bg-[#161616] p-6 rounded-lg flex items-start gap-4 border border-[#222]">
                <Star className="text-[#E50914] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Rating</h4>
                  <p className="text-[#888888]">4.9 stars, 452 Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#161616] rounded-xl p-8 border border-[#222] shadow-2xl">
            <h3 className="font-heading font-black text-3xl text-white mb-6 uppercase">QUICK ENQUIRY</h3>
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0B0B0B] border border-[#E50914] text-center p-8 rounded flex flex-col items-center justify-center h-[400px]"
              >
                <div className="w-16 h-16 bg-[#E50914]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#E50914] text-2xl font-bold">✓</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent</h4>
                <p className="text-[#888888]">We'll be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input required type="text" placeholder="Your Name" className="w-full bg-[#0B0B0B] border border-[#222] rounded px-4 py-3 text-white focus:outline-none focus:border-[#E50914] transition-colors" />
                </div>
                <div>
                  <input required type="tel" placeholder="Phone Number" className="w-full bg-[#0B0B0B] border border-[#222] rounded px-4 py-3 text-white focus:outline-none focus:border-[#E50914] transition-colors" />
                </div>
                <div>
                  <select required className="w-full bg-[#0B0B0B] border border-[#222] rounded px-4 py-3 text-[#888888] focus:outline-none focus:border-[#E50914] focus:text-white transition-colors appearance-none">
                    <option value="">Select Your Goal</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="CrossFit">CrossFit</option>
                    <option value="Personal Training">Personal Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Message (Optional)" rows={4} className="w-full bg-[#0B0B0B] border border-[#222] rounded px-4 py-3 text-white focus:outline-none focus:border-[#E50914] transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#E50914] text-white font-bold tracking-wider py-4 mt-2 hover:bg-white hover:text-black transition-colors rounded">
                  SEND ENQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <div className="w-full h-[400px] bg-[#161616] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5!2d72.8347!3d19.3940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzM4LjQiTiA3MsKwNTAnMDQuOSJF!5e0!3m2!1sen!2sin!4v1234567890" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </section>
  );
}
