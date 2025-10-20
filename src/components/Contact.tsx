import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const countryCodes = [
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            phoneNumber: `${countryCode.code} ${formData.phoneNumber}`,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          message: '',
        });
        setCountryCode(countryCodes[0]);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Get In Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-900 font-medium mb-3">
                Your Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Please type your name here..."
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-gray-900 font-medium mb-3">
                Your Phone Number*
              </label>
              <div className="flex relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <span className="text-2xl mr-2">{countryCode.flag}</span>
                  <span className="text-gray-700 mr-1">{countryCode.code}</span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 shadow-lg z-50 max-h-60 overflow-y-auto">
                    {countryCodes.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          setCountryCode(country);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors text-left"
                      >
                        <span className="text-2xl mr-3">{country.flag}</span>
                        <span className="text-gray-700 font-medium mr-2">{country.code}</span>
                        <span className="text-gray-500 text-sm">{country.country}</span>
                      </button>
                    ))}
                  </div>
                )}

                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Please type your phone number..."
                  className="flex-1 px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-900 font-medium mb-3">
              Your Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Please type your email address here..."
              className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-900 font-medium mb-3">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please tell us about your inquiry here..."
              className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors resize-none"
            />
          </div>

          {submitStatus === 'success' && (
            <p className="text-green-600 font-medium">
              Thank you! Your message has been sent successfully.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-600 font-medium">
              There was an error sending your message. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Ask A Question'}
          </button>
        </form>
      </div>
    </section>
  );
}
