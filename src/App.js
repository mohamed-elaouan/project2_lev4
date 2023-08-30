//Pages
import Root from "Pages/Root";
// @ts-ignore
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
    </Route>
  )
);

function App() {
  return (
    <div className={`App`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
