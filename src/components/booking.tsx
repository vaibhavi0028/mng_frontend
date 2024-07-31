import React from "react";
import "@/styles/booking.css";

const Booking: React.FC = () => {
    return (
        <div className="seection">
            <div className="boxbk">
                <div className="txtbk">
                    <h1>Get in touch to book your</h1>
                    <h1>first appointment</h1>
                    <p>Booking an appointment is quick and simple</p>
                </div>
                <div className="butbk">
                    <div className="inp">
                        <input className="name" placeholder="Enter your name" />
                        <input className="email" placeholder="Enter your email address" />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Booking;
