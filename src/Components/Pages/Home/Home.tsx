import { useState } from "react";
import { NavBar } from "../../Navbar"
import { VideoScreen } from "../../VideoScreen"
import { SubHome } from "../../SubPages/SubHome";

import "./styles.css";
import { MobileNavBar } from "../../Mobile-Navbar";


export const Home: React.FC = () => {
    const [videoComplete, setVideoComplete] = useState(false) 
    // if the video is complete it triggers the state resulting in a new component being loaded.

    return (
        <div id="home">
            <MobileNavBar/> 
            <NavBar />
            {
                videoComplete ?
                    (<SubHome />) : <VideoScreen setVideoComplete={setVideoComplete} />
            }
        </div>
    )
}