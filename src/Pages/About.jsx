import React from 'react';
import './css/About.scss';
import Container from "../components/fragment/Container";
import Attribution from "../components/fragment/Attribution";

const About = () => {
    return (
        <Container>
            <div className={"About"}>
                {/*<div className="Dark-mode">
                    <h5>Dark mode to be available soon</h5>
                    <IconButton>
                        <Brightness/>
                    </IconButton>
                </div>*/}
               {/*  <Developer/> */}
                <Attribution/>
            </div>
        </Container>
    );
}

export default About;
