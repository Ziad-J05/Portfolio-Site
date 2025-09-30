import { ProjectData } from "../components/ProjectData"
import { MySkills } from "./MySkills"

export const MyProjects: ProjectData[] = [
    
    {   projectName: 'Eulyss',
        companyName: 'Personal Project' ,
        role: 'Programmer',
        skills: [MySkills.Unity, MySkills.CSharp],
        thumbnailSrc: '/eulyss-thumb.png',
        description: [
            'Collaborated as part of a team of two to create an adventure game with a custom text parser that imports text files as graphs for in-game dialogue. Currently in development.',
            `Eulyss is currently being developed in Unity with C#. All of the dialogue in the game is written with Twine, and read into Unity as a JSON. Our custom text parser turns this file into a graph that is then displayed by the current scene's UI manager.`,
            `To organize the production team, we used Jira to implement an Agile workflow. We also planned out our architecture with a shared UML diagram on Lucidchart.`
        ],
        sampleLink:'https://cytastorm.itch.io/eulyss-prologue' ,
        githubLink:'https://github.com/CytaStorm/Taken', 
        processImages:[]
    },

    {   projectName: 'Pokedex Site',
        companyName: 'School Project' ,
        role: 'Solo Developer',
        skills: [MySkills.HTML, MySkills.CSS, MySkills.JavaScript],
        thumbnailSrc: '/pokedex-search-thumb.png',
        description: [
            'Designed and developed a single-page web app that allows users to search for stats about the monsters from the Pokemon games.',
            `This site was created using HTML, CSS, and JavaScript. It gets its data from the PokeAPI, and parses this data in a user-friendly, easy-to-read form. The site also utilizes local storage to keep track of users' previous searches.`,
        ],
        sampleLink:'https://people.rit.edu/zj7206/235/project2/' ,
        githubLink:'', 
        processImages:[]
    },

    {   projectName: 'Impetus',
        companyName: 'Personal Project' ,
        role: 'Programmer, Art Lead',
        skills: [MySkills.Unity, MySkills.CSharp],
        thumbnailSrc: '/placeholder-photo.jpg',
        description: [
            'As part of a team of 6, developed a vertical slice of a 2D roguelike video game.',
            `The game was developed in Unity with C#. I worked as one of the team's software developers, and designed and implemented an algorithm that randomly generates dungeons for the player to explore. Dungeons are internally stored as graphs of room objects, and these rooms are assembled at runtime using prefabs.`,
            `To organize the development team, our production manager utilized Jira to implement an Agile workflow. We were assigned weekly sprints and shared our progress during each sprint on biweekly video calls. Using this approach, we were able to finish the vertical slice in the span of three months.`,
            `I also juggled my role as a software developer with being the project's art lead. I designed the game's level art and user interface elements to both convey the game's aesthetics and be as readable as possible. I also created all of the game's level art in Krita, that our level designer then implemented in the room prefabs for the dungeons.`
        ],
        sampleLink:'',
        githubLink:'https://github.com/CytaStorm/Impetus', 
        processImages:[]
    },

    {   projectName: 'Space Trucker',
        companyName: 'School Project' ,
        role: 'Solo Developer',
        skills: [MySkills.HTML, MySkills.CSS, MySkills.JavaScript, MySkills.PixiJS],
        thumbnailSrc: '/space-trucker-thumb.png',
        description: [
            'Space Trucker is a web-based arcade game I designed and developed using HTML, CSS, and JavaScript.',
            'I designed this game from the ground up, with the inital pitch being a cross between Flappy Bird and Snake. The goal was to make an addictive, replayable arcade game that could function on web and mobile.',
            `I built the engine for this game from the ground up, using the Pixi.js library to render graphics to the page. The game uses a finite state machine to switch between gameplay, the pause screen, the title menu, and the game over screen. For the collision in the game, I implemented Jeffery Thompson's circle-rectangle collision algorithm.`,
        ],
        sampleLink:'https://people.rit.edu/zj7206/235/project3/' ,
        githubLink: '', 
        processImages:[]
    },

    {   projectName: 'Gravity Game',
        companyName: 'School Project' ,
        role: 'Solo Developer',
        skills: [MySkills.CPlusPlus, MySkills.SFML, MySkills.Box2D],
        thumbnailSrc: '/gravity-game-thumb.png',
        description: [
            'Gravity Game is a arcade-styled video game that I developed using C++.',
            'I created the engine for Gravity Game in C++, using the Box2D and SFML libraries. These allowed me to render shapes and textures to the screen, and to implement physics simulations, respectively.',
        ],
        sampleLink:'' ,
        githubLink:'', 
        processImages:[
        ]
    },

    {   projectName: 'Johnny Rocket',
        companyName: 'School Project' ,
        role: 'Programmer',
        skills: [MySkills.CSharp, MySkills.Monogame],
        thumbnailSrc: '/johnny-rocket-thumb.png',
        description: [
            'Worked as a team of four to create a 2D adventure game with real-time combat and three unique levels over the span of two months. The game was developed in C#, using the Monogame library to handle inputs and render graphics.',
            'I worked as one of the programmers on the game, and implemented algorithms for both the collisions and the player movement.',
            `I also programmed the UI, which included making a custom button class that responded to mouse input, as well as creating a HUD that updated itself at runtime to reflect the player's current state.`,
            `We kept track of our tasks using Trello, and met weekly in person to discuss our current progress and assign new tasks. We also made use of a design doc to keep track of our design goals.`

        ],
        sampleLink:'https://shaelinb.itch.io/johnny-rocket' ,
        githubLink:'https://github.com/Ziad-J05/Johnny-Rocket', 
        processImages:[
        ]
    },
]