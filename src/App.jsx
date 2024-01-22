import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { getMovieDetails, getFavoriteMovies } from "./services";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import SignUp from "./pages/signup/SignUp";
import SearchPage from "./pages/search/SearchPage";
import Favorite from "./pages/favorite/Favorite";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/movies/:id"
        element={<Detail />}
        loader={({ params }) => getMovieDetails(params.id)}
      />
      <Route path="/search/:keyword" element={<SearchPage />} />
      <Route
        path="/favorite"
        element={<Favorite />}
        loader={() => getFavoriteMovies()}
      />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
