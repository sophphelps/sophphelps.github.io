export default function TeachingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="eyebrow">Teaching</p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Teaching and mentorship
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          Teaching has become a really important part of my time in physics. I
          enjoy helping students work through difficult material, become more
          comfortable asking questions, and build confidence in their own
          abilities.
        </p>
      </header>

      <section
        className="mt-16 border-t border-line py-16"
        aria-labelledby="experience-heading"
      >
        <h2
          id="experience-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Experience
        </h2>

        <div className="mt-8 max-w-3xl space-y-8">
          <article>
            <h3 className="font-serif text-2xl font-semibold text-ink">
              UC Irvine Graduate Teaching Assistant
            </h3>

            <p className="mt-3 leading-7 text-muted">
              I serve as a graduate teaching assistant for Physics 7C: Classical Mechanics. In this
              role, I work with undergraduate students as they develop their
              problem-solving skills and build a stronger conceptual
              understanding of mechanics.
            </p>
          </article>

          <article className="border-t border-line pt-8">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              UCLA Learning Assistant Program
            </h3>

            <p className="mt-3 leading-7 text-muted">
              I served as a Learning Assistant for four academic quarters in
              Physics 1C: Electrodynamics, Optics, and Special Relativity;
              Physics 5A: Mechanics and Energy for Life Sciences Majors; and
              Math 31A: Differential and Integral Calculus.
            </p>

            <p className="mt-3 leading-7 text-muted">
              When I first joined the program, I attended a quarter-long
              pedagogy seminar where I learned about student-centered teaching,
              growth mindset, inclusive teaching, and how to use questions to
              help students work through problems on their own. I was able to
              use what I learned directly in discussion sections while working
              with students in small groups.
            </p>

            <p className="mt-3 leading-7 text-muted">
              I later became a Pedagogy Head for Physics 5A. In that role, I
              helped facilitate the pedagogy seminars for new Learning
              Assistants and supported the LA team throughout the quarter.
            </p>
          </article>

          <article className="border-t border-line pt-8">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              MIPA Mentorship
            </h3>

            <p className="mt-3 leading-7 text-muted">
              I also served as an upper-division mentor through Marginalized
              Identities in Physics and Astronomy, or MIPA. I mentored two
              lower-division students and helped them navigate classes,
              research opportunities, and some of the less obvious parts of
              being a physics student at UCLA.
            </p>
          </article>

          <article className="border-t border-line pt-8">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              Tutoring
            </h3>

            <p className="mt-3 leading-7 text-muted">
              Through StudySTEM, I have tutored more than 100 students in math
              and physics, from middle school through college. Since every
              student learns differently, I try to adjust how I explain things
              based on what works best for them.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
