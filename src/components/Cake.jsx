import React, { useState } from 'react';
import "../assets/css/cake.css";
import { CakeSVG, confetti } from '../assets';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import myAudio from '../audio/hbd1.mp3';

function Cake() {
  const [candlesBlownOut, setCandlesBlownOut] = useState(false);

  // Opsi 1: Menggunakan tombol untuk mendeteksi tiupan
  const handleBlowButton = () => {
    setCandlesBlownOut(true);
  };

  // Opsi 2: Menggunakan event sentuhan (touch events) untuk mendeteksi durasi sentuhan
  let touchStartTime = 0;
  const handleTouchStart = () => {
    touchStartTime = Date.now();
  };

  const handleTouchEnd = () => {
    const touchDuration = Date.now() - touchStartTime;
    // Jika durasi sentuhan lebih dari 1500 ms, anggap sebagai "tiupan"
    if (touchDuration > 1500) {
      setCandlesBlownOut(true);
    }
  };
  const playAudio = () => {
    const audio = document.getElementById('myAudio');
    if (audio) {
      audio.play().catch((error) => console.error('Error playing audio:', error));
    }
  };
  return (
    <div 
      className="bg-black/80 h-screen w-screen flex items-center justify-center overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {candlesBlownOut && (
        <div
          className="absolute inset-0 bg-cover bg-center z-50"
          style={{
            backgroundImage: `url(${confetti})`,
          }}
        />
      )}
      {candlesBlownOut && (
        <motion.div
          className="absolute top-20 text-white text-3xl font-bold z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg width="800" height="200" viewBox="0 0 400 200">
            <defs>
              <path
                id="curve"
                d="M50,150 Q200,50 350,150"
                fill="transparent"
                stroke="white"
              />
            </defs>
            <text fontSize="40" fill="white" textAnchor="middle">
              <textPath href="#curve" startOffset="50%">
                Happy Birthday!
              </textPath>
            </text>
          </svg>
          <Link to='/present' className="flex justify-center items-center">
            <p className="absolute top-[30rem] xs:top-[36rem] s:top-[40rem] px-7 py-3 bg-customBlue text-white rounded-full hover:bg-blue-600 font-medium text-base text-center ">
              Berikutnya
            </p>
          </Link>
        </motion.div>
      )}
      <div className="relative z-10">
        <div className="absolute -top-48 left-1/2 transform -translate-x-1/2">
          <div className="candle">
            {!candlesBlownOut && (
              <>
                <div className="flame"></div>
                <div className="flame"></div>
                <div className="flame"></div>
                <div className="flame"></div>
                <div className="flame"></div>
              </>
            )}
          </div>
        </div>
        <CakeSVG/>
      </div>
                   <audio autoPlay loop>
                    <source src={myAudio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
      {/* Tombol untuk mendeteksi aksi "tiup lilin" (Opsi 1) */}
      {!candlesBlownOut && (
  <div className="button-container">
  <button 
    onClick={handleBlowButton} 
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  >
    Tekan untuk tiup lilin
  </button>
</div>
      )}
    </div>
  );
}

export default Cake;
