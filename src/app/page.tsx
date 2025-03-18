'use client';
import { useEffect, useState } from 'react';
import { getTimeUntilChristmas } from '../utils/contador';
import { TimeUntilChristmas } from '@/types/timer';
import RobertoCarlos from '@/components/RobertoCarlos';
import Counter from '@/components/Counter';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<null | TimeUntilChristmas>(getTimeUntilChristmas);

  useEffect(() => {
    const updateTimer = () => setTimeLeft(getTimeUntilChristmas());
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft === null ? (
    <RobertoCarlos />
  ) : (
    <Counter timeLeft={timeLeft} />
  );
}