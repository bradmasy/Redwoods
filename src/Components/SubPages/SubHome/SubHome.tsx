import { PhotoStrip } from "../../PhotoStrip/index"
import pic1 from "../../../Assets/Images/band-13.jpg"
import pic2 from "../../../Assets/Images/band-11.jpg"
import pic3 from "../../../Assets/Images/band-3.jpg"
import pic4 from "../../../Assets/Images/band-2.jpg"
import pic5 from "../../../Assets/Images/band-6.jpg"
import pic6 from "../../../Assets/Images/band-7.jpg"
import "./styles.css"


// const photoPaths = [
//     pic1
// ]

interface SubHomeProps{
    picturePath:string
}

export const SubHome: React.FC<SubHomeProps> = ({picturePath}) => {
    return (
        <div className="sub-main">
            <div className="declaration">
                <div id="title">
                    FURTHER I FALL                </div>
                <div id="description">
                    COMING EARLY 2024                </div>
            </div>
            <div className="sub-content">
                <div id="strip-sizing-x">
                    <div id="strip-sizing-y">
                        <PhotoStrip path={picturePath} />
                    </div>
                </div>
            </div>
        </div>
    )
}