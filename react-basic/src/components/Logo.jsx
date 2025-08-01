import { logoStyles } from "../utils/styles";
import viteLogo from "/vite.svg";

function Logo() {
  return (
    <>
      <img
        style={logoStyles}
        src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
      ></img>
      <img src={viteLogo}></img>
    </>
  );
}
export default Logo;
