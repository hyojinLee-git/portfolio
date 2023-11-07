import Section2 from "./containers/Sections/Section2";
import Navigator from "./layouts/Navigator";
import { PROJECT_LIST } from "./models/project";

function App() {
    return (
        <>
            <Navigator />
            <main>
                <section className="section1"></section>
                <Section2 />
            </main>
        </>
    );
}

export default App;
