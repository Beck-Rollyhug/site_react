import React from 'react';
import FrameItem from "./FrameItem";

const FramesList = ({frames, remove}) => {
    return (
        <div>
            {frames.map(frame =>
                <FrameItem
                    frame={
                        {
                            id: frames.indexOf(frame),
                            scene_id: frame.scene_id
                        }
                    }
                    remove={remove}
                    key={frames.indexOf(frame)+1}/>
            )}
        </div>
    );
};

export default FramesList;