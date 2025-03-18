import { Timer } from "@/types/timer";
import { getTextColorClass } from "@/utils/colors";

type CounterProps = {
    timeLeft: Timer;
}

export default function Counter ({timeLeft}: CounterProps) {
    const color = getTextColorClass(timeLeft.days);
    return (
        <div
            className={
                `${color} flex flex-col items-center justify-center
                w-full h-screen bg-black text-2xl font-bold text-center`
            }
        >
            <p>Faltam</p>
            <p>
            {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos e {timeLeft.seconds} segundos
            </p>
            <p>para o Natal!!!</p>
        </div>
    )
}