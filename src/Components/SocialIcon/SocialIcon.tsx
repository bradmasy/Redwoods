import "./styles.css";
interface SocialIconProps {
    url: string
    imgPath: string
}

export const SocialIcon: React.FC<SocialIconProps> = (props) => {

    const navigateToExternalWebsite = (url: string) => {

    }

    return (
        <div className="social-icon">
            <div className="social-icon-container">
                <div className="social-icon-alignment">
                    <img src={props.imgPath} onClick={() => navigateToExternalWebsite(props.url)}>
                    </img>

                </div>

            </div>

        </div>
    )
}