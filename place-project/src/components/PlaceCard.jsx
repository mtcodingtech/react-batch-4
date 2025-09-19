import React from "react";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { markAsVisited, unmarkAsVisited } from "../redux/placesSlice";

function PlaceCard({ place, isDetail }) {
  const { id, name, image, description, visited } = place;
  const dispatch = useDispatch();
  const btnAlign = isDetail ? "justify-center" : "justify-between";

  const toggleVisitedStatus = (id, visited) => {
    visited ? dispatch(unmarkAsVisited(id)) : dispatch(markAsVisited(id));
  };
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
      <div className={`flex ${btnAlign}`}>
        <CustomButton
          clickEvent={() => toggleVisitedStatus(id, visited)}
          btnText={visited ? "Unmark as visited" : "Mark as visited"}
          startIcon={<FontAwesomeIcon icon={faLocationPin} />}
        />
        {!isDetail ? (
          <Link to={`${id}`}>
            <CustomButton
              btnText={"View Detail"}
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default PlaceCard;
