import { Routes, Route } from "react-router-dom";
//Pages
import Home from "./components/pages/Home";
import MoviePage from "./components/pages/MoviePage";
import MovieByTitle from "./components/pages/MovieByTitle";
import About from "./components/pages/About";
import SearchByRating from "./components/pages/SearchByRating";
//Css
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-title" element={<MovieByTitle />} />
        <Route path="/search-rating" element={<SearchByRating />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
