import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import welcomeImage from '../assets/halo.jpg';


function Home() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [showPopup, setShowPopup] = useState(true); // State untuk mengontrol popup
  const navigate = useNavigate();
  const sentences = [
    "Untuk Amelia Azzahra,",
    "aku punya sesuatu untukmu..",
  ];

  // Fungsi untuk menangani klik pada konten utama (jika popup sudah ditutup)
  const handleClick = () => {
    if (visibleCount < sentences.length) {
      setVisibleCount(visibleCount + 1);
    } else {
      navigate('/pictures');
    }
  };

  // Fungsi untuk menutup popup
  const closePopup = (e) => {
    e.stopPropagation(); // Agar klik pada tombol popup tidak memicu handleClick pada container utama
    setShowPopup(false);
  };

  return (
    <div 
      className="flex flex-col min-h-screen cursor-pointer w-full items-center justify-center overflow-clip" 
      onClick={!showPopup ? handleClick : undefined}
    >
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <p className="text-xl font-bold mb-4">Aloooo Selamat Datang!</p>
            <img 
              src={welcomeImage} 
              alt="Welcome" 
              className="w-32 h-32 object-contain mx-auto mb-4" 
            />
            <p className="mb-4">Semoga kamu suka ya!!</p>
            <p className="mb-2">Note: Tingkatkan volume!</p>
            <button 
              className="px-4 py-2 bg-customBlue text-white rounded"
              onClick={closePopup}
            >
              Mulai!
            </button>
          </div>
        </div>
      )}

      {/* Konten Pesan */}
      {!showPopup && (
        <div className="w-[90%] max-w-[400px] px-8">
          {sentences.slice(0, visibleCount).map((sentence, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-4xl font-bold text-customBlue drop-shadow-lg"
            >
              {sentence}
            </motion.p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
