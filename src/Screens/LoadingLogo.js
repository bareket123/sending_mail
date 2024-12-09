import React from 'react';
import "../Styles/LoadingMailStyle.css"; // Add the CSS file for the spinner

function LoadingLogo() {

    return (
        <div className="cool-loading-mail-container">
            <div className="mail-animation">
                <div className="mail-envelope">
                    <div className="mail-flap"></div>
                </div>
                <div className="mail-message"></div>
            </div>
            <h1 className="glowing-text">שולח את המייל...</h1>
        </div>
    );
}

export default LoadingLogo;
