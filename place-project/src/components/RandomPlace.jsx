import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import { useSelector } from "react-redux";
import CustomButton from "./CustomButton";

function RandomPlace() {
  const [random, setRandom] = useState(null);
  const places = useSelector((state) => state.places);

  const getRandomPlace = () => {
    const randomPlace = Math.floor(Math.random() * places.length);
    setRandom(randomPlace);
  };
  console.log("random", places[random], random);
  return (
    <>
      <CustomButton
        btnText="Suggest Random Place"
        clickEvent={getRandomPlace}
      />
      {random && (
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="max-w-sm">
            <PlaceCard place={places[random]} />
          </div>
        </div>
      )}
    </>
  );
}

export default RandomPlace;
