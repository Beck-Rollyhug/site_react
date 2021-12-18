import React from 'react';
import '../styles/FrameItem.css'

const FrameItem = (props) => {
    let id = props.frame.id
    let scene_id = props.frame.scene_id
    return (
        <div className="frame">
            <div className="frame__content">
                <strong>Frame {id}</strong>
                <div>
                    Scene #{scene_id}
                </div>
            </div>
            <div className="frame__btns">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default FrameItem;