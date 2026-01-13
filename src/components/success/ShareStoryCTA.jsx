/**
 * Share Story CTA Component
 * Form for students to submit success stories
 */
import React from 'react';
import { FaPaypal, FaArrowRight } from 'react-icons/fa';

function ShareStoryCTA() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Want to be featured as our next success story?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Did you recently pass the NCLEX? Share your success story with our team to become our next featured student!
          </p>
          
          {/* Success Story Example Link */}
          <div className="mb-8">
            <a 
              href="https://bootcamp.com/success-stories/how-marisol-passed-the-nclex-while-balancing-work-and-motherhood"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View a success story example
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaPaypal className="text-blue-600 text-3xl" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-6">
              <span className="text-blue-600">$25</span> via PayPal!
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">
                  Share your NCLEX success story to inspire other students
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">
                  Get featured on our website as a success story
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">
                  Receive $25 via PayPal as a thank you gift
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 font-medium">
                  <span className="font-bold">Note:</span> Make sure each response is at least 100 words to receive payment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Share Your Success Story
            </h3>
            
            <form className="space-y-6">
              {/* School Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  School *
                </label>
                <input
                  type="text"
                  placeholder="Name of your college / university"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              {/* Story Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  How did you use NCLEX Bootcamp to prepare for the NCLEX? *
                </label>
                <textarea
                  placeholder="Tell us your story... (Minimum 100 words)"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  Please write at least 100 words to qualify for the $25 reward.
                </p>
              </div>

              {/* Additional Fields (if needed) */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02]"
              >
                Submit Your Success Story
              </button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                By submitting, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Have questions about submitting your story? Email us at{" "}
            <a href="mailto:team@bootcamp.com" className="text-blue-600 hover:text-blue-800 font-medium">
              team@bootcamp.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ShareStoryCTA;