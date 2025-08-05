import '../index.css'
import { 
    Button,
    createTheme,
    ThemeProvider,
    
} from 'flowbite-react'

interface LinkButtonProps {
    text: string;
    link: string
}

const buttonTheme = createTheme({
    button: {
        base: "relative flex shadow-[4px_6px_0px_-1px_rgba(0,0,0,1)] w-fit items-center justify-center rounded-lg text-center font-medium hover:-top-[2px] hover:-left-[2px] hover:shadow-[6px_8px_0px_-1px_rgba(0,0,0,1)] active:top-[2px] active:left-[2px] active:shadow-[2px_4px_0px_-1px_rgba(0,0,0,1)]",
        disabled: "pointer-events-none opacity-50",
        fullSized: "w-full",
        pill: "rounded-full",
        size: {
            xs: "h-8 px-3 text-xs",
            sm: "h-9 px-3 text-sm",
            md: "h-10 px-5 text-lg",
            lg: "h-12 px-5 text-base",
            xl: "h-[52px] px-6 text-base"
        },
        color: {
            default: "bg-white hover:bg-white text-black border-2",
        },
    }   
})

export default function LinkButton({text, link}: LinkButtonProps){
    return(
        <ThemeProvider theme={buttonTheme}>
            <Button as="a" href={link} size="md" color="default" className=''>{text}</Button>
        </ThemeProvider>
    );
}