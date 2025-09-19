import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About",
  description: "About description",
};

function About() {
  return (
    <>
      <div className="flex">
        <Image
          src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
          width={500}
          height={500}
          alt="img 1"
          style={{ width: 500, height: 500 }}
          loading="lazy"
        />
        <Image
          src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
          width={50}
          height={50}
          alt="img 1"
          style={{ width: 500, height: 500 }}
        />
      </div>
    </>
  );
}

export default About;
