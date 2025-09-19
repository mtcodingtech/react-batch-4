import React from "react";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Apple, Camera } from "lucide-react";
import CustomButton from "../components/CustomButton";
import PlaceCards from "../components/PlaceCards";
import RandomPlace from "../components/RandomPlace";

function PlacesList() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-5xl py-5">
        <Title title={"Historical Places"} />
       
        <RandomPlace />

        <Title title={"All Historical Places"} customStyles={"mt-4"} />
        <PlaceCards />
      </div>
    </div>
  );
}

export default PlacesList;
