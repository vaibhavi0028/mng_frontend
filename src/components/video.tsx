import React from "react";
import Image from "next/image";
import "@/styles/video.css";

const Video: React.FC = () => {
    return (
        <div className="Section">
            <div className="t1">
                <p>DR. MATTHEW ANDERSON</p>
            </div>
            <div className="t2">
                <h1>Watch video to learn why he is the right doctor for you</h1>
            </div>
            <div className="vid">
                <Image src="/doc.png" alt="Doctor" id="image1" width={1000} height={600} />
                <Image src="/play_icon.png" alt="Play Icon" id="image2" width={60} height={60} />
            </div>
        </div>
    );
}

export default Video;
