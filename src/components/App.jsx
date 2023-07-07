import { Home } from './Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Movies } from './Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Rewievs/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
