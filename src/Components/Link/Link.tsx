import axios from "axios";

import "./styles.css"
interface LinkProps {
    text: string;
    url: string;
}

const Navigate = (url: string) => {
    console.log(url)
    window.location.href = url;

}

export const Link: React.FC<LinkProps> = (props) => {
    return (
        <div className="link" onClick={
            () =>
                Navigate(props.url)
        }>
            <div className="text-section">
                {props.text}
            </div>
        </div>
    )
}