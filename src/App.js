import React, {useState} from 'react'
import './styles/App.css'
import FramesList from "./components/FramesList";
import FrameForm from "./components/FrameForm";

function App() {
    const [frames, setFrames] = useState([
        {id: 1, scene_id: 1},
        {id: 2, scene_id: 1},
        {id: 3, scene_id: 1},
        {id: 4, scene_id: 2},
        {id: 5, scene_id: 2},
    ])

    const addFrame = (newFrame) => {
        setFrames([...frames, newFrame])
    }

    return (
        <div className="App">
            <FramesList frames={frames}/>
            <FrameForm cb__add_frame={addFrame} frames_count={frames.length}/>
        </div>
  );
}

export default App;
