import React from 'react';
import contactPagePicture from "../../../static/assets/images/contact/profile-pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function () {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }} 
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>
                            <div className="text">405-301-7945</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                            <div className="text">pdneary@gmail.com</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                            <div className="text">Southwest Fort Worth, Tx</div>
                    </div>
                </div>

            </div>
        </div>
    )
}