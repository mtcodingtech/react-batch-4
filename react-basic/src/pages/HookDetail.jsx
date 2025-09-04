import React from "react";
import { useParams } from "react-router-dom";
import SelectImage from "../components/Hooks/UseState/SelectImage";
import SimpleUseEffect from "../components/Hooks/UseEffect/SimpleUseEffect";
import VideoPlayer from "../components/Hooks/UseRef/VideoPlayer";

function HookDetail() {
  const { id } = useParams();

  return (
    <>
      {id === "useState" ? (
        <SelectImage />
      ) : id === "useEffect" ? (
        <SimpleUseEffect />
      ) : (
        <VideoPlayer />
      )}
    </>
  );
}

export default HookDetail;
