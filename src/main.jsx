import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
