import Section1 from "./containers/Sections/Section1";
import Section2 from "./containers/Sections/Section2";
import Section3 from "./containers/Sections/Section3";
import Section4 from "./containers/Sections/Section4";
import Section5 from "./containers/Sections/Section5";
import Navigator from "./layouts/Navigator";

import "./style/App.css";

function App() {
    return (
        <div>
            <header>
                <Navigator />
            </header>
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </main>
        </div>
    );
}

export default App;
