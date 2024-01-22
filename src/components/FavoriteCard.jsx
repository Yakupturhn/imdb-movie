import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const FavoriteCard = ({ movie }) => {
  function currentDate(tarihString) {
    var tarih = new Date(tarihString);

    var duzeltilmisTarih = tarih.toLocaleDateString("tr-TR");

    return duzeltilmisTarih;
  }
  return (
    <div>
      <div>
        <Link to={`/movies/${movie.id}`}>
          <div className="w-[150px] h-auto  bg-[#04152e] hover:opacity-80 transition-opacity ease-out cursor-pointer ">
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

            <div className="flex items-start  flex-col mt-6">
              <div className="text-xl text-white">{movie?.title}</div>
              <div className="text-[#838a96]">
                {currentDate(movie?.release_date)}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteCard;
