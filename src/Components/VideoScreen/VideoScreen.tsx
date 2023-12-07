
import "./styles.css";
import ReactPlayer from "react-player";

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
                    <button onClick={handleVideoEnd}>X</button>
                </div>
                    <div className="video">
                        <ReactPlayer
                            url={require("../../Assets/Video/further-i-fall-promo.mp4")}
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