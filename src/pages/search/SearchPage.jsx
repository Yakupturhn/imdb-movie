import MovieCard from "@/components/MovieCard";
import { getKeywordsResult } from "@/services";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getResult = async () => {
      try {
        const result = await getKeywordsResult(params.keyword);
        setData(result);
      } catch (error) {
        console.error("Error fetching keywords result:", error);
      }
    };

    getResult();
  }, [params.keyword]);

  return (
    <>
      <div className="container">
        <div className="text-white py-4 bg-[#04152d]">
          Arama Sonuçları "{params.keyword}"
        </div>

        <div className="flex   justify-center bg-[#04152d]  lg:justify-start  flex-wrap items-center gap-4  w-full h-full">
          {data?.results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
