import { PlayIcon } from "lucide-react";
import { useLoaderData } from "react-router-dom";

export default function Detail() {
  const movieDetails = useLoaderData();

  return (
    <div className="p-10 relative bg-[#04152e] ">
      <div className="flex-col flex h-full lg:flex-row gap-10 bg-[#04152e]">
        <div className="absolute  top-0 w-full h-full left-0 overflow-hidden opacity-10 bg-center	 object-contain">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            alt=""
            className="rounded-md object-cover h-full  w-full"
          />
        </div>
        <div className="lg:w-[400px] lg:h-[500px] w-auto h-auto">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            alt=""
            className="rounded-md object-cover h-full  w-full"
          />
        </div>
        <div className="flex text-white flex-col">
          <span className="text-3xl mb-2 text-[#8c8d97]">
            {movieDetails.title}
          </span>
          <span className="text-[#8c8d97] text-lg mb-2">
            {movieDetails.tagline}
          </span>
          <div className="flex items-center gap-4 mb-2">
            <div className="h-20 w-20 flex items-center justify-center rounded-full p-4 border-2 mb-2">
              <PlayIcon size="40" />
            </div>

            <span className="text-[#8c8d97]">Watch Trailer</span>
          </div>
          <div className="flex items-center gap-1 ">
            {movieDetails?.genres?.map((genre) => {
              return (
                <span key={genre.id} className="text-black">
                  <div className="text-xs bg-[#da2f68] px-[4px] text-white py-[1px] rounded-md">
                    {genre.name}
                  </div>
                </span>
              );
            })}
          </div>

          <div className="flex flex-col mb-2 max-w-[700px]">
            <div className="text-2xl mb-2 text-[#8c8d97]">Overview</div>
            <div className="pr-20 leading-6 text-[#8c8d97]	">
              {movieDetails.overview}
            </div>
          </div>
          <div className="text-[#8c8d97] flex flex-col gap-2">
            <div>Durum: {movieDetails.status}</div>
            <div className="text-[#1e2d43] h-1 flex "></div>
            <div>Yayınlanma Tarihi: {movieDetails.release_date}</div>
            <div>{movieDetails.tagline}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
