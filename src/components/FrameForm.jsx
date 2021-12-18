import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const FrameForm = ({cb__add_frame, next_frame}) => {
    const [frame, setFrame] = useState({scene_id: 0})
    const addNewFrame = (e) => {
        e.preventDefault()
        const newFrame = {
            scene_id: frame.scene_id
        }
        console.log(newFrame)
        cb__add_frame(newFrame)
        setFrame({scene_id: 0})
    }

    return (
        <form>
            <strong>Frame {next_frame}</strong>
            <MyInput
                value={frame.scene_id}
                onChange={e => setFrame({scene_id: parseInt(e.target.value)})}
                type="number"
                placeholder="Scene number..."/>
            <MyButton onClick={addNewFrame}>Add</MyButton>
        </form>
    );
};

export default FrameForm;