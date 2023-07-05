import { Home } from './Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Movies } from './Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
