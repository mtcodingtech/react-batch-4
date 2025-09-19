import React from "react";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PlaceCard from "../components/PlaceCard";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idInte = parseInt(id);
  const place = useSelector((state) =>
    state.places.find((place) => place.id === idInte)
  );

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-5xl py-5">
          <Title title={"Historical Places"} />
          <CustomButton
            btnText="Go Back"
            startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
            clickEvent={() => navigate(-1)}
          />
          <div className="flex justify-center items-center min-h-[80vh]">
            <div className="max-w-sm">
              <PlaceCard place={place} isDetail={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceDetail;
