import { MapPin, Phone, Mail, Send } from "lucide-react";

export function ContactPage() {
  return (
    <div className="bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl uppercase text-white tracking-tight mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions? Want to learn more about our programs? We're here to help you on your fitness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl uppercase text-white mb-8 tracking-wider">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-gray-300">
                    <h3 className="text-white mb-2 uppercase tracking-wider">Address</h3>
                    <p className="mb-1">Address Information</p>
                    <p>Address information</p>
                    <p>Mexico</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-gray-300">
                    <h3 className="text-white mb-2 uppercase tracking-wider">Phone</h3>
                    <p>Telephone: 000 000 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-gray-300">
                    <h3 className="text-white mb-2 uppercase tracking-wider">Email</h3>
                    <p>info@markt Torresacademy.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="pt-8 border-t border-slate-800">
              <h3 className="text-xl text-white uppercase mb-4 tracking-wider">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl uppercase text-white mb-8 tracking-wider">Leave a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white text-sm uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white text-sm uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white text-sm uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your goals and how we can help..."
                  rows={8}
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

