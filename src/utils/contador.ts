import { TimeUntilChristmas } from "@/types/timer";

function getTimeUntilChristmas(): TimeUntilChristmas {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmasDate = new Date(currentYear, 11, 25, 0, 0, 0);

    if (isChristmas()) return null;

    if (now > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }

    const diff = christmasDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
}

function isChristmas(): boolean {
    const now = new Date();
    // return true; // Para testar antes do natal
    return now.getMonth() === 11 && (now.getDate() === 24 || now.getDate() === 25)
}

export {
    getTimeUntilChristmas,
    isChristmas,
}