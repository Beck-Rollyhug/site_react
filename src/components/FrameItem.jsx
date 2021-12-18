import React from 'react';
import '../styles/FrameItem.css'
import MyButton from "./UI/button/MyButton";

const FrameItem = (props) => {
    let id = props.frame.id
    let scene_id = props.frame.scene_id

    return (
        <div className="frame">
            <div className="frame__content">
                <strong>Frame {id+1}</strong>
                <div>
                    Scene #{scene_id}
                </div>
            </div>
            <div className="frame__btns">
                <MyButton onClick={() => props.remove(props.frame)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default FrameItem;