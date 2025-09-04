import React from "react";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function PlaceCard({ place }) {
  const { id, name, image, description, visited } = place;
  return (
    <div className="bg-white p-5 rounded-lg">
      <img src={image} alt="img" className="aspect-video object-cover" />
      <div className="text-center my-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{description}</p>
        <h4 className="font-extrabold text-sm text-orange-400 my-2 pb-2">
          {visited ? "Visited" : "Not Visited"}
        </h4>
      </div>
      <div className="flex justify-between">
        <CustomButton
          btnText={"Mark as visited"}
          startIcon={<FontAwesomeIcon icon={faLocationPin} />}
        />
        <Link to={`${id}`}>
          <CustomButton
            btnText={"View Detail"}
            endIcon={<FontAwesomeIcon icon={faArrowRight} />}
          />
        </Link>
      </div>
    </div>
  );
}

export default PlaceCard;
