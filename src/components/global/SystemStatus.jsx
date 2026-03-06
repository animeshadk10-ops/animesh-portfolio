import React from 'react';

const SystemStatus = () => {
    return (
        <div className="fixed top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest">
                SYS: ONLINE // CCU
            </span>
        </div>
    );
};

export default SystemStatus;
