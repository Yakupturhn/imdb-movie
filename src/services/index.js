const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcxZTg1N2IzMzA1MmUxMmM3MjQ4MjFhODc4ZmNhYyIsInN1YiI6IjY0YmE3MTk0MDZmOTg0MDExYjBkODQ2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PjRJ00B56DdM0tkuaB5kIr2iqSelyKY48oNcLLW3vlY`;
const ACCOUNT_ID = "20182854";

const fetcher = (url, { headers = {}, ...otherOptions } = {}) => {
  const commonHeaders = {
    Authorization: BEARER_TOKEN,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return fetch(`${BASE_URL}/${url}`, {
    headers: {
      ...commonHeaders,
      ...headers,
    },
    ...otherOptions,
  });
};

export const getMovieDetails = async (id) => {
  const response = await fetcher(`movie/${id}`);
  return await response.json();
};

export const getKeywordsResult = async (keyword) => {
  const response = await fetcher(`search/movie?query=${keyword}`);
  return response.json();
};

export const updateFavoriteStatus = async (mediaId, favorite) => {
  const endpoint = `account/${ACCOUNT_ID}/favorite`;

  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      media_type: "movie",
      media_id: mediaId,
      favorite,
    }),
  };

  try {
    const response = await fetcher(endpoint, requestOptions);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFavoriteMovies = async () => {
  const endpoint = `account/${ACCOUNT_ID}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`;

  try {
    const response = await fetcher(endpoint);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        `Failed to fetch favorite movies: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    throw error;
  }
};
