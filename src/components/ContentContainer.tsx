import { ReactElement } from 'react';
import '../index.css'

export default function ContentContainer({content}: {content: ReactElement[]}){

    /* TODO: add optional bottom margin */
    return(
        <div className="w-xl mx-auto">
            {content}
        </div>
    );
}