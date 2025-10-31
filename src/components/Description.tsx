import '../index.css'

export default function Description({text}: {text: string[]}){

    /* TODO: using .map would likely be more idiomatic */
    const listItems: React.ReactElement[] = [];

    let i : number = 0;
    for(const line of text) {
        listItems.push(<li key={i}>{line}</li>)
        i++;
    }
    
    return( 
        <>
            <ul className='list-disc list-inside'>
                {listItems}
            </ul>
        </>
    )
}