export const customStyles = {
  color: "yellowgreen",
  backgroundColor: "aqua",
  padding: 20,
};

export const logoStyles = {
  width: 100,
  height: 100,
  objectFit: "contain",
};

export const btnStyles = (isMobile) => {
  return {
    backgroundColor: isMobile ? "blue" : "green",
    color: "#fff",
  };
};
