import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/917020048231" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-7 right-7 z-50 w-[58px] h-[58px] bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform animate-pulse-bounce group"
    >
      <MessageCircle size={30} />
      <span className="absolute right-full mr-4 bg-[#0B0B0B] text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#222]">
        Chat on WhatsApp
      </span>
    </a>
  );
}
