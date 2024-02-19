import { useState } from "react";
import { NavBar } from "../../Navbar"
import { VideoScreen } from "../../VideoScreen"
import { SubHome } from "../../SubPages/SubHome";
import { MobileMenu } from "../../Mobile-Menu/MobileMenu";
import "./styles.css";
import { MobileNavBar } from "../../Mobile-Navbar";


export const Home: React.FC = () => {
    const [videoComplete, setVideoComplete] = useState(false)
    const [mobileState, setMobileState] = useState(false);
    const [fade, setFade] = useState(false);

    const mobileMenuProps = [
        {
            url: '/',
            caption: 'HOME'
        },
        {
            url: '/about',
            caption: 'THE BOYS'
        },
        {
            url: '/dates',
            caption: 'DATES'
        },
        {
            url: '/store',
            caption: 'MERCH'
        },
        {
            url: '/media',
            caption: 'MEDIA'
        },
        {
            url: '/contact',
            caption: 'CONTACT'
        }
    ]
    return (
        <div id="home">
            <MobileNavBar setMobileState={setMobileState} mobileState={mobileState} setFade={setFade} />
            <NavBar />
            {mobileState ? (
                <>
                    <MobileMenu menuItems={mobileMenuProps} />
                </>
            ) : null}
            {!mobileState && (videoComplete ? <SubHome fade={fade} setFade={setFade} fadeOutToMobile={mobileState} /> : <VideoScreen setVideoComplete={setVideoComplete} />)}

        </div>
    )
}