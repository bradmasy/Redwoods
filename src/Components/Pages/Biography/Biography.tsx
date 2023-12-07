import band from "../../../Assets/Images/band-12.jpg";
import "./styles.css";

const copy = `Redwoods is a hard rock band from Vancouver, Canada, formed in the early 2010s. They've found a way to blend the coolness of 70s rock,vibrance of 80s metal, and grit of 90s grunge into a diverse rock sound offering nothing short of excitement in today's music scene\.Lyrically, the band wears their emotions on their sleeves,
    however, they do not shy away from revelling in the euphoria of young adulthood when desired.
    Their songs capture the highs and lows of romance, and aim to expose the fine line between 
    right and wrong in our society... with the occasional straight ahead party anthem. Their
    performances are fun, sweaty and infectious, breathing electricity into each member of 
    the room like a contagious rock - and - roll virus.With their first full length album 
    Daybreaker in the rear view, Redwoods has teamed up with producer Matt Roach at Rain City
    Recorders to refine their sound, and is eager to unleash more rock & roll into the
    post - pandemic world.`

export const Biography: React.FC = () => {
    return (
        <div className="biography">
            <div className="bio-content">
                <div className="bio-text-content">
                    <div className="bio-copy">
                        <div className="bio-title">
                            Now Your Messing With The Redwoods Boys...

                        </div>
                        <div className="bio-text">
                            <div className="bio-text-center">
                                {copy}

                            </div>

                        </div>
                    </div>
                </div>
                <div className="bio-img">
                    <img src={band}>
                    </img>
                </div>
            </div>
        </div>
    )
}