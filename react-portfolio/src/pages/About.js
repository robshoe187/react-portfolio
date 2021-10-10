import React from "react";

function About () {
    return (
        <div>
            <h2 id = 'about'>About Me</h2>
            <img
                    src={require(`../assets/photos/rob.jpg`).default}
                    alt='Robert Shoemaker'
                    key='Robert'
                    />
            <p>
                Hello! My name is Rob Shoemaker and I am currently studying Web Development at Uconn! 
            </p>
        </div>
    )
};

export default About;