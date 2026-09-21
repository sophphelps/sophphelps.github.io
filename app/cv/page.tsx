import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageIntro } from "@/components/PageIntro";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "CV",
};

type CVEntry = {
  institution: string;
  dates: string;
  position: ReactNode;
  location: string;
  note?: ReactNode;
};

const education: CVEntry[] = [
  {
    institution: "University of California, Irvine",
    dates: "Sept. 2026 – June 2031 (Expected)",
    position: "Physics, Ph.D.",
    location: "Irvine, CA",
  },
  {
  institution: "University of California, Los Angeles",
  dates: "Sept. 2022 – June 2026",
  position: "Physics, B.S.",
  location: "Los Angeles, CA",
  },
];

const researchAndWork: CVEntry[] = [
  {
    institution: "University of California, Irvine",
    dates: "Sept. 2026 – Present",
    position: <>NSF Graduate Research Fellow <span className="cv-detail">(Advisor: Prof. Paul Robertson)</span></>,
    location: "Irvine, CA",
  },
  {
    institution: "Jet Propulsion Laboratory, California Institute of Technology",
    dates: "June 2025 – Present",
    position: <>Student Research Intern, SURF@JPL <span className="cv-detail">(Mentor: Dr. Gautam Vasisht)</span></>,
    location: "Pasadena, CA",
  },
  {
    institution: "Regan Research Group, University of California, Los Angeles",
    dates: "March 2025 – Jan. 2026",
    position: <>Undergraduate Researcher <span className="cv-detail">(Advisor: Prof. Chris Regan)</span></>,
    location: "Los Angeles, CA",
  },
  {
    institution: "UCLA Learning Assistant Program",
    dates: "Jan. 2026 – June 2026",
    position: <>Education Research Intern <span className="cv-detail">(Advisor: Prof. Shanna Shaked)</span></>,
    location: "Los Angeles, CA",
  },
  {
    institution: "StudySTEM",
    dates: "2021 – Present",
    position: "Founder",
    location: "Los Angeles, CA",
  },
];

const teachingAndService: CVEntry[] = [
  {
    institution: "University of California, Irvine",
    dates: "Sept. 2026 – Present",
    position: "Graduate Teaching Assistant",
    location: "Irvine, CA",
    note: (
      <>
        <strong>Course:</strong> Physics 7C (Fall 2026).
      </>
    ),
  },
  {
    institution: "UCLA Learning Assistant Program",
    dates: "April 2024 – June 2026",
    position:
      "Pedagogy Head Learning Assistant; Course Coordinator; Learning Assistant",
    location: "Los Angeles, CA",
    note: (
      <>
        <strong>Courses:</strong> Physics 1C (Spring 2024); Physics 5A (Fall
        2024 and Spring 2026); Math 31A (Winter 2026).
      </>
    ),
  },
  {
    institution: "MIPA, University of California, Los Angeles",
    dates: "Oct. 2025 – June 2026",
    position: "Upper-Division Mentor",
    location: "Los Angeles, CA",
  },
  {
    institution: "Upsilon Lab, University of California, Los Angeles",
    dates: "Sept. 2024 – June 2026",
    position: "External Vice President",
    location: "Los Angeles, CA",
  },
];

const awards = [
  ["NSF Graduate Research Fellowship, National Science Foundation", "2026"],
  ["Summer Undergraduate Research Fellowship, California Institute of Technology", "2025"],
  ["E. Lee Kinsey Memorial Scholarship, University of California, Los Angeles", "2025"],
] as const;

