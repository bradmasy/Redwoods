
import { Link } from "../Link";
import { Logo } from "../Logo";
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

    return (
        <div className="navbar">
            <div className="logo">
                <Logo/>
            </div>

            <div className="links">

                <Link text={"HOME"} url={""} />
                <Link text={"THE BOYS"} url={"about"} />
                <Link text={"DATES"} url={links[2].url} />
                <Link text={"MERCH"} url={links[0].url} />
                <Link text={"MEDIA"} url={links[1].url} />
                <Link text={"CONTACT"} url={links[2].url} />

            </div>

        </div>
    )
}