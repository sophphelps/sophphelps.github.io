import Image from "next/image";
import palomar from "@/public/palomar-observatory.jpeg";

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="eyebrow">Research</p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          How active stars complicate the search for planets
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          I study how magnetic activity on stars affects the search for
          exoplanets. Variability caused by starspots, magnetic regions, and
          other features on a star&apos;s surface can produce signals that
          resemble or obscure those caused by orbiting planets.
        </p>
      </header>

      <section
        className="mt-16 border-t border-line py-16"
        aria-labelledby="jpl-project-heading"
      >
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2
              id="jpl-project-heading"
              className="font-serif text-3xl font-semibold text-ink"
            >
              Using the Sun to better understand other stars
            </h2>

            <div className="mt-6 space-y-5 leading-7 text-muted">
              <p>
                At NASA&apos;s Jet Propulsion Laboratory, I analyze
                high-resolution observations of the Sun collected with the
                PARVI spectrograph and the SoCalSoCal solar feed at Palomar
                Observatory. Because the Sun is the star we can study in the
                greatest detail, it provides a valuable benchmark for
                understanding the behavior of more distant stars.
              </p>

              <p>
                One way to detect an exoplanet is to measure the small motion it
                causes in its host star. As a planet orbits, its gravity pulls
                the star slightly back and forth, producing subtle shifts in
                the wavelengths of the star&apos;s light. This technique is
                known as the radial velocity method.
              </p>

              <p>
                Detecting small planets with radial velocities requires
                extremely precise measurements. The challenge is that activity
                on the star itself can also alter its spectrum, creating
                apparent velocity signals that can imitate or mask the
                signature of a planet.
              </p>
            </div>
          </div>

          <figure>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={palomar}
                alt="Palomar Observatory"
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <figcaption className="mt-3 text-sm leading-6 text-muted">
              Palomar Observatory, home of the PARVI spectrograph used in my
              solar observations.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="border-t border-line py-16"
        aria-labelledby="stellar-activity-heading"
      >
        <div className="max-w-3xl">
          <h2
            id="stellar-activity-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-ink"
          >
            Separating stellar activity from planetary signals
          </h2>

          <div className="mt-6 space-y-5 leading-7 text-muted">
            <p>
              My research focuses on understanding how stellar magnetic
              activity affects high-precision radial velocity measurements.
              These activity-driven signals are often referred to as stellar
              noise or stellar jitter and represent one of the major challenges
              in detecting low-mass exoplanets.
            </p>

            <p>
              I use high-resolution near-infrared spectroscopy to investigate
              how features in the solar spectrum change as magnetic activity
              evolves across the Sun. Studying these variations helps us better
              understand which spectroscopic signals originate from the star
              itself rather than from an orbiting planet.
            </p>

            <p>
              The Sun is particularly useful for this work because its activity
              and rotation can be studied far more closely than those of other
              stars. Solar observations therefore provide a controlled way to
              test techniques for identifying and mitigating stellar activity
              signals before applying them to other planetary systems.
            </p>

            <p>
              The broader goal of this work is to improve our ability to
              distinguish stellar variability from true planetary motion.
              Better stellar-noise mitigation will become increasingly
              important as radial velocity surveys push toward the detection of
              smaller, potentially Earth-like planets.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-t border-line py-16"
        aria-labelledby="research-outputs-heading"
      >
        <div className="max-w-3xl">
          <p className="eyebrow">Research outputs</p>

          <h2
            id="research-outputs-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink"
          >
            Read more about my work
          </h2>

          <p className="mt-5 leading-7 text-muted">
            For a more detailed look at the methods and analysis behind this
            work, you can view my research poster or read my journal paper,
            both written for a general scientific audience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH ?? ""
              }/Sophia_Phelps_Poster.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              View Poster
            </a>

            <a
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH ?? ""
              }/sophia-phelps-journal-article.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Read Journal Paper
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
