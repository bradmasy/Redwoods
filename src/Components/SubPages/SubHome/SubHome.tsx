import { PhotoStrip } from "../../PhotoStrip/index"
import pic1 from "../../../Assets/Images/band-13.jpg"
import forest from "../../../Assets/Images/forest-promo.jpeg"
import "./styles.css"


const photoPaths = [
    pic1
]

export const SubHome: React.FC = () => {
    return (
        <div className="sub-main">
            <div className="declaration">
                <div id="title">
                    FURTHER I FALL                
                </div>
                <div id="description">
                    COMING EARLY 2024                
                </div>
            </div>
            <div className="sub-content">
                <div id="strip-sizing-x">
                    <div id="strip-sizing-y">
                        <PhotoStrip paths={photoPaths} />
                    </div>
                </div>
            </div>
        </div>
    )
}