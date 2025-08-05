import { ReactElement } from 'react';
import '../index.css'

interface ContentContainerProps {
      content: ReactElement[];
      bottomMargin: boolean;
    }


export default function ContentContainer({content, bottomMargin}: ContentContainerProps){

    /* TODO: add optional bottom margin using ternary operator on class */
    return(
        <div className={bottomMargin ? 'w-2xl mx-auto mb-12' : 'w-2xl mx-auto'}>
            {content}
        </div>
    );
}