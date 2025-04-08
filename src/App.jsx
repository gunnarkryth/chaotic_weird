import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/home/Home";
import { CampaignDetails } from "./pages/campaign/CampaignDetails";
import { PageMissing } from "./pages/error/PageMissing";
import { PersonDetails } from "./pages/person/PersonDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="campaign/:slug" element={<CampaignDetails />} />
            <Route path="profile/:slug" element={<PersonDetails />} />
            <Route path="/*" element={<PageMissing />} />
            <Route path="session" element={<PageMissing />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
