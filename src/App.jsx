import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
