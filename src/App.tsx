import Section1 from "./containers/Sections/Section1";
import Section3 from "./containers/Sections/Section3";
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
                <Section3 />
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
