import axios from "axios";

import "./styles.css"
interface LinkProps {
    text: string;
    url: string;
}

const Navigate = async (url: string) => {
    const request = await axios.get(`/${url}`).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log(error)
    })
}

export const Link: React.FC<LinkProps> = (props) => {
    return (
        <div className="link" onClick={
            () => Navigate(props.url)
        }>
            <div className="text-section">
                {props.text}
            </div>
        </div>
    )
}