import { ReactElement } from 'react';
import '../index.css'

interface ContentContainerProps {
      content: ReactElement[];
      bottomMargin: boolean;
      width?: string;
    }


export default function ContentContainer({content, bottomMargin, width}: ContentContainerProps){

    let containterClass:string = "w-" + width + " mx-auto"
    if (bottomMargin){
        containterClass += " mb-12"
    }

    return(
        <div className={containterClass}>
            {content}
        </div>
    );
}