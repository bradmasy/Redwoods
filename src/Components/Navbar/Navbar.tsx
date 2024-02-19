
import { Link } from "../Link";
import { Logo } from "../Logo";
import { SocialNav } from "../SocialNav";
import instagram from "../../Assets/Icons/instagram.png";
import youtube from "../../Assets/Icons/youtube.png";
import spotify from "../../Assets/Icons/spotify.png";
import facebook from "../../Assets/Icons/facebook.png";
import twitter from "../../Assets/Icons/twitter.png";
import appleMusic from "../../Assets/Icons/apple-music.png";
import "./styles.css";



export const NavBar: React.FC = () => {

    const links = [
        {
            text: "HOME",
            url: "/"
        },
        {
            text: "THE BOYS",
            url: "/about"
        },
        {
            text: "CONTACT",
            url: "/contact"
        },
    ]

    const socialNavProps = {
        icons: [
            {
                url:"https://www.instagram.com/redwoodsvancouver/",
                imgPath:instagram
            },
            {
                url:"https://www.youtube.com/@redwoodsvancouver7599",
                imgPath:youtube
            },
            {
                url:"https://open.spotify.com/artist/3uTxIW6v8i9yJTuKGvxRlI",
                imgPath:spotify
            },
            {
                url:"",
                imgPath:facebook
            },
            {
                url:"",
                imgPath:appleMusic
            },
            {
                url:"",
                imgPath:twitter
            }
            
        ]
    }
    return (
        <div className="navbar">
            <div className="logo">
                <Logo/>
            </div>
            <div className="socials">
                <SocialNav {...socialNavProps}/>
            </div>

            <div className="links">

                <Link text={"HOME"} url={"/"} />
                <Link text={"THE BOYS"} url={"about"} />
                <Link text={"DATES"} url={"dates"} />
                <Link text={"MERCH"} url={"store"} />
                <Link text={"MEDIA"} url={"media"} />
                <Link text={"CONTACT"} url={"contact"} />

            </div>

        </div>
    )
}