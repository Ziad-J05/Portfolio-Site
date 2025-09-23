import { ReactElement } from 'react';
import '../index.css'
import {
    Button,
    createTheme,
    ThemeProvider,
} from 'flowbite-react'
import { ArrowRight } from './Icons';

interface LinkButtonProps {
    text: string;
    link: string;
    arrow?: boolean;
    disabled?: boolean;
}

const buttonTheme = createTheme({
    button: {
        base: "font-(family-name:--display-font) relative flex shadow-(--shadow) items-center justify-center rounded-lg text-center font-medium hover:-translate-[2px] hover:shadow-(--shadow-hover) active:translate-[2px] active:shadow-(--shadow-active) focus:ring-0",
        disabled: "pointer-events-none opacity-100 !bg-[rgb(180,180,180)] shadow-none",
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

export function LinkButton({ text, link, arrow, disabled }: LinkButtonProps) {
    return (
        <ThemeProvider theme={buttonTheme}>
            <Button as="a" href={link} size="md" color="default" className='transition-all duration-150 ease-out'>{text}{arrow ? <div className='ml-2'><ArrowRight /></div> : <></>}</Button>
        </ThemeProvider>
    );
}

export function LinkButtonFull({ text, link, arrow, disabled }: LinkButtonProps) {

    return (
        <ThemeProvider theme={buttonTheme}>
            {disabled ?
                <Button disabled fullSized size="lg" color="default">{text}{arrow ? <ArrowRight /> : <></>}</Button> :
                <Button fullSized as="a" href={link} size="lg" color="default" className='transition-all duration-150 ease-out'>{text}{arrow ? <ArrowRight /> : <></>}</Button>
            }

        </ThemeProvider>
    );
}