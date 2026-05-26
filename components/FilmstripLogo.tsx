const HOLES = 9;

const Holes = () => (
  <div className="flex justify-around items-center py-[3px] px-1">
    {Array.from({ length: HOLES }).map((_, i) => (
      <div key={i} className="w-[10px] h-[7px] bg-white rounded-[2px]" />
    ))}
  </div>
);

export default function FilmstripLogo() {
  return (
    <div className="border-2 border-white inline-flex flex-col">
      <Holes />
      <div className="border-y-2 border-white px-7 py-1">
        <span className="font-heading text-[1.6rem] tracking-wide text-white leading-none">
          Synema
        </span>
      </div>
      <Holes />
    </div>
  );
}
