import LinkButton from "./LinkButton"

export default function IntroSection(){
  return (
    <>
        <section className="grid grid-cols-[1fr_calc(64*var(--spacing))] grid-auto-rows-auto gap-4 w-2xl mx-auto h-auto mb-[3rem]">
          <h1 className="justify-self-stretch self-center row-start-1 row-end-2 col-start-1 col-end-2 font-light text-5xl ">
            Hello, I'm<span className="block font-bold text-8xl">Ziad</span>
            <span className="block font-bold text-8xl ml-[1em]">Jaafar</span>
          </h1>
          <p className="justify-self-end-safe self-start row-start-2 row-end-3 col-start-1 col-end-2 text-lg">
            Game developer + software developer based out of Pittsburgh, PA
          </p>
          <img
            className="row-start-1 row-end-2 col-start-2 col-end-3 size-64 object-cover border-2 rounded-xl"
            src="/placeholder-photo.jpg"
          />
          <div className="self-center row-start-2 row-end-3 col-start-2 col-end-3">
            <LinkButton text="Get in contact" link="/contact" />
          </div>
        </section>
    </>
  )
}