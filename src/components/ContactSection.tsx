import { MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl uppercase text-white">Contact Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="mb-1">Address Information</p>
                  <p>Address information</p>
                  <p>Mexico</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Telephone:</p>
                  <p>000 000 00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl uppercase text-white">Leave a Message</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
              />
              
              <button
                type="submit"
                className="px-8 py-3 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
