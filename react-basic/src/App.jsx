import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import HOC from "./components/HOC/HOC";
import Test from "./components/HOC/Test";
import Input from "./components/Hooks/CustomHook/Input";
import ComponentA from "./components/Hooks/PropsDrilling/ComponentA";
import APIData from "./components/Hooks/UseEffect/APIData";
import Clock from "./components/Hooks/UseEffect/Clock";
import SimpleUseEffect from "./components/Hooks/UseEffect/SimpleUseEffect";
import VideoPlayer from "./components/Hooks/UseRef/VideoPlayer";
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
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hooks from "./pages/Hooks";
import HookDetail from "./pages/HookDetail";

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
      {/* <SimpleUseEffect /> */}
      {/* <Clock /> */}
      {/* <APIData /> */}

      {/* <VideoPlayer /> */}
      {/* <Input /> */}
      {/* <HOC />
      <Test /> */}
      
      <Routes>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/welcome" element={<WelcomeFunc />} ></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/hooks" element={<Hooks />}></Route>
        <Route path="/hooks/:id" element={<HookDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
