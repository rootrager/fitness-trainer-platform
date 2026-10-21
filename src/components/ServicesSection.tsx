import { Calendar, Activity, ClipboardList, Trophy } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Calendar,
      title: "On-court Tracking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
    },
    {
      icon: Activity,
      title: "Fitness & Movement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
    },
    {
      icon: ClipboardList,
      title: "Performance Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      icon: Trophy,
      title: "Tournament Travel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl uppercase text-white mb-16">
          Advantage
          <br />
          Learning
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <service.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
              <h3 className="text-xl text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
