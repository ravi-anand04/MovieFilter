import React from "react";
// import { movies } from "../constant";
import { Button } from "flowbite-react";
import Card from "../Card";
import { useState } from "react";
import { useEffect } from "react";
import { movies } from "../constant";

const Movies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(movies);
  }, []);

  const handleFilter = (type) => {
    if (type == "All") {
      setItems(movies);
    } else {
      const updatedMovies = movies.filter(
        (movie, index) => movie.genre == type
      );

      setItems(updatedMovies);
    }
  };

  return (
    <div>
      <h1 className="ml-12 mt-4 text-2xl font-bold">Movies</h1>
      <div className="flex gap-4 genres m-12">
        <Button onClick={() => handleFilter("All")} color="blue">
          ALL
        </Button>
        <Button onClick={() => handleFilter("Sci-Fi")} color="gray">
          Sci-Fi
        </Button>
        <Button onClick={() => handleFilter("Adventure")} color="dark">
          Adventure
        </Button>
        <Button onClick={() => handleFilter("Drama")} color="light">
          Drama
        </Button>
        <Button onClick={() => handleFilter("Romance")} color="success">
          Romance
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap movies m-12">
        {items.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
