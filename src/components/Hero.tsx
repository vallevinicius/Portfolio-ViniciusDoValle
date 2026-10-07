export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20">
      <div className="grid items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-6 flex items-center gap-3 text-base font-medium text-tide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-buoy opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-buoy" />
            </span>
            Open to new opportunities
          </p>

          <h1 className="font-display text-[clamp(3.5rem,13vw,9.5rem)] font-extrabold leading-[0.88] tracking-[-0.045em]">
            <span className="rise"><span>Vinicius</span></span>
            <span className="rise"><span>Valle</span></span>
          </h1>

          <p className="mt-8 max-w-[34rem] text-xl leading-relaxed text-muted">
            Software Engineer from Saquarema, Rio de Janeiro. I build APIs and web apps with
            Java, Node.js and React, from the database to the interface, and I care about code
            that stays clear and fast under load.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#work"
              className="rounded-full bg-ink px-7 py-3.5 font-semibold text-foam transition-colors hover:bg-buoy hover:text-ink"
            >
              See my projects
            </a>
            <a
              href="mailto:contatoviniciusvalledev@gmail.com"
              className="font-semibold underline decoration-buoy decoration-2 underline-offset-8"
            >
              Send an email
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[20rem] pb-3 lg:col-span-4 lg:max-w-none">
          <div aria-hidden className="absolute inset-0 left-3 top-3 rounded-2xl border-2 border-buoy bg-buoy/10" />
          <img
            src="/Foto%20perfil.jpeg"
            alt="Portrait of Vinicius Valle"
            width={480}
            height={600}
            className="relative aspect-[4/5] w-[calc(100%-0.75rem)] rounded-2xl object-cover object-[55%_75%]"
          />
        </figure>
      </div>
    </section>
  );
}
