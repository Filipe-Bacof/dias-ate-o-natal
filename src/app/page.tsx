'use client';
import { useEffect, useState } from 'react';
import { getTimeUntilChristmas } from '../utils/contador';
import { TimeUntilChristmas } from '@/types/timer';
import { getTextColorClass } from '@/utils/colors';

export default function Home() {
  const urlRobertoCarlos = "https://www.youtube.com/embed/E-1NIzeNgQo?si=PrTui6B1TLyPEatu&autoplay=1";
  const urlRobertoCarlosMutada = `${urlRobertoCarlos}&mute=1`;
  const [timeLeft, setTimeLeft] = useState<null | TimeUntilChristmas>(getTimeUntilChristmas);
  const [showUnlockScreen, setShowUnlockScreen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const updateTimer = () => setTimeLeft(getTimeUntilChristmas());
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlock = () => {
    setShowUnlockScreen(false);
    setIsMuted(false);
  };

  if (timeLeft === null) {
    return (
      <div className="relative w-full h-full bg-black">
        {showUnlockScreen && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center text-white text-xl font-bold z-50 cursor-pointer"
            onClick={handleUnlock}
          >
            <p className='text-red-600 text-6xl font-extrabold'></p>
          </div>
        )}
        <iframe
          className="w-full h-full"
          width="560"
          height="315"
          src={urlRobertoCarlosMutada}
          title="Feliz Natal"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ display: isMuted ? 'block' : 'none' }}
        />
        <iframe
          className="w-full h-full"
          width="560"
          height="315"
          src={urlRobertoCarlos}
          title="Feliz Natal"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ display: isMuted ? 'none' : 'block' }}
        />
      </div>
    );
  } else {
    const color = getTextColorClass(timeLeft.days);
    return (
      <div className={`${color} flex flex-col items-center justify-center w-full h-screen bg-black text-2xl font-bold text-center`}>
        <p>Faltam</p>
        <p>
          {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos e {timeLeft.seconds} segundos
        </p>
        <p>para o Natal!!!</p>
      </div>
    );
  };
}