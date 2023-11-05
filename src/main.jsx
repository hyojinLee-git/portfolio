import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import "./style/index.css";
import RainyDay from "./containers/RainyDay/index.jsx";
import CountDown from "./containers/CountDown/index.jsx";
import Fireworks from "./containers/Fireworks/index.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
            <Route path="/rainy-day" element={<RainyDay />} />
            <Route path="/count-down" element={<CountDown />} />
            <Route path="/fireworks" element={<Fireworks />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
