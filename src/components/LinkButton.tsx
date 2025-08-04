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
        base: "relative flex shadow-[4px_6px_0px_-1px_rgba(0,0,0,1)] items-center justify-center rounded-lg text-center font-medium",
        disabled: "pointer-events-none opacity-50",
        fullSized: "w-full",
        grouped: "rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2",
        pill: "rounded-full",
        size: {
            xs: "h-8 px-3 text-xs",
            sm: "h-9 px-3 text-sm",
            md: "h-10 px-5 text-sm",
            lg: "h-12 px-5 text-base",
            xl: "h-[52px] px-6 text-base"
        },
        color: {
            default: "bg-white text-black hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
        },
        outlineColor: {
            default: "border-8 border-black text-primary-700",
        }
    }   
})

export default function LinkButton({text, link}: LinkButtonProps){
    return(
        <ThemeProvider theme={buttonTheme}>
            <Button as="a" href={link} color="default" className='w-fit border'>{text}</Button>
        </ThemeProvider>
    );
}