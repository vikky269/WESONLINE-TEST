import React from "react";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white px-6 py-10 rounded-lg shadow-lg text-center w-80 sm:w-[420px]">
        <img src="/wow.png" alt="Wow!" className="mx-auto w-20" />
        <h3 className="text-[#5EC26A] font-bold text-lg mt-2">Congratulations</h3>
        <p className="text-[#666666] text-sm mt-4">You've earned 1000 WESPoints</p>

        <div className="bg-[#E6EEF7] text-[#0057D9] px-4 py-6 rounded-md mt-8">
          <div className="flex justify-center items-center gap-1 mb-3">
          <img src="/gift.png" alt="" /> 
          <strong>Your Rewards</strong>
          </div>
          <p className="text-lg font-semibold">2000 WESPoint Unlocked</p>
          <p className="text-sm text-[#0256B2] font-medium mt-4 text-opacity-90">
            Want to know your employability status? Take the ESA with your 2000 WESPoints to get started!
          </p>
        </div>

        <button
          className="w-full mt-4 bg-[#0256B2] text-white py-2 rounded-md hover:bg-blue-700"
          onClick={onClose}
        >
          Take ESA
        </button>
      </div>
    </div>
  )
}

export default PopupModal;
