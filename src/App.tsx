import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ShowcaseLayout } from "./shared/layouts/ShowcaseLayout";
import { ComponentsPage } from "./features/showcase/ComponentsPage";
import TimeCost1Page from "./features/time-cost/TimeCost1Page";
import TimeInflationPage from "./features/time-inflation/TimeInflationPage";
import AboutPage from "./features/about/AboutPage";
import HowToFixDemocracyPage from "./features/democracy/HowToFixDemocracyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ShowcaseLayout />}>
          <Route path="/" element={<Navigate to="/time-cost" replace />} />
          <Route path="/time-cost" element={<TimeCost1Page />} />
          <Route path="/time-inflation" element={<TimeInflationPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/time-cost-3" element={<AboutPage />} />
          <Route path="/time-cost-6" element={<HowToFixDemocracyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
