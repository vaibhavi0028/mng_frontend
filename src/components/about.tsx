import React from "react";
import Image from "next/image";
import "@/styles/about.css";

const About: React.FC = () => {
    return (
        <div className="section">
            <div className="box">
                <div className="left">
                    <div className="float">
                        <Image src="/greendot.png" className="gd" alt="Green Dot" width={50} height={50} />
                        <div className="info">
                            <Image src="/aboutdp.png" className="img2" alt="Doctor" width={100} height={100} />
                            <div className="infoone">
                                <h1>Dr. Mastur D</h1>
                                <p>CEO DoctorX</p>
                            </div>
                            <p className="p1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed”</p>
                        </div>
                    </div>
                    <div className="img1"></div>
                </div>
                <div className="right">
                    <div className="r1">
                        <h1 className="abtu">ABOUT US</h1>
                        <h1 className="abt2">A dedicated doctor with the core mission to help</h1>
                    </div>
                    <div className="r2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="r3">
                        <div className="but1">
                            <p>Book an Appointment</p>
                        </div>
                        <div className="but2">
                            <p>About Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
