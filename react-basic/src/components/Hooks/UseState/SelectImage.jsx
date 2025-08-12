import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
  "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg",
  "https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg",
  "https://images.pexels.com/photos/1171170/pexels-photo-1171170.jpeg",
];
function SelectImage() {
  const [selectImg, setSelectImg] = useState(images[0]);
  return (
    <>
      <img src={selectImg} class="big-img" alt="img" />
      <div className="thumbnails">
        {images.map((image, index) => {
          return (
            <img
              className="thumbnail"
              key={index}
              src={image}
              onClick={() => setSelectImg(image)}
            />
          );
        })}
      </div>
      <style jsx>{`
        .big-img {
          width: 300px;
          height: 300px;
          object-fit: cover;
        }
        .thumbnails {
          display: flex;
          gap: 0.5rem;
        }
        .thumbnail {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}

export default SelectImage;
