import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sophia Phelps’s path from Arlington and UCLA to exoplanet research, teaching, and graduate study at UC Irvine.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="eyebrow">About</p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          About me
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          Hi, I’m Sophia! I’m a Physics Ph.D. student and NSF Graduate
          Research Fellow at UC Irvine.
        </p>
      </header>

      <section
        className="mt-16 border-t border-line py-16"
        aria-labelledby="path-heading"
      >
        <h2
          id="path-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          My path into physics
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            I grew up in Arlington, Virginia, right outside of Washington, D.C.
            I went to Washington-Liberty High School, where I graduated ranked
            first in my class. I became interested in astronomy in high school
            after watching <em>Cosmos</em> and taking a few space science
            courses through the Virginia Space Grant Consortium.
          </p>

          <p>
            I went to UCLA for college and received my B.S. in Physics. I also
            completed the coursework for the Astrophysics major. Even though I
            had been interested in space for a long time, I actually had a
            pretty hard time figuring out what kind of research I wanted to do.
          </p>

          <p>
            I first worked in condensed matter physics, where I studied
            ferroelectric materials and nanoscale devices. I learned a lot from
            that experience, especially about reading technical papers, coding,
            and working with a research group, but I eventually realized that
            it was not the field I wanted to stay in.
          </p>

          <p>
            Later, I took a class on planets and exoplanets, and that helped
            bring me back to the questions that originally made me interested
            in physics. I became especially interested in how we detect planets
            that we cannot directly see and how activity on stars can make that
            more difficult.
          </p>
        </div>
      </section>

      <section
        className="border-t border-line py-16"
        aria-labelledby="research-direction-heading"
      >
        <h2
          id="research-direction-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Finding my research direction
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            That interest led me to NASA’s Jet Propulsion Laboratory, where I
            now study stellar magnetic activity using high-resolution
            near-infrared spectra of the Sun. My research looks at how changes
            in stellar absorption lines could help us separate signals caused
            by the star from signals caused by orbiting planets.
          </p>
        </div>
      </section>

      <section
        className="border-t border-line py-16"
        aria-labelledby="teaching-heading"
      >
        <h2
          id="teaching-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Why teaching and mentorship matter to me
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            My path through college was not always straightforward. I am a
            low-income, first-generation student, and I had to figure out a lot
            of the college and research process on my own. I also worked
            throughout college and helped support my family. Tutoring became my
            main source of income, but it also became something I genuinely
            cared about.
          </p>

          <p>
            Through tutoring and the UCLA Learning Assistant Program, I found
            that I really enjoy helping students work through difficult
            material and become more confident in physics. Because I know what
            it feels like to enter academic spaces without knowing all of the
            unwritten rules, I care a lot about making research and higher
            education feel more accessible.
          </p>
        </div>
      </section>

      <section
        className="border-t border-line py-16"
        aria-labelledby="looking-ahead-heading"
      >
        <h2
          id="looking-ahead-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Looking ahead
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            As I start graduate school, I hope to continue growing as both a
            researcher and a teacher. Long term, I would love to lead a
            research group focused on exoplanets while also creating a
            supportive environment where students feel comfortable asking
            questions and finding their place in science.
          </p>
        </div>
      </section>
    </main>
  );
}
