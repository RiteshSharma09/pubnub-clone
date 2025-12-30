import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { FiUsers, FiMonitor, FiBriefcase } from 'react-icons/fi'; // Icons
import { FaUserTie, FaTools, FaHandshake } from 'react-icons/fa'; // More specific icons

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    newsletter: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to 'contact_us_leads' collection
      await addDoc(collection(db, "contact_us_leads"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      alert("Message sent successfully!");
      setFormData({ firstName: '', lastName: '', email: '', company: '', phone: '', message: '', newsletter: true });

    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error sending message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* --- SECTION 1: HEADER & CARDS --- */}
      <div className="bg-white pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Get in touch with us</h1>
          <p className="text-gray-500 mb-16">Let us know how we can help!</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: SALES */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition text-left group">
              <div className="w-12 h-12 mb-6 text-[#CE2029]">
                 <FaUserTie size={40} className="stroke-1" /> {/* Tie Icon */}
              </div>
              <h3 className="font-bold text-gray-800 mb-2 uppercase tracking-wide text-sm">SALES</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Find out how PubNub can help your business
              </p>
            </div>

            {/* Card 2: SUPPORT */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition text-left group">
              <div className="w-12 h-12 mb-6 text-[#CE2029]">
                 <div className="relative">
                    <FiMonitor size={42} />
                    <FaTools size={16} className="absolute bottom-0 right-0 bg-white rounded-full p-0.5" />
                 </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 uppercase tracking-wide text-sm">SUPPORT</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Can't find answer anywhere else? Raise a support ticket
              </p>
            </div>

            {/* Card 3: PARTNERSHIP */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition text-left group">
              <div className="w-12 h-12 mb-6 text-[#CE2029]">
                 <FiUsers size={42} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 uppercase tracking-wide text-sm">PARTNERSHIP</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Find a system integrator or IT consultant to help with your project.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 2: DARK BLUE FORM SECTION --- */}
      {/* Rounded top corners to match image style */}
      <div className="bg-[#020B2D] py-20 rounded-t-[50px] -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* LEFT: ADDRESS INFO */}
          <div className="text-white pt-10">
            <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Corporate Headquarters</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                    95 Third Street<br />
                    2nd Floor<br />
                    San Francisco, CA 94103
                </p>
                <a href="#" className="text-[#00B2FF] text-sm hover:underline mt-2 inline-block">Directions</a>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-4">Additional Contact</h3>
                <p className="text-gray-300 text-sm">Phone: +1 (415) 223-7552</p>
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
                
                <InputGroup label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <InputGroup label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <InputGroup label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                <InputGroup label="Company Name" name="company" value={formData.company} onChange={handleChange} />
                <InputGroup label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea 
                    name="message" 
                    rows="3"
                    value={formData.message} 
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded focus:border-[#CE2029] outline-none text-sm resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input 
                    type="checkbox" 
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 accent-[#CE2029]"
                  />
                  <label htmlFor="newsletter" className="text-xs text-gray-500">
                    Subscribe to PubNub Newsletter & Updates
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#CE2029] hover:bg-[#b01b23] text-white font-bold py-3 rounded transition shadow-sm mt-4 disabled:opacity-70"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>

                <p className="text-[10px] text-gray-400 mt-4 text-center leading-tight">
                    By submitting, you agree to our <a href="#" className="underline">Terms and Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
                </p>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

/* --- Helper Component --- */
const InputGroup = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-xs font-semibold text-gray-700 mb-1">
      {label} {required && '*'}
    </label>
    <input 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2.5 border border-gray-300 rounded focus:border-[#CE2029] outline-none text-sm transition"
    />
  </div>
);

export default ContactUs;