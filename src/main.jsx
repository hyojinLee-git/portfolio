import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import RainyDay from "./containers/RainyDay/index.jsx";
import "./style/index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
            <Route path="/rainy-day" element={<RainyDay />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
