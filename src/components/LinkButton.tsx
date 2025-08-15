import '../index.css'
import { 
    Button,
    createTheme,
    ThemeProvider,
    
} from 'flowbite-react'

interface LinkButtonProps {
    text: string;
    link: string;
}

const buttonTheme = createTheme({
    button: {
        base: "font-(family-name:--display-font) relative flex shadow-[2px_4px_0px_-1px_rgba(0,0,0,1)] items-center justify-center rounded-lg text-center font-medium hover:-translate-[2px] hover:shadow-[4px_6px_0px_-1px_rgba(0,0,0,1)] active:translate-[2px] active:shadow-[0px_2px_0px_-1px_rgba(0,0,0,1)] focus:ring-0",
        disabled: "pointer-events-none opacity-50",
        fullSized: "w-full",
        pill: "rounded-full",
        size: {
            xs: "h-8 px-3 text-xs",
            sm: "h-9 px-3 text-sm",
            md: "h-fit py-2 px-5 text-2xl w-fit",
            lg: "h-fit py-2 px-5 text-2xl",
            xl: "h-[52px] px-6 text-base"
        },
        color: {
            default: "bg-[var(--primary)] hover:bg-[var(--primary)] text-[var(--content)] border-2 border-black",
        },
    }   
})

export function LinkButton({text, link}: LinkButtonProps){
    return(
        <ThemeProvider theme={buttonTheme}>
            <Button as="a" href={link} size="md" color="default" className='transition-all duration-150 ease-out'>{text}</Button>
        </ThemeProvider>
    );
}

export function LinkButtonFull({text, link}: LinkButtonProps){
    return(
        <ThemeProvider theme={buttonTheme}>
            <Button fullSized as="a" href={link} size="lg" color="default" className='transition-all duration-150 ease-out'>{text}</Button>
        </ThemeProvider>
    );
}