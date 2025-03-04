import React from 'react'
import SectionWrapper from './SectionWrapper'
import "../assets/css/present.css";
import myAudio from '../audio/meong.mp3';

function Present() {
  // Fungsi untuk memutar audio saat kotak hadiah diklik
  const playAudio = () => {
    const audio = document.getElementById('myAudio');
    if (audio) {
      audio.play().catch((error) => console.error('Error playing audio:', error));
    }
  };
  return (
    <SectionWrapper>
      <div className='mb-64'>
        <h1 className="absolute -top-[7rem] left-0 right-0 text-center flex items-center justify-center text-xl font-extrabold text-customBlue drop-shadow-lg">
          Aku punya sesuatu buat kamu! Dibuka ya, semoga kamu suka!
        </h1>
      </div>
      <div className="birthday-gift">
        <input id="click" type="checkbox" />
        <label className="gift" htmlFor="click" onClick={playAudio}>
          <div className="gift-top"></div>
          <div className="gift-bottom"></div>
          <div className="photo-container">
            <div className="entry photo-frame">
              <img src="../src/assets/Birhday.gif" alt="Foto" className="photo-image" />
            </div>
            </div>
        </label>
        {/* Audio element dengan sumber yang valid */}
        <audio id="myAudio" loop>
          <source src={myAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

    </SectionWrapper>
  );
}

export default Present;
