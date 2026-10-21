import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ContactPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl uppercase text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us to learn more about our programs and how we can help you achieve your fitness goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

