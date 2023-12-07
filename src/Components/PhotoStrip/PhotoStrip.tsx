import "./styles.css"

import React from 'react';

interface PhotoStripProps {
    path: string;
}

export const PhotoStrip: React.FC<PhotoStripProps> = ({ path }) => {
    return (
        <div className="photo-strip">
            <div key="photo" className="photo-container" style={{ backgroundImage: `url(${path})`}}>
                    {/* <img src={path}>
                    </img> */}
                </div>
        
        </div>
    );
};
