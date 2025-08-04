export default function AboutSection({content}: {content: string[]}){

    /* TODO: using .map would likely be more idiomatic */
        const aboutText: React.ReactElement[] = [];
    
        for(const paragraph of content) {
            aboutText.push(<p>{paragraph}</p>)
        }
        

    return(
        <>
            <section className="w-2xl mx-auto mb-[3rem]">
                {aboutText}
            </section>
        </>
    )
}