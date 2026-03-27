import { ProjectData } from "../components/ProjectData"
import { MySkills } from "./MySkills"

export const MyProjects: ProjectData[] = [

    {
        projectName: 'Eulyss',
        companyName: 'Personal Project',
        role: 'Programmer',
        skills: [MySkills.Unity, MySkills.CSharp, MySkills.GameDesign],
        thumbnailSrc: '/eulyss-thumb.png',
        description: [
            'Developed a custom text parser that imports JSON as graphs for in-game dialogue, created a raycast-based player movement system, and designed responsive GUI.',
            '#Overview',
            'Eulyss is a single player point-and-click adventure game developed in Unity with C#. Developed over the course of 5 months, it was published to itch.io as a free download.',
            '#Process',
            'To organize the production team, we implemented an Agile workflow. Many Scrum methodologies were used to make sure we stayed on task – this included weekly sprints and daily meetings. Jira was our tool of choice for hosting our task board and keeping track of sprints. We also planned out our architecture with a shared UML diagram on Lucidchart.',
            'My contribution to the game in early development was the creation of player movement mechanics using Unity’s Navmesh AI Agents. To make this system, I used raycasts from the mouse to get a position on the Navmesh whenever the player clicks on it. This position would then be given to the AI agent for the player character to move to. I also needed to handle cases when the player clicked on an interactable object. Different interactable objects could change gameplay in different ways – they might start dialogue with an NPC, or change the player’s stats, or even move the player character to a different area. To handle all these varying cases, I chose to make an abstract InteractableScript class, which multiple different subclasses inherited from.',
            'I also assisted in implementing a custom text parser later in development. For this system, we needed to read in text created in Twine, an external text editor. Since Twine files structure their text as nodes (to accommodate branching narrative paths), I developed a custom DialogueNode class to create dialogue graphs that could be read by our UIManager class. The text parser itself is implemented through the TwineParser class.',
            'Near the end of development, I designed and implemented the game’s UI. This included the HUD and the main dialogue box. Using Unity’s UI system, I was able to make a fully responsive UI that works not just on our target monitor size, but on a range of different sizes. I used mouse click events to make the UI dynamic and respond to user inputs.',
        ],
        sampleLink: 'https://cytastorm.itch.io/eulyss-prologue',
        githubLink: 'https://github.com/CytaStorm/Taken',
        processImages: [
            { source:"/captures/eulyss-capture-2.png", caption:"Point and click gameplay"},
            { source:"/captures/eulyss-capture-1.png", caption:"Dialogue menu"},
            { source:"/captures/eulyss-capture-3.png", caption:"Player HUD"},
            { source:"/captures/eulyss-capture-4.png", caption:"Title screen UI"},
        ]
    },

    {
        projectName: 'Pokedex Site',
        companyName: 'School Project',
        role: 'Solo Developer',
        skills: [MySkills.HTML, MySkills.CSS, MySkills.JavaScript],
        thumbnailSrc: '/pokedex-search-thumb.png',
        description: [
            'Developed a search system to fetch and parse data from an online API and filter results. Implemented code to save user history to local storage.',
            '#Overview',
            'Pokedex Search is a single-page web application that lets users find stats and other useful information on their favorite monsters from the Pokemon video game series. It is available to use for free.',
            '#Process',
            'Data for each Pokemon is fetched from the PokeAPI. The searchButtonClicked helper function in my JavaScript uses an XML HTTP request to search the PokeAPI for the user’s search term. The dataLoaded callback then parses the resulting data, as long as it’s valid. Once the data has been parsed into arrays of strings, the callback changes the innerHTML of DOM elements on the page to display the data.',
            'The PokeAPI data is parsed to create a streamlined UX that doesn’t overwhelm the user with information. Flavor text for each attack, for instance, is hidden until the name of the attack is clicked. This is implemented with the moveLinkClicked helper function.',
            'The UI for this web app was created from scratch, using HTML, CSS, and JavaScript. Since the site searches through the PokeAPI, I felt it would be appropriate to loosely base the site’s UI on the design of the official Pokemon website. I used media queries in the CSS to make the site fully responsive on all devices.',
        ],
        sampleLink: 'https://people.rit.edu/zj7206/235/project2/',
        githubLink: '',
        processImages: [
            { source:"/captures/dex-capture-1.png", caption:"Attack data for a monster"},
        ]
    },

    {
        projectName: 'Impetus',
        companyName: 'Personal Project',
        role: 'Programmer, Art Lead',
        skills: [MySkills.Unity, MySkills.CSharp, MySkills.GameDesign],
        thumbnailSrc: '/impetus-thumb.png',
        description: [
            `Designed and programmed an algorithm to randomly generate dungeon architecture as a linked list and designed UI.`,
            `#Overview`,
            `Impetus is a top-down roguelike video game. It was published as a free, web-based demo.`,
            `#Process`,
            `We used a Scrum Agile workflow to organize the development team. Sprints were assigned every week, and we shared our progress during standup meetings that were held twice a week. Using this approach, we were able to finish the vertical slice in the span of three months.`,
            `Impetus was developed in Unity with C#. I worked as one of the team's software developers, and designed and implemented an algorithm that randomly generates dungeons for the player to explore. Dungeons are internally stored as linked lists of room objects, and these rooms are assembled at runtime using prefabs. The LevelManagerScript class is responsible for assembling the rooms randomly. It maintains internal lists of all room prefabs, sorted by where their exits are. When a new dungeon needs to be generated, the GenerateLayout function of LevelManagerScript is called, which assembles a linked list of rooms where room n is added such that its entrance door lines up with the exit door of room n-1.`,
            `I also juggled my role as a software developer with being the project's art lead. I designed the game's level art and user interface elements to both convey the game's aesthetics and be as readable as possible. I also created all of the game's level art in Krita, which our level designer then implemented in the room prefabs for the dungeons.`,

        ],
        sampleLink: 'https://people.rit.edu/ebw4243/Impetus_Builds/',
        githubLink: 'https://github.com/CytaStorm/Impetus',
        processImages: []
    },

    {
        projectName: 'Galaxy Visualizer',
        companyName: 'School Project',
        role: 'Solo Developer',
        skills: [MySkills.HTML, MySkills.CSS, MySkills.JavaScript],
        thumbnailSrc: '/galaxy-thumb.png',
        description: [
            `Created an algorithm to generate audio responsive visual effects using the HTML Canvas and Web Audio APIs.`,
            `#Overview`,
            `Galaxy Visualizer is a web-based audio visualizer designed to procedurally generate animations based on a given audio track. It is available to use for free.`,
            `#Process`,
            `Galaxy Visualizer runs on JavaScript, which is how I was able to create its visual effects. The visuals are drawn on an HTML Canvas, using the Canvas API. All the visuals are made using objects of a class I created called Particle in the particle.js script. This class has functionality for rendering a blurry, transparent circle to the screen, as well as giving it an initial velocity and acceleration. In canvas.js, the script I use to render canvas graphics, additional functionality is implemented (such as hue shifting and audio responsive positioning).`,
            `Audio data is collected in the audio.js script. This is done with the help of the web audio API. In audio.js, a graph of audio nodes is established, including an analyser node. This node collects frequency and waveform data from the current track, and a reference to the node is kept in memory to be accessed by my canvas drawing functions.`,
            `All of the scripts used in Galaxy Visualizer were also bundled with webpack before the site was deployed.`,
            `The site features a custom layout and custom styling for user inputs, which I created entirely in vanilla CSS. I also designed the layout to be fully responsive to work on all desktop browsers, which I implemented using CSS media queries.`,
        ],
        sampleLink: 'https://people.rit.edu/zj7206/330/galaxy-visualizer/',
        githubLink: '',
        processImages: [
            { source:"/captures/galaxy-capture-1.png", caption:"Visualizer and playhead"},
            { source:"/captures/galaxy-capture-2.png", caption:"User settings"},
        ]
    },

    {
        projectName: 'Space Trucker',
        companyName: 'Personal Project',
        role: 'Solo Developer',
        skills: [MySkills.Godot, MySkills.GameDesign],
        thumbnailSrc: '/space-trucker-thumb.png',
        description: [
            `Implemented object pooling and custom queue system in GDScript. Developed custom UI and HUD using Godot UI nodes.`,
            `#Overview`,
            `Space Trucker is an arcade-styled desktop game I designed and developed as a solo developer in Godot 4.4.1.`,
            `#Process`,
            `To create the effect of shipping crates trailing behind the player’s space shuttle, I implemented a queue system that was used to determine the position of the crates. Every frame, the current position of the player shuttle is added to the position queue, and if the queue is full then the oldest position is removed. The positions of the crates are obtained from this queue, with the values being taken farther apart from each other for the crates to appear less synced. This system was built to be scalable to as few or as many crates as necessary.`,
            `I noticed in earlier builds of the game that the system for spawning asteroids was causing performance issues. To fix this, I implemented an object pooling system for the asteroids, to replace the existing system of instantiating a new asteroid every time a new one appeared onscreen. In this new system, asteroids that went offscreen were kept in memory. When a new asteroid was needed, one of the old asteroids was placed where the new one was spawned. To make it less clear to the player that the same asteroids were being reused, the properties (such as size, velocity, and rotational speed) are randomized before each asteroid re-enters gameplay.`,
            `The game features custom-made UI elements. I used paper to prototype several potential layouts before deciding on the ones that best fit the game. I was able to apply my previous experience with HTML and CSS to Godot’s UI system, using features like alternate styles for different button states, `,

        ],
        sampleLink: 'https://ziadjaafar.itch.io/space-trucker',
        githubLink: '',
        processImages: [
            { source:"/captures/trucker-capture-1.png", caption:"Title screen UI"},
            { source:"/captures/trucker-capture-4.png", caption:"Gameplay and player HUD"},
            { source:"/captures/trucker-capture-3.png", caption:"Game over screen"},
        ]
    },

    {
        projectName: '13 Ghosts',
        companyName: 'School Project',
        role: 'Designer',
        skills: [MySkills.GameDesign],
        thumbnailSrc: '',
        description: [
            `Designed a tabletop RPG dungeon generation system within a 200 word limit.`,
            `#Overview`,
            `Thirteen Ghosts is a micro roleplaying game written in less than 200 words. It was created as a response to the 200 Word RPG Challenge (https://200wordrpg.github.io/). The PDF of the game’s rules can be downloaded from this site.`,
            `#Process`,
            `I collaborated with two other designers to create Thirteen Ghosts. Because of the small scope of the game and the ease with which we could change its rules, the ideation phase of development was rapid and incredibly productive.`,
            `My main contribution to this RPG was the map system. Since the 200 word requirement greatly limited the complexity of the rules we could implement, I looked at past entries to the 200 Word RPG Challenge for inspiration on new mechanics to add. In my research, I saw many other RPGs using playing cards to represent game objects, which is how I arrived at the idea of generating a map with playing cards. From there, I added rules specifying that players would take turns placing down “rooms” from a deck of cards, which could be put anywhere on the map. Once this mechanic was designed, I presented it to the rest of the team, and once they were happy with it we worked together to implement it.`,
        ],
        sampleLink: '/13-ghosts-manual.pdf',
        githubLink: '',
        processImages: []
    },

    {
        projectName: 'Vice Versa',
        companyName: 'School Project',
        role: 'Designer',
        skills: [MySkills.GameDesign],
        thumbnailSrc: '',
        description: [
            `Designed the core gameplay loop for a tabletop roleplaying game.`,
            `#Overview`,
            `Vice Versa is a tabletop roleplaying game designed to foster empathy about mental health. The PDF of the game’s rules can be downloaded from this site.`,
            `#Process`,
            `I collaborated as part of a five-person team to create this print-and-play game. We chose to make the experience a tabletop roleplaying game because the roleplaying framework forces players to consider perspectives other than their own.`,
            `My work on this project includes designing the core gameplay loop. Although we designed Vice Versa with the intention that players would make their own campaigns, we also wanted to add a structure to the game that would ensure players would get into conflicts, or otherwise have to make difficult choices. The gameplay of Vice Versa relies on players engaging with the combat system and making tough decisions, since doing so raises the mental anguish on the player characters, thus forcing players to engage with the mental health aspect of the game.`,
            `My solution was to incorporate a “chapters” system into the game. A single chapter is a chunk of a larger campaign, broken down into four phases, and the chapter ends once all four phases have been completed in order. In the first phase, the Game Master describes a new scenario to the players; in the second and third phases, players use their skill checks and discuss what to do, respectively; in the final phase, players act to resolve the scenario. By structuring campaigns this way, my goal was to encourage more challenge and player discussion, as both of which can lead to teachable moments about mental health.`,
        ],
        sampleLink: '/vice-versa-manual.pdf',
        githubLink: '',
        processImages: []
    },

    {
        projectName: 'Gravity Game',
        companyName: 'School Project',
        role: 'Solo Developer',
        skills: [MySkills.CPlusPlus, MySkills.SFML, MySkills.Box2D],
        thumbnailSrc: '/gravity-game-thumb.png',
        description: [
            `Created a game engine in C++ using the Box2D and SFML libraries to implement physics and graphics, respectively.`,
            `#Overview`,
            `Gravity Game is a micro arcade game designed to be played on Windows desktops.`,
            `#Process`,
            `I created the engine for Gravity Game in C++, using the Box2D and SFML libraries. Box2D was used to add physics simulations, and SFML was included to let me render shapes and textures to the screen. This let me add physics-based 2D player movement and realistic collisions to the game. Using SFML, I was able to render custom artwork and text to the screen, including a HUD.`,
        ],
        sampleLink: '',
        githubLink: '',
        processImages: [
        ]
    },

    {
        projectName: 'Johnny Rocket',
        companyName: 'School Project',
        role: 'Programmer',
        skills: [MySkills.CSharp, MySkills.Monogame, MySkills.GameDesign],
        thumbnailSrc: '/johnny-rocket-thumb.png',
        description: [
            `Implemented collision physics and a player movement algorithm in C#. Used Monogame to create custom UI that responds and input and updates at runtime.`,
            `#Overview`,
            `Johnny Rocket is a 2D dungeon crawler video game that was published to itch.io as a free download.`,
            `#Process`,
            `We worked as a team of four to create Johnny Rocket over the span of two months. The game was developed in C#, using the Monogame library to handle inputs and render graphics.`,
            `I worked as one of the programmers on the game, and implemented algorithms for both the collisions and the player movement.`,
            `I also programmed the UI, which included making a custom button class that responded to mouse input, as well as creating a HUD that updated itself at runtime to reflect the player's current state.`,
            `We kept track of our tasks using Trello, and met weekly in person to discuss our current progress and assign new tasks. We also made use of a design doc to keep track of our design goals.`,

        ],
        sampleLink: 'https://shaelinb.itch.io/johnny-rocket',
        githubLink: 'https://github.com/Ziad-J05/Johnny-Rocket',
        processImages: [
        ]
    },
]