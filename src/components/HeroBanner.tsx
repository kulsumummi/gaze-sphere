import { useState, useEffect, useCallback } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import type { Movie } from "@/types/movie";
import { IMAGE_BASE } from "@/services/tmdb";

interface Props {
  movies: Movie[] | undefined;
  isLoading: boolean;
}

const HeroBanner = ({ movies, isLoading }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = movies?.slice(0, 5) ?? [];

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused || slides.length === 0) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next, slides.length]);

  if (isLoading || slides.length === 0) {
    return <div className="relative h-[85vh] w-full bg-muted animate-pulse" />;
  }

  const movie = slides[activeIndex];

  return (
    <div
      className="relative h-[85vh] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((m, i) => (
        <img
          key={m.id}
          src={`${IMAGE_BASE}${m.backdrop_path}`}
          alt={m.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-hero-left" />

      {/* Content */}
      <div className="absolute bottom-[18%] left-6 md:left-12 max-w-xl z-10">
        <h1
          key={movie.id}
          className="text-4xl md:text-6xl font-black leading-tight mb-4 text-foreground drop-shadow-lg animate-fade-in-up"
        >
          {movie.title}
        </h1>
        <p className="text-sm md:text-base text-foreground/80 line-clamp-2 mb-6 leading-relaxed">
          {movie.overview}
        </p>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-2.5 rounded-md hover:bg-foreground/85 transition-colors">
            <Play className="w-5 h-5 fill-current" />
            Play
          </button>
          <button className="flex items-center gap-2 bg-muted-foreground/30 text-foreground font-semibold px-6 py-2.5 rounded-md hover:bg-muted-foreground/40 transition-colors backdrop-blur-sm">
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/40 backdrop-blur-sm flex items-center justify-center hover:bg-background/60 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/40 backdrop-blur-sm flex items-center justify-center hover:bg-background/60 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === activeIndex ? "bg-primary" : "bg-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
