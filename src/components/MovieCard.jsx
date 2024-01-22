import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        <div className="w-[300px] h-auto  bg-[#04152e] hover:opacity-80 transition-opacity ease-out cursor-pointer ">
          <AspectRatio ratio={1 / 1.5}>
            {movie.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="Image"
                className="rounded-md object-cover h-full  w-full"
              />
            ) : (
              <div>Image not available</div>
            )}
          </AspectRatio>

          <div className="p-0 flex relative ">
            {movie.genre_ids.map((genre) => {
              return (
                <div
                  key={genre.id}
                  className="absolute bottom-4 lef-4 z-10 rounded-full p-4 flex items-center justify-center bg-white w-[50px] h-[50px]"
                >
                  {genre}
                </div>
              );
            })}
            <div className="text-white flex items-center gap-2 justify-center absolute bottom-6 right-4">
              <div className="text-xs bg-[#da2f68] px-[4px] py-[1px] rounded-md">
                History
              </div>
              <div className="text-xs bg-[#da2f68] px-[4px] py-[1px] rounded-md">
                War
              </div>
            </div>
          </div>

          <div className="flex items-start  flex-col mt-6">
            <div className="text-xl text-white">{movie?.title}</div>
            <div className="text-[#838a96]">{movie?.release_date}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
