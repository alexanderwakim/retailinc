import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Get In Touch</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 mb-12">
            We'd love to hear from you. Reach out to us through any of the following channels:
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 border border-gray-200 hover:border-gray-900 transition-colors">
              <Mail className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:support@retail-inc.com"
                  className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                >
                  support@retail-inc.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 border border-gray-200 hover:border-gray-900 transition-colors">
              <Phone className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <a
                  href="tel:+96170123456"
                  className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                >
                  +961 70 123 456
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
