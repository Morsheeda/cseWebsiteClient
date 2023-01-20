import React from 'react'
import "./Footer.css"

export default function Footer() {
    return <div className="footer">

        <div className="footerLeft">
            <p>All Rights Reserved by <a
                    className="footerLeftLink"
                    target="_blank"
                    rel="noreferrer"
                    href="/">
                    CSE Deptartment
                </a> of <a
                    className="footerLeftLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.feniuniversity.ac.bd/">
                    Feni University
                </a>
                <i className="copyright fa-regular fa-copyright"></i>
                Copyright 2012 - {new Date().getFullYear()}
            </p>
        </div>
        <div className='footerMiddle'></div>
        <div className="footerRight">
            <p>Made with
                <i className="footerHeartIcon fa-sharp fa-solid fa-heart"></i>
                by
                <a
                    className="footerLink"
                    title='Concept, design & development'
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/morshida.islam.7">
                    Morshida Begum
                </a>
            </p>
        </div>

    </div>

}
