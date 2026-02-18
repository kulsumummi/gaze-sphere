import { POSTER_BASE } from "@/services/tmdb";
import type { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  if (!movie.poster_path) return null;

  return (
    <div className="relative flex-shrink-0 w-[140px] md:w-[180px] group cursor-pointer">
      <div className="overflow-hidden rounded-md">
        <img
          src={`${POSTER_BASE}${movie.poster_path}`}
          alt={movie.title}
          className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 rounded-md bg-background/0 group-hover:bg-background/40 transition-all duration-300 flex items-end p-2 opacity-0 group-hover:opacity-100">
        <span className="text-xs font-semibold text-foreground line-clamp-2 drop-shadow-md">
          {movie.title}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
