import FavoriteCard from "@/components/FavoriteCard";
import { useLoaderData } from "react-router-dom";

const Favorite = () => {
  const favoriteMovies = useLoaderData();

  return (
    <div className="container">
      <div className="text-white text-2xl my-4"> Favoriler</div>
      <div className="text-white lg:justify-start justify-center items-center flex gap-4 flex-wrap">
        {favoriteMovies?.results.map((movie) => {
          return <FavoriteCard key={movie.page} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Favorite;
