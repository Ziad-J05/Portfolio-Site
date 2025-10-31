import { ReactElement } from 'react';
import '../index.css'

interface ContentContainerProps {
      content: ReactElement;
      fixedWidth: boolean;
    }


export default function ContentContainer({content, fixedWidth}: ContentContainerProps){

    /* TODO: add optional bottom margin using ternary operator on class */
    return(
        <div className={fixedWidth ? 'w-2xl mx-auto mb-12' : 'w-fit mx-auto'}>
            {content}
        </div>
    );
}