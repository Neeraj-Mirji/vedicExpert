
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '8',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Start Your Journey To Excellence Today.
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have questions about our curriculum or admission process? Our academic counselors are here to help you make the right choice for your child's future.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Campus</h4>
                  <p className="text-slate-500">Vedic Tower, Tech Square, Bengaluru, KA 560001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-500">admissions@vedicexpert.edu</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-500">+91 98765 43210 (Mon-Sat, 9AM-7PM)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Request Sent!</h4>
                  <p className="text-slate-600">Thank you for your interest. An expert counselor will contact you within 24 hours.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Student Name</label>
                      <input 
                        type="text" required
                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all outline-none"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Current Grade</label>
                      <select 
                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all outline-none appearance-none"
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      >
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" required
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all outline-none"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" required
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all outline-none"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Additional Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all outline-none resize-none"
                      placeholder="Tell us about your child's academic goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                  >
                    Request Free Call-back
                  </button>
                  <p className="text-center text-slate-500 text-xs">
                    By submitting, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
