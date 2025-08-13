import { LinkButton } from "./LinkButton"

export default function IntroSection(){
  return (
    <>
        <section className="grid grid-cols-[1fr_calc(64*var(--spacing))] grid-auto-rows-auto gap-4 w-2xl mx-auto h-auto mb-16 pt-32">
          <h1 className="justify-self-stretch self-center row-start-1 row-end-2 col-start-1 col-end-2 font-light text-5xl ">
            Hello, I'm<span className="block font-bold text-8xl text-[var(--secondary)] text-shadow-[4px_4px_0px_rgba(0,0,0,1),-2px_-2px_0_rgba(0,0,0,1),-2px_2px_0_rgba(0,0,0,1),2px_-2px_0_rgba(0,0,0,1)]">ZIAD</span>
            <span className="block font-bold text-8xl text-[var(--secondary)] text-shadow-[4px_4px_0px_rgba(0,0,0,1),-2px_-2px_0_rgba(0,0,0,1),-2px_2px_0_rgba(0,0,0,1),2px_-2px_0_rgba(0,0,0,1)] ml-4">JAAFAR</span>
          </h1>
          <p className="justify-self-end-safe self-start row-start-2 row-end-3 col-start-1 col-end-2 text-xl font-semibold">
            Game developer + software developer based out of Pittsburgh, PA
          </p>
          <img
            className="row-start-1 row-end-2 col-start-2 col-end-3 size-64 object-cover border-2 self-center rounded-xl"
            src="/placeholder-photo.jpg"
          />
          <div className="self-center row-start-2 row-end-3 col-start-2 col-end-3">
            <LinkButton text="Get in contact" link="/contact" />
          </div>
        </section>
    </>
  )
}