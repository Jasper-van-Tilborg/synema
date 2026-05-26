import Image from "next/image";

function BackArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}



export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-black text-white overflow-hidden">

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-5 pt-12 pb-8 shrink-0">
        <button className="invisible w-8 h-8 flex items-center justify-center text-white">
          <BackArrow />
        </button>
        <Image
            src="/synemalogo.png"
            alt="Synema"
            width={317}
            height={88}
            className="object-contain"
            priority
          />
        <div className="w-8 h-8" />
      </nav>

      {/* ── Hero content ── */}
      <section className="px-5 pt-2 pb-8 shrink-0">
        <h1 className="font-heading text-[26px] uppercase leading-[1.15] text-center">
          The screen is dark. The story is about to begin.
        </h1>
        <p className="font-sans text-[18px] tracking-[0.22em] text-center mt-5 text-white/70 uppercase">
          Where every frame tells a story.
        </p>
      </section>

      {/* ── Cinema hero image ── */}
      <div className="flex-1 min-h-0 relative">
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 82% 88% at 50% 50%, black 28%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 82% 88% at 50% 50%, black 28%, transparent 72%)",
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
      <div className="px-2 pb-5 shrink-0">
        <button className="w-full h-[55px] bg-white text-black rounded-2xl px-6 flex items-center justify-between">
          <span className="font-heading text-[30px] leading-none">NOW SHOWING</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 3 10 9 4 15" />
            <polyline points="9 3 15 9 9 15" />
          </svg>
        </button>
      </div>

      {/* ── Bottom navigation ── */}
      <div className="shrink-0">
        <nav className="bg-white rounded-t-3xl py-[18px] px-5 flex items-center justify-around">
          <button className="w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center">
            <Image src="/homeicon.svg" alt="Home" width={24} height={24} unoptimized />
          </button>
          <button className="w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/moveicon.svg" alt="Movies" width={24} height={24} unoptimized />
          </button>
          <button className="w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/ticketicon.svg" alt="Tickets" width={24} height={24} unoptimized />
          </button>
          <button className="w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/staricon.svg" alt="Favourites" width={24} height={24} unoptimized />
          </button>
        </nav>
      </div>

    </main>
  );
}
