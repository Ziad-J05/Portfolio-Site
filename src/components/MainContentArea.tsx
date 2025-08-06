import { ReactElement } from 'react';
import '../index.css'

function MainContentArea({content}: {content: ReactElement[]}){

  return(
    <>
      <main className="bg-[#F7EDE2] py-36 mx-auto w-4xl min-h-[calc(100vh-var(--text-lg)-8*var(--spacing))] border-l-2 border-r-2">
          {content}
      </main>
    </>
  )
}

export default MainContentArea