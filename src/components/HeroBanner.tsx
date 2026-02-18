import { Play, Info } from "lucide-react";
import type { Movie } from "@/types/movie";
import { IMAGE_BASE } from "@/services/tmdb";

interface Props {
  movie: Movie | undefined;
  isLoading: boolean;
}

const HeroBanner = ({ movie, isLoading }: Props) => {
  if (isLoading || !movie) {
    return (
      <div className="relative h-[85vh] w-full bg-muted animate-pulse" />
    );
  }

  return (
    <div className="relative h-[85vh] w-full">
      <img
        src={`${IMAGE_BASE}${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-hero-left" />

      <div className="absolute bottom-[15%] left-6 md:left-12 max-w-xl z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 text-foreground drop-shadow-lg">
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
    </div>
  );
};

export default HeroBanner;
