export function TrustBar() {
  const content = "4.9 ON GOOGLE · 452 VERIFIED REVIEWS · EST. SINCE 2014 · OPEN UNTIL 11 PM DAILY · VASAI EAST'S MOST TRUSTED GYM · ";
  return (
    <div className="w-full bg-[#111111] py-3 overflow-hidden border-y border-[#222]">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        <div className="flex-1 flex items-center justify-around text-white font-heading font-bold text-xl tracking-wider">
          {content.split('·').map((text, i, arr) => (
            i < arr.length - 1 && (
              <span key={i} className="flex items-center gap-4">
                {text.trim()}
                <span className="w-2 h-2 rounded-full bg-[#E50914] inline-block mx-4" />
              </span>
            )
          ))}
        </div>
        <div className="flex-1 flex items-center justify-around text-white font-heading font-bold text-xl tracking-wider">
          {content.split('·').map((text, i, arr) => (
            i < arr.length - 1 && (
              <span key={`dup-${i}`} className="flex items-center gap-4">
                {text.trim()}
                <span className="w-2 h-2 rounded-full bg-[#E50914] inline-block mx-4" />
              </span>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
