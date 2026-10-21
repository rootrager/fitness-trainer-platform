import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Diagonal divider line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg 
            className="absolute top-0 left-0 w-full h-full" 
            viewBox="0 0 1440 1024" 
            preserveAspectRatio="none"
          >
            <line 
              x1="0" 
              y1="900" 
              x2="1440" 
              y2="200" 
              stroke="#374151" 
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            {/* 🖼️ عکس اصلی صفحه اول - اینجا آدرس عکس رو عوض کن */}
            <ImageWithFallback
              src="src/assets/firstpage.jpeg"
              alt="Fitness trainer in action"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-6 order-1 lg:order-2">
            <h1 className="text-5xl lg:text-6xl uppercase tracking-tight">
              High Performance
              <br />
              Training
            </h1>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Mark Torres Academy is one of the leading high performance fitness and personal development centers. Each program is custom-tailored and developed to meet the individualized needs of each of our athletes.
            </p>
            <Link
              to="/online-coaching"
              className="inline-block px-8 py-3 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Book Now
            </Link>
            
            {/* Quote section - visible only on mobile */}
            <div className="block lg:hidden pt-8 mt-8 border-t border-slate-700">
              <blockquote className="text-white text-lg italic">
                "There is no way around the hard work. Embrace it."
              </blockquote>
              <p className="text-gray-400 mt-2">— Roger Federer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote section - visible only on desktop */}
      <div className="hidden lg:block absolute bottom-20 right-12 max-w-md text-right">
        <blockquote className="text-white text-xl italic">
          "There is no way around the hard work. Embrace it."
        </blockquote>
        <p className="text-gray-400 mt-2">— Roger Federer</p>
      </div>
    </section>
  );
}