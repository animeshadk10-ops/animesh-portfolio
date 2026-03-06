import React from 'react';

const EnvironmentGrid = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-30">
            <style>{`
        .env-grid {
          background-size: 50px 50px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
      `}</style>
            <div className="w-full h-full env-grid mask-image-radial" />
        </div>
    );
};

export default EnvironmentGrid;
