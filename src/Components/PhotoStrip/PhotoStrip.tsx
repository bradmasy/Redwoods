import "./styles.css"

import React from 'react';

interface PhotoStripProps {
    paths: string[];
}

export const PhotoStrip: React.FC<PhotoStripProps> = ({ paths }) => {
    return (
        <div className="photo-strip">
            {paths.map((path, index) => (
                <div key={index} className="photo-container" style={{ backgroundImage: `url(${path})`}}>
                    {/* <img src={path}>
                    </img> */}
                </div>
            ))}
        </div>
    );
};
