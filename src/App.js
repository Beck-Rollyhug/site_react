import React, {useState} from 'react'
import './styles/App.css'
import FramesList from "./components/FramesList";
import FrameForm from "./components/FrameForm";

function App() {
    const [frames, setFrames] = useState([
        {scene_id: 5},
        {scene_id: 4},
        {scene_id: 3},
        {scene_id: 2},
        {scene_id: 1},
    ])

    const addFrame = (newFrame) => {
        setFrames([...frames, newFrame])
    }

    const removeFrame = (frame) => {
        console.log('remove Frame', frame.id+1)
        if (frames.length <= 1)
            setFrames([])
        else
            setFrames(frames.filter(f => frames.indexOf(f) !== frame.id))
    }

    return (
        <div className="App">
            <header style={{marginTop: '100px'}}>
                <h2>Timeline</h2>
            </header>
            { frames.length !== 0
                ? <FramesList frames={frames} remove={removeFrame}/>
                :
                <div style={{textAlign: 'center', margin: '20px'}}>
                    Empty
                </div>
            }

            <FrameForm cb__add_frame={addFrame} next_frame={frames.length+1}/>
        </div>
  );
}

export default App;
