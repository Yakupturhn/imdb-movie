import { useState } from "react";
import { toast } from "sonner";

import { Link } from "react-router-dom";
import { updateFavoriteStatus } from "@/services";
import { HeartIcon } from "lucide-react";

const Movies = ({ movie }) => {
  console.log(movie);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeartClick = async (e) => {
    e.preventDefault();

    try {
      setIsFavorite(!isFavorite);
      toast.promise(updateFavoriteStatus(movie?.id, !isFavorite), {
        loading: "Favoriye Ekleniyor...",
        success: (data) => {
          if (data?.success) return `${movie.title} favorilere eklendi`;
          return `${movie.title} favorilere eklenemedi`;
        },
        error: "Favoriye eklenemedi!",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Link to={`/movies/${movie?.id}`}>
      <div
        className={`cursor-pointer relative ${
          isFavorite ? "bg-red-500" : "hover:bg-gray-800"
        }`}
      >
        <img
          className="w-[400px] h-[300px] object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />

        <div className="absolute bottom-0 text-white p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40">
          <div className="text-2xl font-bold cursor-pointer">
            {movie?.title}
          </div>
          <div>
            {movie?.release_date} - {movie.vote_average}
          </div>

          <HeartIcon
            size="20px"
            fill={isFavorite ? "red" : "transparent"}
            className="absolute top-4 right-4"
            stroke="red"
            onClick={handleHeartClick}
          />
        </div>
      </div>
    </Link>
  );
};

export default Movies;
