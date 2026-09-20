import Image from "next/image";
import Link from "next/link";
import portrait from "@/public/Unknown.jpeg";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-[80vh] max-w-5xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_0.75fr] lg:px-8">
      <div>
        <p className="eyebrow">Physics · Exoplanets · Education</p>

        <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight text-ink sm:text-7xl">
          Sophia Phelps
        </h1>

        <p className="mt-7 max-w-2xl text-xl leading-8 text-ink">
          NSF Graduate Research Fellow and Physics Ph.D. student at
          UC Irvine.
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-muted">
          I recently graduated from UCLA with a B.S. in Physics. My research
          focuses on stellar magnetic activity and its impact on exoplanet
          detection. At NASA&apos;s Jet Propulsion Laboratory, I study the
          equivalent-width variability of Zeeman-sensitive near-infrared solar
          absorption lines.
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-muted">
          I am also passionate about collaborative and inclusive teaching. I
          aim to create learning environments where students feel comfortable
          asking questions, exploring ideas, and building confidence.{" "}
          <Link
            href="/about"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            Read more about my path into physics →
          </Link>
        </p>
      </div>

  <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg">
        <Image
          src={portrait}
          alt="Portrait of Sophia Phelps"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 384px"
        />
      </div>
    </main>
  );
}
