import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowcaseLayout } from "./shared/layouts/ShowcaseLayout";
import { ComponentsPage } from "./features/showcase/ComponentsPage";
import TimeCost1Page from "./features/time-cost/TimeCost1Page";
import TimeCost2Page from "./features/time-cost/TimeCost2Page";
import AboutPage from "./features/about/AboutPage";
import HowToFixDemocracyPage from "./features/democracy/HowToFixDemocracyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ShowcaseLayout />}>
          <Route path="/" element={<TimeCost1Page />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/time-cost-2" element={<TimeCost2Page />} />
          <Route path="/time-cost-3" element={<AboutPage />} />
          <Route path="/time-cost-6" element={<HowToFixDemocracyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
