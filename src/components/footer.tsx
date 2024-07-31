import React from "react";
import Image from "next/image";
import "@/styles/footer.css";

const Footer: React.FC = () => {
    return (
        <div className="foot">
            <div className="fup">   
                <div className="col1">
                    <h1>Doctor X</h1>
                    <p>Build a better website for your medical and healthcare business today.</p>
                </div>
                <div className="cols">
                    <div className="col2">
                        <h1>Company</h1>
                        <p>Home</p>
                        <p>Company</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </div>
                    <div className="col3">
                        <h1>Products</h1>
                        <p>Home</p>
                        <p>Company</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </div>
                    <div className="col4">
                        <h1>Resources</h1>
                        <p>Blog</p>
                        <p>404</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div className="fdown">   
                <div className="fcol1">
                    <h1>Site name</h1>
                    <div className="icons">
                        <Image src="/fIcon.png" alt="Facebook" width={24} height={24} />
                        <Image src="/insIcon.png" alt="LinkedIn" width={24} height={24} />
                        <Image src="/LinIcon.png" alt="YouTube" width={24} height={24} />
                        <Image src="/yIcon.png" alt="Instagram" width={24} height={24} />
                    </div>
                </div>
                <div className="fcols">
                    <div className="fcol2">
                        <h1>Topic</h1>
                        <p>Page</p>
                        <p>Page</p>
                        <p>Page</p>
                    </div>
                    <div className="fcol3">
                        <h1>Topic</h1>
                        <p>Page</p>
                        <p>Page</p>
                        <p>Page</p>
                    </div>
                    <div className="fcol4">
                        <h1>Topic</h1>
                        <p>Page</p>
                        <p>Page</p>
                        <p>Page</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
