import React, { useState } from "react";
import PopupModal from "../Popup/Popup";

const EducationForm: React.FC = () => {
  const [institution, setInstitution] = useState("WESOnline");
  const [journey, setJourney] = useState("100");
  const [fieldOfStudy, setFieldOfStudy] = useState("Chemistry");
  const [gpa, setGpa] = useState("");
  const [interest, setInterest] = useState("Business & Management");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true); // Show the modal after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-9 sm:p-8">

        <div className="flex justify-center items-center gap-4 mb-4 bg-red-700 p-8">
          <div className="w-1/4 h-[5px] bg-[#0256B2] bg-opacity-90 rounded-lg"></div>
          <div className="w-1/4 h-[5px] bg-[#E6EEF7] bg-opacity-95 rounded-lg "></div>
          <div className="w-1/4 h-[5px] bg-[#E6EEF7] bg-opacity-95 rounded-lg "></div>
          <div className="w-1/4 h-[5px] bg-[#E6EEF7] bg-opacity-95 rounded-lg "></div>
        </div>
        {/* Header Section */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center">Your Education 🎓</h2>
        <p className="text-gray-500 text-center text-sm sm:text-base">
          Tell us about your academic background
        </p>
        <p className="text-[#0256B2] text-opacity-90 text-center font-medium mt-2 text-sm">
          800 WESPoints remaining to unlock ESA
        </p>

        {/* Reward Box */}
        <div className="bg-[#E6EEF7] text-[#0057D9] p-4 rounded-md mt-4 text-center flex justify-start items-center gap-3">
          <img src="/gift.png" alt="" />
           <p className="font-extrabold">Your Reward for this step is <strong>200 WESPoints</strong></p>
        </div>

        {/* Form Section */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Institution Field */}
          <div className="relative">
            <label className="block text-sm font-bold text-black">
              Name of Institution <span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block text-[#7F8184] w-full focus:outline-none p-3 border appearance-none bg-transparent border-gray-300 rounded-md"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            >
              <option value="WESOnline">WESOnline</option>
              <option value="University A">University A</option>
              <option value="University B">University B</option>
            </select>

            <div className="absolute inset-y-0 top-6 right-3 justify-center flex items-center pointer-events-none">
              <img src="/arrow.png" alt="" />
            </div>
          </div>

          {/* Journey & Level */}
          <div className="relative">
             <label className="block text-sm font-bold text-black">
                Where are you on your journey? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block text-[#7F8184] w-full focus:outline-none p-3 border border-gray-300 rounded-md"
                value={journey}
                onChange={(e) => setJourney(e.target.value)}
              />

              <div className="absolute inset-y-0 top-6 right-3 justify-center flex items-center pointer-events-none">
                 <p className="text-[#7F8184] absolute right-7">Level</p>
                <img src="/arrow.png" alt="" />
               </div>
            </div>

          <div className="grid grid-cols-2 gap-4 ">
            {/* Field of Study */}
            <div>
              <label className="block text-sm font-bold text-black">
                Field Of Study <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full text-[#7F8184] focus:outline-none p-3 border border-gray-300 rounded-md"
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
              />
            </div>

            {/* GPA */}
            <div>
              <label className="block text-sm font-bold text-black">
                GPA <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block text-[#7F8184] w-full focus:outline-none p-3 border border-gray-300 rounded-md"
                placeholder="-----"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
              />
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="relative">
            <label className="block text-sm font-bold text-black">
              What areas interest you most?
            </label>
            <select
              className="mt-1 block w-full text-[#7F8184] focus:outline-none appearance-none bg-transparent p-3 border border-gray-300 rounded-md"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option value="Business & Management">Business & Management</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
            </select>

            <div className="absolute inset-y-0 top-6 right-3 justify-center text-2xl flex items-center pointer-events-none">
              <img src="/arrow.png" alt="" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 pt-10">
            <button className="w-full sm:w-auto px-4 py-3 text-black font-bold text-[16px]">
              Skip For Now
            </button>
            <button className="w-full sm:w-auto px-16 py-3 text-white font-bold bg-[#0256B2] rounded-lg hover:bg-blue-700">
              Continue
            </button>
          </div>
        </form>
      </div>

   {/** Render the Popup Modal Component */}

   <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default EducationForm;
