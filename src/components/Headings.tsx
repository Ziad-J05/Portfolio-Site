export function SectionHeading( {text}: {text: string} ){
    return(
        <h2 className="text-5xl font-bold mb-4">{text}</h2>
    );
}

export function PageHeading( {text}: {text: string} ){
    return(
        <h1 className="text-5xl w-5xl font-bold mb-4 mx-auto">{text}</h1>
    );
}