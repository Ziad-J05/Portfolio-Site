import './index.css'

export default function Description({text}: {text: string[]}){

    /* TODO: using .map would likely be more idiomatic */
    const listItems: React.ReactElement[] = [];

    for(const line of text) {
        listItems.push(<li>{line}</li>)
    }
    
    return( 
        <>
            <ul>
                {listItems}
            </ul>
        </>
    )
}