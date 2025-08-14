export function SectionHeading( {text}: {text: string} ){
    return(
        <h2 className="font-(family-name:--display-font) text-center text-6xl font-bold mb-12 mt-24 ">{text}</h2>
    );
}

export function PageHeading( {text}: {text: string} ){
    return(
        <h1 className="font-(family-name:--display-font) text-center text-6xl w-5xl font-bold mb-4 mx-auto">{text}</h1>
    );
}