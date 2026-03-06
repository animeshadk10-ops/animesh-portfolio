import React from 'react';
import { motion } from 'framer-motion';

const EditorialBackgroundText = () => {
    return (
        <div className="absolute inset-0 z-[-2] pointer-events-none overflow-hidden w-full flex items-center justify-center opacity-10">
            <style>{`
        .hollow-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
        }
      `}</style>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -2000] }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
                <div className="text-[15vw] font-black uppercase hollow-text select-none tracking-tight">
                    ANIMESH ANIMESH ANIMESH ANIMESH ANIMESH
                </div>
            </motion.div>
        </div>
    );
};

export default EditorialBackgroundText;
