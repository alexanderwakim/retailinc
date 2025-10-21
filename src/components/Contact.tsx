import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { countryCodes } from '../data/countryCodes';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const lebanonCode = countryCodes.find(c => c.code === '+961') || countryCodes[0];
  const [countryCode, setCountryCode] = useState(lebanonCode);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return countryCodes;
    const query = searchQuery.toLowerCase();
    return countryCodes.filter(
      country =>
        country.country.toLowerCase().includes(query) ||
        country.code.includes(query)
    );
  }, [searchQuery]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.fullName,
            phone_number: `${countryCode.code} ${formData.phoneNumber}`,
            email: formData.email,
            message: formData.message,
          },
        ]);

      if (error) {
        console.error('Supabase error:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          message: '',
        });
        setCountryCode(lebanonCode);
        setSearchQuery('');
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
              <div className="space-y-3">
                <div className="flex relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-white hover:bg-gray-50 transition-colors cursor-pointer rounded-l"
                  >
                    <span className="text-2xl mr-1" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Color Emoji", sans-serif' }}>{countryCode.flag}</span>
                    <ChevronDown className="w-4 h-4 text-gray-600 ml-1" />
                  </button>

                  {isDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setSearchQuery('');
                        }}
                      />
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-300 rounded-lg shadow-xl z-50">
                        <div className="p-3 border-b border-gray-200">
                          <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-gray-500 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country, index) => (
                              <button
                                key={`${country.code}-${index}`}
                                type="button"
                                onClick={() => {
                                  setCountryCode(country);
                                  setIsDropdownOpen(false);
                                  setSearchQuery('');
                                }}
                                className="w-full flex items-center px-4 py-2.5 hover:bg-gray-100 transition-colors text-left border-b border-gray-100 last:border-b-0"
                              >
                                <span className="text-2xl mr-3" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Color Emoji", sans-serif' }}>{country.flag}</span>
                                <span className="text-gray-900 font-medium flex-shrink-0">{country.country}</span>
                                <span className="text-gray-500 text-sm ml-auto">{country.code}</span>
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-8 text-center text-gray-500 text-sm">
                              No countries found
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex items-center px-3 py-3 border border-gray-300 bg-gray-50 rounded-r">
                    <span className="text-gray-700 text-sm font-medium">{countryCode.code}</span>
                  </div>
                </div>

                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Please type your phone number..."
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors"
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
