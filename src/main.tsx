import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import "./style/index.css";
import App from "./App";
import RainyDay from "./containers/RainyDay";
import CountDown from "./containers/CountDown";
import Fireworks from "./containers/Fireworks";
import BounceString from "./containers/BouceString";
import Rope from "./containers/Rope";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
            <Route path="/rainy-day" element={<RainyDay />} />
            <Route path="/count-down" element={<CountDown />} />
            <Route path="/fireworks" element={<Fireworks />} />
            <Route path="/bounce-string" element={<BounceString />} />
            <Route path="/rope" element={<Rope />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
