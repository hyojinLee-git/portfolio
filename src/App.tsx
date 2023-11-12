import Section1 from "./containers/Sections/Section1";
import Section2 from "./containers/Sections/Section2";
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
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
