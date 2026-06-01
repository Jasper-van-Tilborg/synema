import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { movies } from "@/lib/movies";
import MovieActions from "./MovieActions";

function BackArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function generateStaticParams() {
  return movies.map((m) => ({ id: m.id }));
}

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === id);
  if (!movie) notFound();

  const { theme } = movie;

  return (
    <div className="h-dvh flex flex-col text-white anim-page-in" style={{ background: theme.dark }}>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto">

        {/* Hero image */}
        <div className="relative anim-fade-in">
          <Image
            src={movie.detailImage}
            alt={movie.title}
            width={393}
            height={700}
            unoptimized
            className="w-full h-auto block"
            priority
          />
          <nav className="absolute top-6 left-0 right-0 flex items-center px-5 mt-4">
            <Link
              href="/movies"
              className="w-8 h-8 flex items-center justify-center text-white transition-transform duration-150 hover:scale-110 active:scale-90"
            >
              <BackArrow />
            </Link>
          </nav>
        </div>

        {/* Movie info */}
        <div className="px-6 pt-6 pb-8 flex flex-col gap-5">

          <p
            className="font-sans text-[13px] tracking-[0.18em] uppercase leading-relaxed anim-slide-up"
            style={{ color: theme.accent, animationDelay: "150ms" }}
          >
            {movie.tagline}
          </p>

          <p
            className="font-sans text-[14px] leading-[1.8] uppercase tracking-wide text-white/60 anim-slide-up"
            style={{ animationDelay: "250ms" }}
          >
            {movie.description}
          </p>

          <div
            className="flex items-center gap-2 anim-slide-up"
            style={{ animationDelay: "350ms" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: theme.accent }}>
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="font-sans text-[13px] uppercase tracking-wider text-white/70">
              {movie.location}
            </span>
          </div>

          <MovieActions showtimes={movie.showtimes} theme={theme} movieTitle={movie.title} />

        </div>
      </div>

      {/* ── Bottom navigation ── */}
      <div className="shrink-0 anim-slide-up" style={{ animationDelay: "300ms" }}>
        <nav className="rounded-t-3xl pt-[1.4dvh] pb-[1.76dvh] px-5 flex items-center justify-around" style={{ background: theme.accent }}>
          <Link href="/" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/homeicon.svg" alt="Home" width={22} height={22} unoptimized />
          </Link>
          <Link href="/movies" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/moveicon.svg" alt="Movies" width={22} height={22} unoptimized className="invert" />
          </Link>
          <Link href="/reveal" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/staricon.svg" alt="Favourites" width={22} height={22} unoptimized className="invert" />
          </Link>
        </nav>
      </div>

    </div>
  );
}
