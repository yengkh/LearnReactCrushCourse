import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePageView from "./View/HomePageView";
import JobsPageView from "./View/JobsPageView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePageView />} />
      <Route path="/jobs" element={<JobsPageView />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
