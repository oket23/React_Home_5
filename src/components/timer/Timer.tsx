import { useState } from "react";
import TimerDisplay from "../timer-display/TimerDisplay";

const Timer = () => {
    const [pause, setPause] = useState(false);
    const [reset, setReset] = useState(false);

    const handleReset = () => {
        setReset(false);
        setPause(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white font-mono p-4 sm:p-6">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] p-6 sm:p-8 flex flex-col items-center space-y-8">

                <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-widest text-gray-200 text-center">Timer</h1>

                <TimerDisplay isPause={pause} isReset={reset} onResetDone={handleReset} />

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center items-center">
                    <button
                        onClick={() => setPause(prev => !prev)}
                        className={`flex-1 sm:flex-none px-8 py-3 rounded-2xl font-semibold text-lg tracking-wider transition-all duration-300 active:scale-95 text-center
                            ${pause
                            ? "bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-400/30"
                            : "bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border border-yellow-400/30"
                        }`}
                    >
                        {pause ? "Start" : "Pause"}
                    </button>

                    <button
                        onClick={() => setReset(true)}
                        className="flex-1 sm:flex-none px-8 py-3 rounded-2xl font-semibold text-lg tracking-wider border border-red-400/30 bg-red-500/20 hover:bg-red-500/30 text-red-300 transition-all duration-300 active:scale-95 text-center"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
