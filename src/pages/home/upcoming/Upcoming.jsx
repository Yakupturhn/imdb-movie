import Movies from "@/components/Movies";
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Upcoming = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genre = searchParams.get("genre");
  const [movies, setMovies] = useState([]);
  const [selectedTab, setSelectedTab] = useState("upcoming");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const moviesPerPage = 8;
  const [loading, setLoading] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState(moviesPerPage);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedTab}?language=en-US&page=${page}`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcxZTg1N2IzMzA1MmUxMmM3MjQ4MjFhODc4ZmNhYyIsInN1YiI6IjY0YmE3MTk0MDZmOTg0MDExYjBkODQ2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PjRJ00B56DdM0tkuaB5kIr2iqSelyKY48oNcLLW3vlY",
              accept: "application/json",
            },
          }
        );

        const data = await response.json();
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedTab, page]);

  const tabs = [
    {
      name: "En Fazla Oy Alan",
      url: "top_rated",
    },
    {
      name: "Yaklaşan",
      url: "upcoming",
    },
  ];

  const handleTabClick = (tabUrl) => {
    setSearchParams({ genre: tabUrl });
    setSelectedTab(tabUrl);
    setPage(1);
    setMovies([]);
    setMoviesToShow(moviesPerPage);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setMoviesToShow((prev) => prev + moviesPerPage);
    }
  };

  return (
    <div className="p-5 bg-[#04152e] container text-white items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          className={` text-2xl mx-5 cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre
              ? "underline text-amber-600 underline-offset-8"
              : null
          }`}
          onClick={() => handleTabClick(tab.url)}
        >
          {tab.name}
        </Link>
      ))}

      <div className="mt-6 flex flex-wrap justify-start items-center gap-4">
        {movies.slice(0, moviesToShow).map((movie, i) => (
          <Movies key={i} movie={movie} />
        ))}
      </div>

      {loading && <p>Loading...</p>}

      <div className="flex items-center justify-center">
        {!loading && page < totalPages && (
          <button
            className="mt-4 bg-line text-white p-3 rounded-md "
            onClick={handleLoadMore}
          >
            Daha Fazla
          </button>
        )}
      </div>
    </div>
  );
};

export default Upcoming;