export default function CVPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="no-print">
        <PageIntro
          eyebrow="Curriculum vitae"
          title="Experience, education, and selected work."
        >
          <p>An HTML version of my academic curriculum vitae.</p>
        </PageIntro>

        <div className="mt-8">
          <PrintButton />
        </div>
      </div>

      <article className="cv-document mt-14 w-full min-w-0 max-w-full rounded-lg border border-line bg-white px-4 py-9 shadow-quiet sm:px-10 sm:py-11">
        <header className="cv-header text-center">
          <h1 className="font-serif text-3xl font-bold uppercase tracking-[0.04em] text-ink sm:text-5xl">
            Sophia Phelps
          </h1>
          <p className="mt-3 text-sm font-medium text-ink sm:text-base">
            Physics Ph.D. Student, UC Irvine <span aria-hidden="true">◇</span> NSF Graduate Research Fellow
          </p>
          <address className="mt-2 flex min-w-0 flex-wrap justify-center gap-x-2 text-xs not-italic text-muted sm:text-sm">
            <a href="mailto:phelpssn@uci.edu" className="min-w-0 max-w-full break-all hover:text-accent hover:underline">
              phelpssn@uci.edu
            </a>
            <span aria-hidden="true">◇</span>
            <a href="mailto:sophia.n.phelps@jpl.nasa.gov" className="min-w-0 max-w-full break-all hover:text-accent hover:underline">
              sophia.n.phelps@jpl.nasa.gov
            </a>
            <span aria-hidden="true">◇</span>
            <a
              href="https://www.linkedin.com/in/sophia-phelps"
              className="min-w-0 max-w-full break-all hover:text-accent hover:underline"
            >
              linkedin.com/in/sophia-phelps
            </a>
            <span aria-hidden="true">◇</span>
            <span>Irvine, CA</span>
          </address>
        </header>

        <CVSection title="Education">
          <CVEntries entries={education} />
        </CVSection>

        <CVSection title="Research and Work Experience">
          <CVEntries entries={researchAndWork} />
        </CVSection>

        <CVSection title="Awards, Grants, and Honors">
          <p className="font-semibold text-ink">Total: $170,600</p>
          <div className="mt-3 space-y-2">
            {awards.map(([award, year]) => (
              <div key={award} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-8">
                <p>{award}</p>
                <p>{year}</p>
              </div>
            ))}
          </div>
        </CVSection>

        <CVSection title="Publications">
          <CVList>
            <li>
              Phelps, S., et al. “Equivalent Width Diagnostics of Solar Magnetic Activity.”{" "}
              <em>UCLA Undergraduate Science Journal</em>, published May 28, 2026.
            </li>
          </CVList>
        </CVSection>

        <CVSection title="Programming and Technical Skills">
          <CVList>
            <li>
              <strong>Programming:</strong> Python (NumPy, SciPy, Pandas, Matplotlib, Astropy, barycorrpy, scikit-learn, PyTorch, and Keras); MATLAB; C++.
            </li>
            <li>
              <strong>Scientific computing and tools:</strong> Git, Linux/Bash, Jupyter, VS Code, LaTeX, and FITS.
            </li>
          </CVList>
        </CVSection>

        <CVSection title="Teaching, Service, and Outreach">
          <CVEntries entries={teachingAndService} />
        </CVSection>

        <CVSection title="Presentations">
          <h3 className="font-semibold text-ink">Oral Presentations</h3>
          <CVList>
            <li>
              "Near-Infrared Solar Lines and Magnetic Activity for Improved Radial Velocity Precision in Sun-like Stars." JPL SIP Final Presentation, Pasadena, CA, August 2026.
            </li>
            <li>
              “Near-Infrared Solar Line Diagnostics of Magnetic Activity for Improved Radial Velocity Precision.” SURF@JPL Final Presentation, Pasadena, CA, August 2025.
            </li>
          </CVList>

          <h3 className="mt-4 font-semibold text-ink">Posters</h3>
          <CVList>
            <li>
              “Near-Infrared Solar Line Diagnostics of Magnetic Activity for Improved Radial Velocity Precision.” Southern California Conference for Undergraduate Research, CSU Channel Islands, Nov. 2025.
            </li>
          </CVList>
        </CVSection>
      </article>
    </main>
  );
}

function CVSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-section mt-8">
      <h2 className="border-b border-ink pb-1 text-sm font-bold uppercase tracking-[0.08em] text-ink">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-6 text-muted">{children}</div>
    </section>
  );
}

function CVEntries({ entries }: { entries: CVEntry[] }) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <article key={`${entry.institution}-${entry.dates}`} className="cv-entry break-inside-avoid">
          <div className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8">
            <h3 className="font-semibold text-ink">{entry.institution}</h3>
            <p className="sm:text-right">{entry.dates}</p>
            <p>{entry.position}</p>
            <p className="sm:text-right">{entry.location}</p>
          </div>
          {entry.note && <p className="mt-2 text-xs italic">{entry.note}</p>}
        </article>
      ))}
    </div>
  );
}

function CVList({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-ink">
      {children}
    </ul>
  );
}
