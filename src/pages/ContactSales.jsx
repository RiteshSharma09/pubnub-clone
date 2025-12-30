import React, { useState } from 'react';
import { db } from '../firebase'; // Firestore import
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/pubnub_logo.png'; // Logo path check karein

const ContactSales = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    useCase: '',
    country: '',
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
      // 1. Data Firestore m save karein (collection name: 'contact_leads')
      await addDoc(collection(db, "contact_leads"), {
        ...formData,
        createdAt: serverTimestamp(), // Timestamp add karein
        status: 'new'
      });

      alert("Thank you! Our experts will contact you shortly.");
      setFormData({ firstName: '', lastName: '', email: '', company: '', useCase: '', country: '', message: '', newsletter: true });
      navigate('/'); // Home par redirect karein (optional)

    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans">
      
      {/* --- LEFT SIDE (Dark Blue Info Panel) --- */}
      <div className="w-full lg:w-[400px] bg-[#0d1c42] text-white p-10 flex flex-col flex-shrink-0">
        <div className="mb-12">
            {/* Logo Placeholder - Text agar image nahi hai to */}
           {logoImg ? <img src={logoImg} alt="PubNub" className="h-8 w-auto mb-8" /> : <h1 className="text-2xl font-bold text-[#CE2029] mb-8">pubnub</h1>}
        </div>

        <h1 className="text-4xl font-bold leading-tight mb-6">
          Contact <br /> our <br /> experts!
        </h1>

        <p className="text-gray-300 mb-8 text-sm leading-relaxed">
          Tell us a bit about yourself by filling out the form and we'll get back to you within 24 hours to help you:
        </p>

        <ul className="space-y-6">
          <ListItem text="Understand how our product can fit your needs" />
          <ListItem text="Discover the capabilities and answer your questions" />
          <ListItem text="Talk about product options and pricing" />
        </ul>
      </div>

      {/* --- RIGHT SIDE (Form) --- */}
      <div className="flex-1 bg-white p-8 lg:p-16 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            Find out how PubNub can help your business
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
              <InputGroup label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>

            <InputGroup label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
            
            <InputGroup label="Company Name" name="company" value={formData.company} onChange={handleChange} required />

            {/* Dropdowns */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Use Case *</label>
              <select 
                name="useCase" 
                value={formData.useCase} 
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded focus:border-[#CE2029] focus:ring-1 focus:ring-[#CE2029] outline-none bg-white text-sm"
              >
                <option value="">Select...</option>
                <option value="chat">Chat & Messaging</option>
                <option value="iot">IoT Device Control</option>
                <option value="realtime">Real-time Updates</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Country *</label>
              <select 
                name="country" 
                value={formData.country} 
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded focus:border-[#CE2029] focus:ring-1 focus:ring-[#CE2029] outline-none bg-white text-sm"
              >
                <option value="">Select...</option>
                <option value="India">India</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
              <textarea 
                name="message" 
                rows="4"
                value={formData.message} 
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded focus:border-[#CE2029] focus:ring-1 focus:ring-[#CE2029] outline-none text-sm"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 mt-4">
              <input 
                type="checkbox" 
                name="newsletter"
                id="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-[#CE2029] border-gray-300 rounded focus:ring-[#CE2029]"
              />
              <label htmlFor="newsletter" className="text-xs text-gray-500">
                Subscribe to PubNub Newsletter & Updates
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#CE2029] hover:bg-[#b01b23] text-white font-bold py-3 rounded transition shadow-sm mt-4 disabled:opacity-70"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

/* --- Helper Components --- */
const ListItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <div className="mt-0.5 text-[#00b2ce]"> {/* Light blue checkmark color */}
        <FiCheck size={18} />
    </div>
    <span className="text-sm">{text}</span>
  </li>
);

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
      className="w-full p-2.5 border border-gray-300 rounded focus:border-[#CE2029] focus:ring-1 focus:ring-[#CE2029] outline-none text-sm transition"
    />
  </div>
);

export default ContactSales;