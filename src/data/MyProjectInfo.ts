import { ProjectInfo } from "../pages/ProjectInfoPage";

export const MyProjectInfo: ProjectInfo[] = [
    
    {   projectName: 'Sample Name',
        companyName: 'Sample company name' ,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus molestie, rhoncus ipsum ut, convallis mauris. Pellentesque sed dignissim sem, eget commodo ante. Donec ligula mi, sollicitudin non nulla a, porttitor ultrices orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus sed ligula a ornare. Vestibulum vehicula accumsan ante, id feugiat est fringilla at. Phasellus ullamcorper sodales augue, et malesuada mi. ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus molestie, rhoncus ipsum ut, convallis mauris. Pellentesque sed dignissim sem, eget commodo ante. Donec ligula mi, sollicitudin non nulla a, porttitor ultrices orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus sed ligula a ornare. Vestibulum vehicula accumsan ante, id feugiat est fringilla at. Phasellus ullamcorper sodales augue, et malesuada mi. ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus molestie, rhoncus ipsum ut, convallis mauris. Pellentesque sed dignissim sem, eget commodo ante. Donec ligula mi, sollicitudin non nulla a, porttitor ultrices orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus sed ligula a ornare. Vestibulum vehicula accumsan ante, id feugiat est fringilla at. Phasellus ullamcorper sodales augue, et malesuada mi. ',
        ],
        projectLink:'#' ,
        githubLink:'#', 
        processImages:[
            { source:"/placeholder-photo.jpg", caption:"This is a description. Hello!"},
            { source:"/placeholder-photo.jpg", caption:"This is another description."},
            { source:"/placeholder-photo.jpg", caption:""},
            { source:"/placeholder-photo.jpg", caption:"That last one had no description."},
        ]
    },
]