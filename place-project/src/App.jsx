
import { Route, Routes } from "react-router-dom";
import PlacesList from "./pages/PlacesList";
import PlaceDetail from "./pages/PlaceDetail";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PlacesList />}></Route>
        <Route path="/:id" element={<PlaceDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
