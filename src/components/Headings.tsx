export function SectionHeading( {text}: {text: string} ){
    return(
        <h2 className="font-(family-name:--display-font) text-center text-5xl sm:text-6xl font-bold my-24 ">{text}</h2>
    );
}

export function PageHeading( {text}: {text: string} ){
    return(
        <div className='font-(family-name:--display-font) bg-[var(--content)] pt-24 pb-12 border-b-0 mx-auto'>
            <h1 className="text-center text-7xl w-4xl font-bold mx-auto">{text}</h1>
        </div>
    );
}