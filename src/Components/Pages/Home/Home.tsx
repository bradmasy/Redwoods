import { useState } from "react";
import { NavBar } from "../../Navbar"
import { VideoScreen } from "../../VideoScreen"
import { SubHome } from "../../SubPages/SubHome";

import "./styles.css";


export const Home: React.FC = () => {
    const [videoComplete, setVideoComplete] = useState(false) 
    // if the video is complete it triggers the state resulting in a new component being loaded.

    return (
        <div id="home">
            <NavBar />
            {
                videoComplete ?
                    (<SubHome />) : <VideoScreen setVideoComplete={setVideoComplete} />

            }
        </div>
    )
}