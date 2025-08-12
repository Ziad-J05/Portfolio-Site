import { ReactElement } from 'react';
import '../index.css'

interface MainContentAreaProps{
  width: string
  content: ReactElement[]
}

function MainContentArea({width, content}: MainContentAreaProps){

  const mainClass:string = "bg-[var(--secondary)] py-36 mx-auto w-" + width + " min-h-[calc(100vh-var(--text-lg)-8*var(--spacing))] border-l-2 border-r-2"

  return(
    <>
      <main className={mainClass}>
          {content}
      </main>
    </>
  )
}

export default MainContentArea