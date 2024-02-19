import { PhotoStrip } from "../../PhotoStrip/index"
import pic1 from "../../../Assets/Images/band-13.jpg"
import forest from "../../../Assets/Images/forest-promo.jpeg"
import "./styles.css"
import { useEffect, useState } from "react";

interface SubHomeProps {
    fadeOutToMobile: boolean;
    setFade: React.Dispatch<React.SetStateAction<boolean>>;
    fade: boolean
}

const photoPaths = [
    pic1
]

export const SubHome: React.FC<SubHomeProps> = ({ fadeOutToMobile, setFade,fade }) => {

    useEffect(() => {
        const subMain = document.querySelector(".sub-main") as HTMLElement | null;
        console.log(subMain)
        console.log('TRIGGERED')
        if (fadeOutToMobile && fade) {
            const timeoutId = setTimeout(() => {
                subMain?.classList.add("fade-out")
                setFade(true);
            }, 0); // Set your desired timeout duration here (in milliseconds)

            return () => clearTimeout(timeoutId);
        }
    }, [fadeOutToMobile]);

    return (
        <div className="sub-main">
            <div className="declaration">
                <div id="title">
                    FURTHER I FALL
                </div>
                <div id="description">
                    COMING EARLY 2024
                </div>
            </div>
            <div className="sub-content">
                <div id="strip-sizing-x">
                    <div id="strip-sizing-y">
                        <PhotoStrip paths={photoPaths} />
                    </div>
                </div>
            </div>
        </div>
    )
}