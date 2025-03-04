import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10, picture11, picture12, picture13, picture14, picture15, picture16, picture17, picture18, picture19 } from '../assets';
import { Link } from 'react-router-dom'; 
import SectionWrapper from './SectionWrapper';
import myAudio from '../audio/hbd.mp3';
// Add your own images by putting them in the assets folder and import them.
const images = [
 picture1,
 picture2,
 picture3,
 picture4,
 picture5,
 picture6,
 picture18,
 picture15,
 picture11,
 picture7,
 picture8,
 picture9,
 picture10,
 picture12,
 picture13,
 picture19,
 picture16,
 picture17,
 picture14
];
function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };
  const allImagesLoaded = loadedImages === images.length;
  return (
    <SectionWrapper>
       <audio autoPlay loop>
        <source src={myAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Link to="/card">
        <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
          Happy birthday gomel:3        
          -Berikutnya..
        </p>
      </Link>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Tunggu yaa...</p>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad} // Increment the counter when the image loads
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;
