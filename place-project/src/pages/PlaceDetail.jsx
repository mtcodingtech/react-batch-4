import React from "react";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PlaceCard from "../components/PlaceCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PlaceDetail() {
  const { id } = useParams();
  const idInte = parseInt(id);
  const place = useSelector(state => state.places.find(place => place.id === idInte) )

  return (
    <>
      <Title title={"Historical Places"} />
      <CustomButton
        btnText="Go Back"
        startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
      />

      <PlaceCard place={place} />
    </>
  );
}

export default PlaceDetail;
