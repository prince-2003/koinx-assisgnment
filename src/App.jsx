import TrendingCoins from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/:id" element={<Hero />} />
        </Routes>

        <TrendingCoins />
      </BrowserRouter>
    </>
  );
}

export default App;
