import React from "react";
import { Card } from "flowbite-react";

const MovieCard = (props) => {
  const { name, genre, rating } = props.movie;
  return (
    <div className="">
      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{genre}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{rating}</p>
      </Card>
    </div>
  );
};

export default MovieCard;
