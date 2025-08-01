// function Fruit(props) {
//     console.log(props)
//     return(
//         <>
//             <h3>{props.name}</h3>
//         </>
//     )
// }

import { customStyles } from "../../utils/styles";

function Fruit({ name, price, children }) {
  return (
    <>
      <h3 style={customStyles}>{name}</h3>
      <p style={{ color: "pink" }} className="para-style">
        {price}
      </p>
      {children}
      <hr />
    </>
  );
}

export default Fruit;
