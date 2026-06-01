"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Theme = {
  accent: string;
  dark: string;
  pill: string;
  pillText: string;
};

export default function MovieActions({
  showtimes,
  theme,
}: {
  showtimes: string[];
  theme: Theme;
  movieTitle: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5">

      {/* Showtimes */}
      <div className="flex gap-3 anim-slide-up" style={{ animationDelay: "400ms" }}>
        {showtimes.map((time) => {
          const isSelected = selected === time;
          return (
            <button
              key={time}
              onClick={() => setSelected(isSelected ? null : time)}
              className="font-sans text-[13px] px-4 py-2 rounded-full transition-all duration-250 hover:scale-[1.08] active:scale-95"
              style={
                isSelected
                  ? { background: theme.pill, color: theme.pillText }
                  : {
                      background: "transparent",
                      color: theme.accent,
                      border: `1.5px solid ${theme.accent}55`,
                      opacity: 0.55,
                    }
              }
            >
              {time}
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <button
        disabled={!selected}
        onClick={() => selected && router.push("/reveal")}
        className={`w-full h-[58px] rounded-[30px] font-heading text-[28px] uppercase mt-2 anim-slide-up transition-all duration-300 ${
          selected
            ? "hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            : "cursor-not-allowed"
        }`}
        style={{
          background: selected ? theme.accent : `${theme.accent}30`,
          color: selected ? "#fff" : `${theme.accent}70`,
          animationDelay: "500ms",
        }}
      >
        GET YOUR TICKET
      </button>

    </div>
  );
}
