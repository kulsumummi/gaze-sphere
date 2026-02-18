import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";
import { useTrending, useTopRated, usePopular, useUpcoming } from "@/hooks/useMovies";

const Index = () => {
  const trending = useTrending();
  const topRated = useTopRated();
  const popular = usePopular();
  const upcoming = useUpcoming();

  const heroMovie = trending.data?.[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner movie={heroMovie} isLoading={trending.isLoading} />

      <div className="-mt-24 relative z-10">
        <MovieRow title="🔥 Trending Now" movies={trending.data} isLoading={trending.isLoading} />
        <MovieRow title="⭐ Top Rated" movies={topRated.data} isLoading={topRated.isLoading} />
        <MovieRow title="🎬 Popular" movies={popular.data} isLoading={popular.isLoading} />
        <MovieRow title="🎥 Upcoming" movies={upcoming.data} isLoading={upcoming.isLoading} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
