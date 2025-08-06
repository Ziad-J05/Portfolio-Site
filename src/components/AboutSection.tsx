import ContentContainer from "./ContentContainer";

export default function AboutSection({content}: {content: string[]}){

    /* TODO: using .map would likely be more idiomatic */
        const aboutText: React.ReactElement[] = [];
    
        for(const paragraph of content) {
            aboutText.push(<p className="text-lg">{paragraph}</p>)
        }
        

    return(
        <div className="border-2 rounded-lg bg-white px-2 py-1">
            {aboutText}
        </div>
    )
}