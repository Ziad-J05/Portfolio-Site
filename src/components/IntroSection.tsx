import { LinkButton } from "./LinkButton"

export default function IntroSection(){
  return (
    
        <section className="font-(family-name:--display-font) flex flex-col md:grid md:grid-cols-[1fr_calc(64*var(--spacing))] lg:grid-cols-[1fr_calc(72*var(--spacing))] grid-auto-rows-auto gap-4 w-full md:w-2xl lg:w-3xl mx-auto h-auto mb-16 pt-32">
          <h1 className="justify-self-stretch self-center row-start-1 row-end-2 col-start-1 col-end-2 font-light text-5xl ">
            Hello, I'm<span className="block font-bold text-8xl sm:text-9xl md:text-8xl lg:text-9xl text-[var(--secondary)] text-shadow-[6px_6px_0px_rgba(0,0,0,1),-3px_-3px_0_rgba(0,0,0,1),-3px_3px_0_rgba(0,0,0,1),3px_-3px_0_rgba(0,0,0,1)]">Ziad</span>
            <span className="block font-bold text-8xl sm:text-9xl md:text-8xl lg:text-9xl text-[var(--secondary)] text-shadow-[6px_6px_0px_rgba(0,0,0,1),-3px_-3px_0_rgba(0,0,0,1),-3px_3px_0_rgba(0,0,0,1),3px_-3px_0_rgba(0,0,0,1)] sm:ml-12 pr-2">Jaafar</span>
          </h1>
          <p className="justify-self-end-safe self-center text-center md:text-left w-xs sm:w-sm md:w-full md:self-start row-start-2 row-end-3 col-start-1 col-end-2 text-xl font-semibold">
            Game developer + software developer based out of Pittsburgh, PA
          </p>
          <img
            className="row-start-1 row-end-2 col-start-2 col-end-3 size-64 sm:size-72 md:size-64 lg:size-72 object-cover border-2 self-center md:self-end rounded-xl"
            src="/ziad-jaafar-portrait-v2.jpg"
            alt="Photograph of the developer"
          />
          <div className="self-center row-start-2 row-end-3 col-start-2 col-end-3">
            <LinkButton text="Get in contact" link="/contact" arrow/>
          </div>
        </section>
    
  )
}