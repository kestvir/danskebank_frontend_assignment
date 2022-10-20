import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { ErrorBoundary, Spinner } from "./components";
import { NoMatch } from "./pages";

// For cases like this would prefer to use something like this: https://github.com/JLarky/react-lazily
const About = lazy(() =>
  import("./pages").then((module) => ({ default: module.About }))
);
const Films = lazy(() =>
  import("./pages").then((module) => ({ default: module.Films }))
);
const MainLayout = lazy(() =>
  import("./layouts").then((module) => ({ default: module.MainLayout }))
);

// another possible way to handle routes would be to have a not found page
export const App = () => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner isAppCentered />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Films />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);
