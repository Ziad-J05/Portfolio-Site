import { ReactElement } from 'react';
import '../index.css'

interface MainContentAreaProps{
  width: string
  content: ReactElement[]
}

function MainContentArea({width, content}: MainContentAreaProps){

  const mainClass:string = "bg-[var(--secondary)] py-24 mx-auto w-full min-h-[calc(100vh-var(--text-lg)-8*var(--spacing))]"

  return(
    <>
      <main className={mainClass}>
          {content}
      </main>
    </>
  )
}

export default MainContentArea