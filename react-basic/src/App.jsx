import Button from "./components/Button";
import Logo from "./components/Logo";
import Shop from "./components/Props/Shop";
import WelcomeClass from "./components/WelcomeClass";
import WelcomeFunc from "./components/WelcomeFunc";
import { customStyles } from "./utils/styles";

function App() {
  return (
    <div>
      {/* <h1>Hello</h1>
      <WelcomeFunc></WelcomeFunc>
      <WelcomeClass></WelcomeClass> */}
      {/* <Shop />
      <h5 style={customStyles}>Button</h5> */}
      {/* <Logo /> */}
      <Button isMobile={true} />
      <Button></Button>
    </div>
  );
}

export default App;
