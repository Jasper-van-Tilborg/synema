import Image from "next/image";
import Link from "next/link";

function BackArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export default function RevealPage() {
  return (
    <main className="h-dvh flex flex-col bg-black text-white overflow-hidden anim-page-in">

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-5 pt-[10.33dvh] pb-4 shrink-0 anim-fade-in">
        <Link href="/movies" className="w-8 h-8 flex items-center justify-center text-white transition-transform duration-150 hover:scale-110 active:scale-90">
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
        className="font-heading text-[30px] uppercase text-center px-5 pb-4 shrink-0 anim-slide-up"
        style={{ animationDelay: "100ms" }}
      >
        THIS ISN'T A CINEMA
      </h1>

      {/* ── Curtain image + floating ticket ── */}
      <div className="flex-1 min-h-0 relative anim-fade-in" style={{ animationDelay: "150ms" }}>
        <Image
          src="/image 102.svg"
          alt="Stage curtain"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="anim-float drop-shadow-2xl">
            <Image
              src="/coupon.svg"
              alt="Ticket"
              width={310}
              height={192}
              unoptimized
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Description ── */}
      <p
        className="font-sans text-[12px] text-center px-8 pt-5 pb-3 text-white/60 uppercase tracking-[0.18em] leading-relaxed shrink-0 anim-slide-up"
        style={{ animationDelay: "250ms" }}
      >
        The curtain has fallen. Welcome to the real stage.
      </p>

      {/* ── CTA ── */}
      <div
        className="px-6 pb-4 shrink-0 anim-slide-up"
        style={{ animationDelay: "350ms" }}
      >
        <a
          href="https://www.fontys.nl/en/Study-at-Fontys/Minors/Virtual-Production.htm?_gl=1*1b1u5br*_up*MQ..*_ga*MjExMjYzNjQ2OC4xNzgwMzEyNzY1*_ga_FT4J383QBN*czE3ODAzMTI3NjQkbzEkZzEkdDE3ODAzMTI3NzckajQ3JGwwJGgxOTU4ODE3MDEw"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-[55px] border-2 border-white text-white rounded-[30px] font-heading text-[26px] uppercase transition-all duration-200 hover:bg-white hover:text-black active:scale-[0.98] flex items-center justify-center"
        >
          READY TO ROLL?
        </a>
      </div>

      {/* ── Bottom navigation ── */}
      <div className="shrink-0 anim-slide-up" style={{ animationDelay: "450ms" }}>
        <nav className="bg-white rounded-t-3xl pt-[1.4dvh] pb-[1.76dvh] px-5 flex items-center justify-around">
          <Link href="/" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/homeicon.svg" alt="Home" width={22} height={22} unoptimized className="invert" />
          </Link>
          <Link href="/movies" className="w-[5.87dvh] h-[5.87dvh] flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/moveicon.svg" alt="Movies" width={22} height={22} unoptimized />
          </Link>
          <Link href="/reveal" className="w-[5.87dvh] h-[5.87dvh] bg-black rounded-full flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90">
            <Image src="/staricon.svg" alt="Favourites" width={22} height={22} unoptimized className="invert" />
          </Link>
        </nav>
      </div>

    </main>
  );
}
