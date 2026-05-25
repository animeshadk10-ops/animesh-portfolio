import React, { useState, useEffect } from 'react';

const SystemStatus = () => {
    const [uptime, setUptime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setUptime((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatUptime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed top-8 right-8 z-50 flex items-center gap-4 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hidden md:flex">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest">
                    SYS: ONLINE
                </span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-500 font-mono tracking-widest">
                    UPTIME:
                </span>
                <span className="text-[10px] text-[#00F0FF] font-mono tracking-widest">
                    {formatUptime(uptime)}
                </span>
            </div>
        </div>
    );
};

export default SystemStatus;
