import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, GraduationCap, Trophy, Users, Target, Heart } from "lucide-react";

export function AboutPage() {
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

  const philosophyPoints = [
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      description: "Every program is designed with your specific goals in mind, ensuring measurable progress and sustainable results."
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "True fitness extends beyond physical strength—it encompasses mental resilience, healthy habits, and lifestyle balance."
    }
  ];

  return (
    <div className="bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-5xl lg:text-6xl uppercase text-white tracking-tight mb-6">
            About Mark Torres
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
            A dedicated fitness professional with over a decade of experience transforming lives 
            through personalized training and holistic wellness approaches.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left - Photo */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="src/assets/secondpage.jpeg"
                alt="Mark Torres - Fitness Coach"
                className="w-full h-[700px] object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-2 border-slate-800 bg-black/90 backdrop-blur-sm">
              <h2 className="text-3xl text-white mb-2">Mark Torres</h2>
              <p className="text-gray-400 text-lg">Fitness & Personal Development Coach</p>
            </div>
          </div>

          {/* Right - Bio */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl text-white uppercase tracking-wider">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With over 10 years of experience in fitness training and personal development coaching, 
                  I've dedicated my life to helping individuals unlock their full potential. My approach 
                  combines cutting-edge fitness methodologies with mindset coaching to create lasting 
                  transformations.
                </p>
                <p>
                  I believe that true fitness goes beyond physical strength—it's about building mental 
                  resilience, developing healthy habits, and creating a lifestyle that supports your goals. 
                  Each program I design is tailored to your unique needs, ensuring maximum results and 
                  sustainable progress.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with athletes, professionals, 
                  and individuals from all walks of life. My mission is to empower you to become the best 
                  version of yourself, both inside and outside the gym.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coaching Philosophy */}
        <div className="mb-20">
          <h2 className="text-4xl text-white uppercase tracking-wider mb-12">Coaching Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="p-6 border border-slate-800 hover:border-slate-600 transition-colors">
                <point.icon className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-xl text-white mb-3 uppercase">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div>
          <h2 className="text-4xl text-white uppercase tracking-wider mb-12">Credentials & Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="flex gap-4 p-6 border border-slate-800 hover:border-slate-600 transition-colors">
                <qual.icon className="w-10 h-10 text-white flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl text-white mb-2">{qual.title}</h3>
                  <p className="text-gray-400 mb-1">{qual.organization}</p>
                  <p className="text-gray-500 text-sm">{qual.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

