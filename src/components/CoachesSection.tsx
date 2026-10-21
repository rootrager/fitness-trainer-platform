import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, GraduationCap, Trophy, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CoachesSection() {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Certified Personal Trainer",
      organization: "NASM (National Academy of Sports Medicine)",
      year: "2015"
    },
    {
      icon: Award,
      title: "Sports Nutrition Specialist",
      organization: "ISSA (International Sports Sciences Association)",
      year: "2017"
    },
    {
      icon: Trophy,
      title: "Life Coach Certification",
      organization: "ICF (International Coaching Federation)",
      year: "2018"
    },
    {
      icon: Users,
      title: "10+ Years Experience",
      organization: "Trained 500+ Athletes & Clients",
      year: "2013-Present"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl uppercase text-white mb-12">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="relative h-full">
            <div className="relative overflow-hidden h-full">
              {/* 🖼️ عکس مربی در بخش About Me - اینجا آدرس عکس رو عوض کن */}
              <ImageWithFallback
                src="src/assets/secondpage.jpeg"
                alt="Mark Torres - Fitness Coach"
                className="w-full h-[600px] lg:h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-2 border-slate-800 bg-black/90 backdrop-blur-sm">
              <h3 className="text-2xl text-white mb-2">Mark Torres</h3>
              <p className="text-gray-400">Fitness & Personal Development Coach</p>
            </div>
          </div>

          {/* Right side - Bio & Credentials */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl text-white uppercase">My Story</h3>
              <p className="text-gray-300 leading-relaxed">
                With over 10 years of experience in fitness training and personal development coaching, 
                I've dedicated my life to helping individuals unlock their full potential. My approach 
                combines cutting-edge fitness methodologies with mindset coaching to create lasting 
                transformations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe that true fitness goes beyond physical strength—it's about building mental 
                resilience, developing healthy habits, and creating a lifestyle that supports your goals. 
                Each program I design is tailored to your unique needs, ensuring maximum results and 
                sustainable progress.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-6">
              <h3 className="text-2xl text-white uppercase">Credentials & Experience</h3>
              
              <div className="grid gap-6">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex gap-4 p-4 border border-slate-800 hover:border-slate-600 transition-colors">
                    <qual.icon className="w-8 h-8 text-white flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-white mb-1">{qual.title}</h4>
                      <p className="text-gray-400 text-sm">{qual.organization}</p>
                      <p className="text-gray-500 text-sm">{qual.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learn More Link */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors uppercase tracking-wider text-sm"
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}