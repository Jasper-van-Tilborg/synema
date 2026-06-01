import Image from "next/image";
import Link from "next/link";

function BackArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="h-dvh flex flex-col bg-black text-white overflow-hidden anim-page-in">

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-5 pt-[10.33dvh] pb-[6.1dvh] shrink-0 anim-fade-in">
        <button className="invisible w-8 h-8 flex items-center justify-center text-white">
          <BackArrow />
        </button>
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

      {/* ── Hero content ── */}
      <section className="px-3 shrink-0">
        <h1
          className="font-heading text-[26px] uppercase leading-[1.15] text-center anim-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          The screen is dark. The story is about to begin.
        </h1>
        <p
          className="font-sans text-[18px] tracking-[0.22em] text-center mt-2 text-white/70 uppercase anim-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          Where every frame tells a story.
        </p>
      </section>

      {/* ── Cinema hero image ── */}
      <div
        className="flex-1 min-h-0 relative anim-fade-in"
        style={{ animationDelay: "150ms" }}
      >
        <div
          className="absolute inset-0"
          style={{
            maskImage: "radial-gradient(ellipse 82% 88% at 50% 50%, black 28%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse 82% 88% at 50% 50%, black 28%, transparent 72%)",
          }}
        >
          <Image
            src="/homepagehero.svg"
            alt="Cinema hall"
            fill
            unoptimized
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* ── CTA Button ── */}
      <div
        className="px-4 pt-[5.05dvh] pb-[4.34dvh] shrink-0 anim-slide-up"
        style={{ animationDelay: "350ms" }}
      >
        <Link
          href="/movies"
          className="w-full h-[6.45dvh] bg-white text-black rounded-[30px] px-6 flex items-center justify-between transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="font-heading text-[30px] leading-none">NOW SHOWING</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 3 10 9 4 15" />
            <polyline points="9 3 15 9 9 15" />
          </svg>
        </Link>
      </div>

      {/* ── Bottom navigation ── */}
      <div
        className="shrink-0 anim-slide-up"
        style={{ animationDelay: "450ms" }}
      >
        <nav className="bg-white rounded-t-3xl pt-[1.4dvh] pb-[1.76dvh] px-5 flex items-center justify-around">
          <Link href="/" className="w-[5.87dvh] h-[5.87dvh] bg-black rounded-full flex items-center justify-center transition-transform duration-150 hover:scale-[1.1] active:scale-90">
            <Image src="/homeicon.svg" alt="Home" width={22} height={22} unoptimized />
          </Link>
          <Link href="/movies" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-[1.1] active:scale-90">
            <Image src="/moveicon.svg" alt="Movies" width={22} height={22} unoptimized />
          </Link>
          <Link href="/reveal" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-[1.1] active:scale-90">
            <Image src="/staricon.svg" alt="Favourites" width={22} height={22} unoptimized />
          </Link>
        </nav>
      </div>

    </main>
  );
}
