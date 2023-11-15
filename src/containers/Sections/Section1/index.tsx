import "./style.css";

export default function Section1() {
    return (
        <section className="section1">
            <div>
                <img src="/public/common/profile.png" />
            </div>
            <div className="information">
                <h1>이효진(Lee HyoJin)</h1>
                <address>
                    <h3>contact</h3>
                    <ul>
                        <li>splato8899@gmail.com</li>
                        <li>github</li>
                    </ul>
                </address>
            </div>
        </section>
    );
}
