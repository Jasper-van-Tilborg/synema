import Image from "next/image";
import Link from "next/link";
import { movies } from "@/lib/movies";

function BackArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export default function MoviesPage() {
  return (
    <main className="h-dvh flex flex-col bg-black text-white overflow-hidden anim-page-in">

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-5 pt-[10.33dvh] pb-[3dvh] shrink-0 anim-fade-in">
        <Link href="/" className="w-8 h-8 flex items-center justify-center text-white transition-transform duration-150 hover:scale-110 active:scale-90">
          <BackArrow />
        </Link>
        <Image
          src="/synemalogo.png"
          alt="Synema"
          width={317}
          height={88}
          className="object-contain h-[10.33dvh] w-auto max-w-[80vw]"
          priority
        />
        <div className="w-8 h-8" />
      </nav>

      {/* ── Title ── */}
      <h1
        className="font-heading text-[30px] uppercase text-center px-5 pb-[2dvh] shrink-0 anim-slide-up"
        style={{ animationDelay: "100ms" }}
      >
        NOW SHOWING
      </h1>

      {/* ── Scrollable movie grid ── */}
      <div className="flex-1 overflow-y-auto px-4 pb-3">
        <div className="grid grid-cols-2 gap-3">
          {movies.map((movie, i) => (
            <Link
              key={movie.id}
              href={`/movies/${movie.id}`}
              className="block anim-slide-up transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
              style={{ animationDelay: `${150 + i * 75}ms` }}
            >
              <div className="relative aspect-[158/282]">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  unoptimized
                  className="object-contain object-center"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Bottom navigation ── */}
      <div className="shrink-0 anim-slide-up" style={{ animationDelay: "400ms" }}>
        <nav className="bg-white rounded-t-3xl pt-[1.4dvh] pb-[1.76dvh] px-5 flex items-center justify-around">
          <Link href="/" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/homeicon.svg" alt="Home" width={22} height={22} unoptimized className="invert" />
          </Link>
          <Link href="/movies" className="w-[5.87dvh] h-[5.87dvh] bg-black rounded-full flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/moveicon.svg" alt="Movies" width={22} height={22} unoptimized className="invert" />
          </Link>
          <Link href="/reveal" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/staricon.svg" alt="Favourites" width={22} height={22} unoptimized />
          </Link>
        </nav>
      </div>

    </main>
  );
}
