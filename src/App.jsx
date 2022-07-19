import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./screens/Detail/Detail";
import Home from "./screens/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} exact element={<Home />} />
        <Route path={`/:id`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
