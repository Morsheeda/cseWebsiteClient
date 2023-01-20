import React from 'react'
import "./AboutThisWebsite.css"

export default function AboutThisWebsite() {
    return <div className="aboutThisWebsite">
        <div className="aboutContainer">
            <h4 className="aboutDescTitle">This website is a final project for the degree of BSc (Hon's) in CSE and a gift to my beloved CSE department</h4>
            <div className='aboutDiv'>
                <div className="nameContainer nameContainer-1">
                    <h4 className="aboutThisWebsiteTitle">Concept, design and developed by</h4>
                    <h3 className="aboutThisWebsiteName">Morshida Begum</h3>
                    <h5 className="aboutThisWebsiteDesc">ID: 18 30 31 007</h5>
                    <h5 className="aboutThisWebsiteDesc">17<sup>th</sup> batch of</h5>
                    <h5 className="aboutThisWebsiteDesc">Computer Science & Engineering Department</h5>
                    <h5 className="aboutThisWebsiteDesc">Feni University</h5>
                </div>
                <div className="nameContainer nameContainer-2">
                    <h4 className="aboutThisWebsiteTitle">Under Supervission of</h4>
                    <h3 className="aboutThisWebsiteName">Muhammad Abu Rayan</h3>
                    <h5 className="aboutThisWebsiteDesc">Lecturer</h5>
                    <h5 className="aboutThisWebsiteDesc">Computer Science & Engineering Department</h5>
                    <h5 className="aboutThisWebsiteDesc">Feni University</h5>
                </div>
            </div>

        </div>
        <div className="aboutThisWebsiteSource">
            {/* <iframe scrolling='no' src="https://codepen.io/maaazhar/full/KKQYVpg" width="100%" height="533" frameborder="0"></iframe> */}
        </div>
    </div>
}
