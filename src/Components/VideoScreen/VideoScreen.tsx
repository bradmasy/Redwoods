
import "./styles.css";
import ReactPlayer from "react-player";
import xButton from "../../Assets/Icons/x-button.png";
interface VideoScreenProps {
    setVideoComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VideoScreen: React.FC<VideoScreenProps> = ({setVideoComplete}) => {
    
    const handleVideoEnd = () => {
        console.log("video has ended")
        setVideoComplete(true);
    };
    

    return (
        <div className="video-screen">
            <div className="video-x">
                
                <div className="video-y">
                <div id="x-button">
                    <img className ="x-button-styles"src={xButton} onClick={handleVideoEnd}>
                    </img>
                    
                </div>
                    <div className="video">
                        <ReactPlayer
                            url={require("../../Assets/Video/sample.mp4")}
                            width="100%"
                            height="100%"
                            playing={true}
                            controls={true}
                            loop={false}
                            muted={true}
                            volume={0}
                            onEnded={handleVideoEnd}
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}