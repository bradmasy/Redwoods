import logoImg from "../../Assets/Images/Redwoods_Logo_White.png";
import "./styles.css"

export const Logo: React.FC = () => {
    return(
        <div className="band-logo">
            <div className="logo-img">
                <img src={logoImg}>
                </img>
            </div>

        </div>
    )
}