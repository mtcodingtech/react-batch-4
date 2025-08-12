import Button from "./components/Button";
import ComponentA from "./components/Hooks/PropsDrilling/ComponentA";
import SimpleUseEffect from "./components/Hooks/UseEffect/SimpleUseEffect";
import CRUD from "./components/Hooks/UseState/CRUD";
import DynamicBox from "./components/Hooks/UseState/DynamicBox";
import FormWithUseState from "./components/Hooks/UseState/FormWithUseState";
import InputWithUseState from "./components/Hooks/UseState/InputWithUseState";
import SelectImage from "./components/Hooks/UseState/SelectImage";
import SimpleUseState from "./components/Hooks/UseState/SimpleUseState";
import Logo from "./components/Logo";
import Shop from "./components/Props/Shop";
import Title from "./components/Props/Title";
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
      {/* <Button isMobile={true} />
      <Button></Button> */}

      {/* <Title title={"Hello"} />
      <Title /> */}

      {/* <InputWithUseState /> */}
      {/* <SimpleUseState /> */}
      {/* <DynamicBox /> */}
      {/* <FormWithUseState /> */}
      {/* <CRUD /> */}
      {/* <SelectImage /> */}
      {/* <ComponentA /> */}
      <SimpleUseEffect />
    </div>
  );
}

export default App;
