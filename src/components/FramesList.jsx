import React from 'react';
import FrameItem from "./FrameItem";

const FramesList = ({frames}) => {
    return (
        <div>
            <h2>Timeline</h2>
            {frames.map(frame =>
                <FrameItem frame={frame} key={frame.id}/>
            )}
        </div>
    );
};

export default FramesList;