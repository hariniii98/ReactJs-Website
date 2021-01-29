import React from 'react'

const About = () => {
    return (
        <>
        <div className="about">
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="curved">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,202.7C672,160,768,96,864,69.3C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="clients media">
                <div className="client">
                    <h3>120+</h3>
                    <p>Clients WorldWide</p>
                </div>
                <div className="client">
                    <h2>50+</h2>
                    <p>Repeated Clients</p>
                </div>
                <div className="client">
                    <h3>50+</h3>
                    <p>Repeated Clients</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
