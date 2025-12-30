import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/pubnub_logo.png'; // अपना लोगो पथ चेक करें

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: '',
    role: '',
    industry: '',
    goal: []
  });

  // Next Step Handler
  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Final submission logic
      console.log("Onboarding Data:", formData);
      navigate('/home'); 
    }
  };

  const handleSkip = () => {
      navigate('/home');
  };

  // --- Step 1: Job Title ---
  const renderStep1 = () => (
    <div className="space-y-6">
       <h2 className="text-xl font-normal text-gray-800">What is your job title?</h2>
       <div className="space-y-3">
          {['Developer', 'Product Manager', 'Business Analyst', 'Business Operations', 'CxO/Founder', 'Engineering Manager', 'Student', 'Other'].map((item) => (
             <label key={item} className={`flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50 transition ${formData.jobTitle === item ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                <input 
                  type="radio" 
                  name="jobTitle" 
                  value={item}
                  checked={formData.jobTitle === item}
                  onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                  className="mr-3 accent-[#CE2029]"
                />
                <span className="text-gray-700 text-sm">{item}</span>
             </label>
          ))}
       </div>
    </div>
  );

  // --- Step 2: Role ---
  const renderStep2 = () => (
    <div className="space-y-6">
       <h2 className="text-xl font-normal text-gray-800">What is your role?</h2>
       <div className="space-y-3">
          {[
            { title: 'Decision maker', desc: 'My goal is to evaluate the value of your solution' },
            { title: 'Stakeholder', desc: 'My goal is to support my team in choosing the proper solution' },
            { title: 'User', desc: 'My goal is to learn about the usability and functionality of your solution' },
            { title: 'Non-commercial user', desc: 'I am a student, hobbyist or other' }
          ].map((item) => (
             <label key={item.title} className={`flex items-start p-3 border rounded cursor-pointer hover:bg-gray-50 transition ${formData.role === item.title ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value={item.title}
                  checked={formData.role === item.title}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="mt-1 mr-3 accent-[#CE2029]"
                />
                <div>
                    <span className="block text-gray-800 font-medium text-sm">{item.title}</span>
                    <span className="text-xs text-gray-500">{item.desc}</span>
                </div>
             </label>
          ))}
       </div>
    </div>
  );

  // --- Step 3: Industry ---
  const renderStep3 = () => (
    <div className="space-y-6">
        <h2 className="text-xl font-normal text-gray-800">Select your primary industry</h2>
        <select 
            className="w-full p-3 border border-gray-300 rounded bg-white text-gray-700 focus:border-[#CE2029] focus:outline-none text-sm"
            value={formData.industry}
            onChange={(e) => setFormData({...formData, industry: e.target.value})}
        >
            <option value="">Select option</option>
            <option value="Digital Health & Fitness">Digital Health & Fitness</option>
            <option value="Gaming">Gaming</option>
            <option value="EdTech">EdTech</option>
            <option value="Transport & Delivery">Transport & Delivery</option>
            <option value="Enterprise Software">Enterprise Software</option>
            <option value="eCommerce & Retail">eCommerce & Retail</option>
            <option value="Sports, Media & Entertainment">Sports, Media & Entertainment</option>
        </select>
    </div>
  );

    // --- Step 4: Goals ---
    const renderStep4 = () => (
        <div className="space-y-6">
           <h2 className="text-xl font-normal text-gray-800">What brings you to PubNub?</h2>
           <div className="space-y-3">
              {[
                'Build a proof of concept',
                'Build functionality into a live application',
                'Explore features and capabilities',
                'Joining my company account',
                'Speak to an expert'
              ].map((item) => (
                 <label key={item} className={`flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50 transition ${formData.goal.includes(item) ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                    <input 
                      type="checkbox" 
                      name="goal" 
                      value={item}
                      checked={formData.goal.includes(item)}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData(prev => ({
                            ...prev,
                            goal: prev.goal.includes(val) 
                                ? prev.goal.filter(g => g !== val)
                                : [...prev.goal, val]
                        }));
                      }}
                      className="mr-3 accent-[#CE2029]"
                    />
                    <span className="text-gray-700 text-sm">{item}</span>
                 </label>
              ))}
           </div>
        </div>
      );

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-gray-50 font-sans">
      
      {/* Header Logo */}
      <div className="mb-10 text-center">
         <div className="flex justify-center items-center gap-1 mb-6">
             <span className="text-2xl text-gray-700">Welcome to</span>
             {/* Logo image use kar sakte hain ya text */}
             <span className="text-[#CE2029] font-bold text-2xl">pubnub</span>
         </div>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-[550px] bg-white p-10 rounded shadow-sm border border-gray-100">
        
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-10">
            <button 
                onClick={handleSkip}
                className="text-[#008da8] font-medium hover:underline text-sm"
            >
                Skip
            </button>
            <button 
                onClick={handleNext}
                className="bg-[#e49b9e] text-white py-2.5 px-8 rounded text-sm font-bold tracking-wide hover:bg-[#d47a7e] transition shadow-sm uppercase"
            >
                {step === 4 ? 'Next' : 'Next'}
            </button>
        </div>

      </div>
    </div>
  );
};

export default Onboarding;