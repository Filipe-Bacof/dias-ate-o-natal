'use client';
import { useEffect, useState } from 'react';
import { getTimeUntilChristmas } from '../utils/contador';
import { TimeUntilChristmas } from '@/types/timer';
import { getTextColorClass } from '@/utils/colors';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<null | TimeUntilChristmas>(getTimeUntilChristmas);

  useEffect(() => {
    const updateTimer = () => setTimeLeft(getTimeUntilChristmas());
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return (
      <iframe
        className="w-full h-full"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/E-1NIzeNgQo?si=PrTui6B1TLyPEatu&autoplay=1&mute=1"
        title="Feliz Natal"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
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