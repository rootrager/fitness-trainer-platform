import { Check, Calendar, UtensilsCrossed, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function OnlineCoachingPage() {
  const plans = [
    {
      title: "3-Month Training + Nutrition",
      description: "Comprehensive 3-month program combining personalized training with nutrition guidance",
      price: "Premium Plan",
      features: [
        "Customized 3-month training program",
        "Personalized nutrition plan",
        "Weekly progress check-ins",
        "24/7 messaging support",
        "Program adjustments as needed",
        "Goal tracking and analytics"
      ],
      icon: Target,
      popular: true
    },
    {
      title: "2-Month Training (No Nutrition)",
      description: "Focused 2-month training program for those who prefer to handle nutrition independently",
      price: "Standard Plan",
      features: [
        "Customized 2-month training program",
        "Weekly progress check-ins",
        "24/7 messaging support",
        "Program adjustments as needed",
        "Goal tracking and analytics"
      ],
      icon: Calendar,
      popular: false
    },
    {
      title: "1-Month Custom Plan",
      description: "Flexible 1-month program tailored to your specific needs and goals",
      price: "Flexible Plan",
      features: [
        "Customized 1-month training program",
        "Bi-weekly progress check-ins",
        "24/7 messaging support",
        "Program adjustments as needed"
      ],
      icon: UtensilsCrossed,
      popular: false
    }
  ];

  return (
    <div className="bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl uppercase text-white tracking-tight mb-6">
            Online Coaching
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the program that fits your goals and lifestyle. All plans include personalized 
            training programs and direct communication with your coach.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 border-2 ${
                plan.popular
                  ? "border-white bg-slate-900"
                  : "border-slate-800 bg-black"
              } hover:border-slate-600 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 text-sm uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <plan.icon className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                <h2 className="text-2xl text-white uppercase mb-3 tracking-tight">{plan.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{plan.description}</p>
                <div className="text-white text-3xl font-medium mb-2">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block w-full text-center py-3 border-2 ${
                  plan.popular
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-slate-600 text-white hover:border-white"
                } uppercase tracking-wider transition-all duration-300`}
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="border-t border-slate-800 pt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-white uppercase mb-4 tracking-wider">How It Works</h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  After registration, you'll receive a personalized assessment form to help us understand 
                  your goals, current fitness level, and preferences.
                </p>
                <p className="leading-relaxed">
                  Your custom program will be delivered within 48 hours, and you'll have direct access 
                  to your coach for questions, adjustments, and support.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-white uppercase mb-4 tracking-wider">What's Included</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-white" strokeWidth={1.5} />
                  <span>Personalized program design</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-white" strokeWidth={1.5} />
                  <span>Regular progress tracking</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-white" strokeWidth={1.5} />
                  <span>Direct coach communication</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-white" strokeWidth={1.5} />
                  <span>Program updates and adjustments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

