
import "./styles.css";
import hamburgerMenu from "../../Assets/Icons/hamburger.png";
import logo from "../../Assets/Images/Redwoods_Logo_White.png";
import { SocialIcon } from "../SocialIcon/SocialIcon";
import { SocialNav } from "../SocialNav";
import instagram from "../../Assets/Icons/instagram.png";
import youtube from "../../Assets/Icons/youtube.png";
import spotify from "../../Assets/Icons/spotify.png";
import facebook from "../../Assets/Icons/facebook.png";
import twitter from "../../Assets/Icons/twitter.png";
import appleMusic from "../../Assets/Icons/apple-music.png";
import { useEffect, useState } from "react";


const socialNavProps = {
    icons: [
        {
            url: "https://www.instagram.com/redwoodsvancouver/",
            imgPath: instagram
        },
        {
            url: "https://www.youtube.com/@redwoodsvancouver7599",
            imgPath: youtube
        },
        {
            url: "https://open.spotify.com/artist/3uTxIW6v8i9yJTuKGvxRlI",
            imgPath: spotify
        },
        {
            url: "",
            imgPath: facebook
        },
        {
            url: "",
            imgPath: appleMusic
        },
        {
            url: "",
            imgPath: twitter
        }

    ]
}

interface MobileNavProps {
    mobileState: boolean
    setMobileState: React.Dispatch<React.SetStateAction<boolean>>;
    setFade: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNavBar: React.FC<MobileNavProps> = ({ setMobileState, mobileState }) => {
    const [fade, setFade] = useState(false);



    const openMobileMenu = () => {
        !mobileState ? setMobileState(true) : setMobileState(false);
        !mobileState ? setFade(false) : setFade(true);
    }

    return (

        <div className="mobile-nav-bar">
            <div className="mobile-menu-container">
                <div id="hamburger-menu">
                    <div id="hamburger-container" onClick={openMobileMenu}>
                        <div id="img-container">
                            <img src={hamburgerMenu}>
                            </img>
                        </div>
                        <div id="social-nav-container">
                            <div id="social-nav-alignment">
                                <SocialNav {...socialNavProps} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-logo">
                    <div id="logo-container">
                        <img src={logo}></img>
                    </div>
                </div>
            </div>

        </div>
    )
}