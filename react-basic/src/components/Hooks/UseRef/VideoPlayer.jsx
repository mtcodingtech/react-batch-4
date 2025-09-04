import React, { useRef } from "react";

function VideoPlayer() {

    const videoRef = useRef(null);
    const inputRef = useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    }
     const pauseVideo = () => {
         videoRef.current.pause();
    }
    const focusInput = () => {
        inputRef.current.focus();
    }
  return (
    <>
      <video ref={videoRef}
        src="https://videos.pexels.com/video-files/2583492/2583492-hd_1920_1080_24fps.mp4"
      
        style={{ width: 400, height: 400 }}
      ></video>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>

      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default VideoPlayer;
