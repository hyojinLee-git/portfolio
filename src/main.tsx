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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
            <Route path="/rainy-day" element={<RainyDay />} />
            {/* <Route path="/count-down" element={<CountDown />} /> */}
            {/* <Route path="/fireworks" element={<Fireworks />} /> */}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
