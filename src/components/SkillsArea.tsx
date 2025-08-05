import '../index.css'
import { 
    Badge,
    createTheme,
    ThemeProvider
 } from 'flowbite-react'
import { ReactElement } from 'react';


const skillBadgeTheme = createTheme({
    badge: {
        "root": {
            "base": "flex h-fit items-center gap-1 font-semibold",
            "color": {
            "info": "bg-white border-2 hover:bg-cyan-100 text-black",
            "gray": "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
            "failure": "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:hover:bg-red-300",
            "success": "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:hover:bg-green-300",
            "warning": "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:hover:bg-yellow-300",
            "dark": "bg-gray-600 text-gray-100 hover:bg-gray-500 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-700",
            "light": "bg-gray-200 hover:bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 dark:hover:bg-gray-500",
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
            "off": "rounded-xl px-2 py-0.5",
            "on": "rounded-full p-1.5",
            "size": {
            "xs": "h-3 w-3",
            "sm": "h-3.5 w-3.5",
            "lg": "h-4 w-4",
            "xl": "h-5 w-4 fill-black"
            }
        }

    }
})

export function SkillsArea({skills}: {skills: string[]}){

    /* TODO: using .map would likely be more idiomatic */
    const skillBadges: React.ReactElement[] = [];

    for(const skill of skills) {
        skillBadges.push(<Badge color="info" size="md">{skill}</Badge>)
    }
    
    return( 
        <>
        <ThemeProvider theme={skillBadgeTheme}>
            {skillBadges}
        </ThemeProvider>
        </>
    )
}

export function IconSkillsArea({skills}: {skills: Record<string, ReactElement>}){

    /* TODO: using .map would likely be more idiomatic */
    const skillBadges: React.ReactElement[] = [];

    for(const [skill, badge] of Object.entries(skills)) {
        skillBadges.push(
        <Badge color="light" size="xl">
            <div className="flex items-center">
                {badge}
                {skill}
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