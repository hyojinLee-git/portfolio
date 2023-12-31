import "./style.css";

export default function Section1() {
    return (
        <section className="section1" id="home">
            <div>
                <img src="/common/profile.png" />
            </div>
            <div className="information">
                <h1>이효진(Lee HyoJin)</h1>
                <address>
                    <h3>contact</h3>
                    <ul>
                        <li>splato8899@gmail.com</li>
                        <li>
                            <a href="https://github.com/hyojinLee-git">
                                github
                            </a>
                        </li>
                    </ul>
                </address>
            </div>
        </section>
    );
}
