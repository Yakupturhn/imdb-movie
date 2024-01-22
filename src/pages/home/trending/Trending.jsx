import { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieCard from "@/components/MovieCard";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=3b71e857b33052e12c724821a878fcac",
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcxZTg1N2IzMzA1MmUxMmM3MjQ4MjFhODc4ZmNhYyIsInN1YiI6IjY0YmE3MTk0MDZmOTg0MDExYjBkODQ2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PjRJ00B56DdM0tkuaB5kIr2iqSelyKY48oNcLLW3vlY",
              Accept: "application/json",
            },
          }
        );

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#04152e]">
      <Tabs defaultValue="daily" className="">
        <div className="flex items-center justify-between mb-4 py-0 px-4">
          <div className="text-2xl font-normal text-white">Trendler</div>
          <div>
            <TabsList className="grid mt-4  w-full  rounded-3xl">
              <TabsTrigger value="daily">Günlük</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent
          value="daily"
          className="flex items-center justify-center w-full"
        >
          <div>
            <Carousel className="w-full bg-[#04152e] max-w-[300px] md:max-w-[700px] lg:max-w-[1200px]">
              <CarouselContent>
                {movies.map((movie, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2"
                  >
                    <div className="flex gap-10">
                      <MovieCard movie={movie} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Trending;
