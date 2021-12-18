import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const FrameForm = ({cb__add_frame, frames_count}) => {
    let updateCount = frames_count + 1
    const [frame, setFrame] = useState({id: updateCount, scene_id: 0})
    const addNewFrame = (e) => {
        e.preventDefault()
        const newFrame = {
            id: updateCount, scene_id: frame.scene_id
        }
        console.log(newFrame)
        cb__add_frame(newFrame)
        updateCount += 1
        setFrame({id: updateCount, scene_id: 0})
    }

    return (
        <form>
            <strong>Frame {frame.id}</strong>
            <MyInput
                value={frame.scene_id}
                onChange={e => setFrame({...frame, scene_id: parseInt(e.target.value)})}
                type="number"
                placeholder="Scene number..."/>
            <MyButton onClick={addNewFrame}>Add</MyButton>
        </form>
    );
};

export default FrameForm;