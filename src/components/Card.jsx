import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom'; 
import myAudio from '../audio/hbd.mp3';

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true); 
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };
  const playAudio = () => {
    const audio = document.getElementById('myAudio');
    if (audio) {
      audio.play().catch((error) => console.error('Error playing audio:', error));
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
    <div className="w-[400px]  h-screen flex flex-col items-center justify-center">
             <audio autoPlay loop>
              <source src={myAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
      <motion.div  initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{duration: 1.2}}>
      <div id="card" className={`${cardClass}`} onClick={toggleCard}>     
        <div id="card-inside">
          <div className="wrap">
            <p>Selamat Ulang Tahun!</p>
            <p>Semoga ditahun ini dan seterusnya, dilancarkan rezekinya, dimudahkan segalanya, dipanjangkan umurnya. Aamiin...
            </p>
            <p>Kamu hebat udah ngelewatin banyak hal, langkah demi langkah kamu jalani. 
              Semoga cape,lelah bisa jadi keberkahan ya, tercapai segala keinginan dan cita-citanya ya, proud off you 😊..
            </p>
            <p>
            Aku selalu ada untukmu, mendukungmu, mendoakanmu, mencintaimu.
            </p>

            <p className="signed">Mas hapis</p>
          </div>
        </div>

        <div id="card-front">
          <div className="wrap">
            <h1>Happy Birthday!</h1>
          </div>
        </div>
    </div>

      </motion.div>

    {/* prone to bugs */}
      {isCardOpened && (
        <motion.div className="-mt-[3rem]" initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{duration: 1.2}}> 
        <Link to ='/cake'>
        <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
            Berikutnya
          </p>
        </Link>
            
        </motion.div>
         
        )}

    </div>
    
    </div>
    
  );
}

export default Card;