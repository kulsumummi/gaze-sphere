import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

interface Props {
  title: string;
  movies: Movie[] | undefined;
  isLoading: boolean;
}

const SkeletonCard = () => (
  <div className="flex-shrink-0 w-[140px] md:w-[180px]">
    <div className="w-full aspect-[2/3] rounded-md bg-muted animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-muted via-accent to-muted" />
  </div>
);

const MovieRow = ({ title, movies, isLoading }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  };

  return (
    <section className="relative px-6 md:px-12 mb-10">
      <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
        {title}
      </h2>

      <div className="group relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-0 bottom-0 z-10 w-10 gradient-row-left flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        <div
          ref={ref}
          className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth py-1"
        >
          {isLoading
            ? Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)
            : movies?.map((m) => <MovieCard key={m.id} movie={m} />)}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-0 bottom-0 z-10 w-10 gradient-row-right flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default MovieRow;
