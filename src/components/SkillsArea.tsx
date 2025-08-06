import '../index.css'
import { 
    Badge,
    createTheme,
    ThemeProvider
 } from 'flowbite-react'
import { ReactElement } from 'react';
import { Skill, SkillType } from './Skill';

const skillBadgeTheme = createTheme({
    badge: {
        "root": {
            "base": "flex h-fit items-center gap-1 font-semibold",
            "color": {
            "info": "bg-white border-2 hover:bg-white text-black",
            "light": "bg-white border-2 hover:bg-white text-black",
            "indigo": "bg-indigo-100 border-2 hover:bg-white text-black",
            "purple": "bg-purple-100 border-2 hover:bg-white text-black",
            "pink": "bg-pink-100 border-2 hover:bg-white text-black",
            "blue": "bg-blue-100 border-2 hover:bg-white text-black",
            "cyan": "bg-cyan-100 border-2 hover:bg-white text-black",
            "green": "bg-green-100 border-2 hover:bg-white text-black",
            "lime": "bg-lime-100 border-2 hover:bg-white text-black",
            "red": "bg-red-100 border-2 hover:bg-white text-black",
            "teal": "bg-teal-100 border-2 hover:bg-white text-black",
            "yellow": "bg-yellow-100 border-2 hover:bg-white text-black"
    
            },
            "size": {
            "xs": "p-1 text-xs",
            "sm": "p-1.5 text-sm",
            "md": "p-1.5 text-md",
            "lg": "p-2 text-lg",
            "xl": "p-3 text-2xl"
            }
        },
        "icon": {
            "off": "rounded-full px-2 py-0.5",
            "on": "p-1.5",
            "size": {
            "xs": "h-3 w-3",
            "sm": "h-3.5 w-3.5",
            "lg": "h-4 w-4",
            "xl": "h-5 w-4 fill-black"
            }
        }

    }
})

export function SkillsArea({skills}: {skills: Skill[]}){

    /* TODO: using .map would likely be more idiomatic */
    const skillBadges: React.ReactElement[] = [];

    for(const skill of skills) {
        skillBadges.push(<Badge color={ColorFromSkillType(skill.type)} size="md">{skill.name}</Badge>)
    }
    
    return( 
        <>
        <ThemeProvider theme={skillBadgeTheme}>
            {skillBadges}
        </ThemeProvider>
        </>
    )
}

export function IconSkillsArea({skills}: {skills: Skill[]}){

    /* TODO: using .map would likely be more idiomatic */
    const skillBadges: React.ReactElement[] = [];

    for(const skill of skills) {

        skillBadges.push(
        <Badge color={ColorFromSkillType(skill.type)} size="xl">
            <div className="flex items-center gap-1 px-0.5 py-0.5">
                
                {skill.icon}
                {skill.name}
                
            </div>
        </Badge>)
    }
    
    return( 
        <>
        <ThemeProvider theme={skillBadgeTheme}>
            {skillBadges}
        </ThemeProvider>
        </>
    )
}

function ColorFromSkillType(type: SkillType){

    let color:string;

    switch(type){
        case SkillType.Language:
            color = "cyan"
            break;
        case SkillType.Software:
            color = "green"
            break;
        case SkillType.Library:
            color = "red"
            break;
        case SkillType.Framework:
            color = "lime"
            break;
        case SkillType.NonScriptLang:
            color = "purple"
            break;
    }

    return color;
}