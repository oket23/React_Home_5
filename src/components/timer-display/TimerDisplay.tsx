import { useEffect, useState } from "react";

type TimerDisplayProps = {
    isPause: boolean;
    isReset: boolean;
    onResetDone: () => void;
};

const TimerDisplay = ({ isPause, isReset, onResetDone }: TimerDisplayProps) => {
    const [totalSeconds, setTotalSeconds] = useState(0);

    useEffect(() => {
        if (isReset) {
            setTotalSeconds(0);
            onResetDone();
            return;
        }

        if (isPause) return;

        const interval = setInterval(() => {
            setTotalSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isPause, isReset, onResetDone]);

    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;

    return (
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-center">
            {hours > 0 && (
                <div className="flex flex-col items-center px-3 py-2 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-2xl shadow-inner transition-all duration-300 hover:bg-white/10">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.3)]">
                    {hours.toString().padStart(2, "0")}
                </span>
                    <span className="text-xs sm:text-sm text-gray-400 uppercase mt-1 tracking-wider">h</span>
                </div>
            )}

            {(minutes > 0 || hours > 0) && (
                <div className="flex flex-col items-center px-3 py-2 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-2xl shadow-inner transition-all duration-300 hover:bg-white/10">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.3)]">
                    {minutes.toString().padStart(2, "0")}
                </span>
                    <span className="text-xs sm:text-sm text-gray-400 uppercase mt-1 tracking-wider">m</span>
                </div>
            )}

            <div className="flex flex-col items-center px-3 py-2 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-2xl shadow-inner transition-all duration-300 hover:bg-white/10">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.3)]">
                {seconds.toString().padStart(2, "0")}
            </span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase mt-1 tracking-wider">s</span>
            </div>
        </div>
    );
};

export default TimerDisplay;
