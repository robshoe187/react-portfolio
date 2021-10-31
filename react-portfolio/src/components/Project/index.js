import React,{ useState } from "react";

function Project() {
    const [works] = useState([
        {
            name: 'On Rotation',
            technology: 'MERN',
            deployed: 'https://on-rotation.herokuapp.com/',
            photo: 'onrotation',
            repo: 'https://github.com/robshoe187/on-rotation'

        },
        {
            name: 'Batters Up!',
            technology: 'Handlebars/Sequelize',
            deployed: 'https://project-2-rs.herokuapp.com/',
            photo: 'batterup',
            repo: 'https://github.com/robshoe187/project-2'
        },
        {
            name: 'Run Buddy',
            technology: 'HTML/CSS',
            deployed: 'https://robshoe187.github.io/run-buddy/',
            photo: 'run-buddy',
            repo: 'https://github.com/robshoe187/run-buddy'
        },
        {
            name: 'Horiseon',
            technology: 'HTML/CSS',
            deployed: 'https://robshoe187.github.io/Horiseon/',
            photo: 'horiseon',
            repo: 'https://github.com/robshoe187/Horiseon'

        },
        {
            name: 'Robot Gladiators',
            technology: 'Javascript',
            deployed: 'https://robshoe187.github.io/robot-gladiators/',
            photo: 'robot-gladiators',
            repo: 'https://github.com/robshoe187/robot-gladiators'
        },
        {
            name: 'Song Finder',
            technology: 'HTML/CSS/Javascript',
            deployed: 'https://robshoe187.github.io/song-finder/',
            photo: 'song-finder',
            repo: 'https://github.com/robshoe187/song-finder'
        },
        {
            name: 'Photo Port',
            technology: 'React',
            deployed: 'https://robshoe187.github.io/photo-port/',
            photo: 'photo-port',
            repo: 'https://github.com/robshoe187/photo-port'
        }
    ])

    return (
       <div> 
        <h2 className="section-title">Work</h2>
        <div>
                {works.map((image, i) => (
                    <div>
                    <img
                    src={require(`../../assets/photos/${image.photo}.jpg`).default}
                    alt={image.name}
                    key={i}
                    />
                    <a href = {image.deployed}>{image.name}</a>
                    <a href = {image.repo}>Github</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;