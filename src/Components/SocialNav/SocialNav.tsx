
import { SocialIcon } from "../SocialIcon/SocialIcon"
import "./styles.css"
interface SocialNavProps {
    icons: { url: string; imgPath: string }[];
}


export const SocialNav: React.FC<SocialNavProps> = (props) => {
    return (
        <div className="social-nav">
            {props.icons.map((icon, index) => {
                return (
                    <div className="social-icon-element"key={index}>
                        <SocialIcon {...icon}/>
                    </div>
                )
            })}

        </div>
    )
}