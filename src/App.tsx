import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components imports
import Header from "./components/atoms/Header/Header";
import Home from "./components/atoms/Home/Home";
import MovieList from "./components/atoms/MovieList/MoveList";
import MovieDetail from "./components/atoms/MovieDetail/MovieDetail";
import SeriesList from "./components/atoms/Series/SeriesList";
import SeriesDetail from "./components/atoms/SeriesDetail/SeriesDetail";
import Search from "./components/atoms/Search/Search";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Search />
        <Routes>
          <Route
            index
            element={<h1 style={{ color: "white" }}>{<Home />}</h1>}
          ></Route>
          <Route
            path="movie/:id"
            element={<h1 style={{ color: "white" }}>{<MovieDetail />}</h1>}
          ></Route>
          <Route
            path="movies/:type"
            element={<h1 style={{ color: "white" }}>{< MovieList />}</h1>}
          ></Route>

          { /* TV Show routes */}
            <Route
            path="tvs/:type"
            element={<h1 style={{ color: "white" }}>{<SeriesList />}</h1>}
          ></Route>
           <Route
            path="tv/:id"
            element={<h1 style={{ color: "white" }}>{<SeriesDetail />}</h1>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
