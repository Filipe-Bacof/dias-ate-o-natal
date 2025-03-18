const getTextColorClass = (daysLeft: number): string => {
    if (daysLeft > 200) return "text-white";
    if (daysLeft > 180) return "text-gray-300";
    if (daysLeft > 120) return "text-gray-200";
    if (daysLeft > 90) return "text-green-300";
    if (daysLeft > 60) return "text-green-400";
    if (daysLeft > 30) return "text-green-500";
    if (daysLeft > 24) return "text-green-600"; // 1º de dezembro
    if (daysLeft > 14) return "text-green-700";
    if (daysLeft > 7) return "text-red-500";
    if (daysLeft > 3) return "text-red-600";
    if (daysLeft > 2) return "text-red-700";
    if (daysLeft > 1) return "text-yellow-400";
    if (daysLeft === 0) return "text-white"; // Natal chegou

    return "text-white"; // Caso o valor seja inesperado
};

export { getTextColorClass }