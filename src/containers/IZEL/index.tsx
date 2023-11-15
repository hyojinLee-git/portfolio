import "./style.css";

export default function IZEL() {
    return (
        <div className="izel">
            <video controls>
                <source src="/IZEL/IZEL_demo.mp4" />
            </video>
            <h2>💡 Topic</h2>
            <p>
                NCS 학습 정보와 로드맵을 공공데이터 포탈에서 데이터를 가져와
                나만의 커리큘럼을 조회할 수 있는 웹사이트입니다.{" "}
            </p>
            <h2>🏆 Prize</h2>
            <p>대전광역시 공공데이터 활용 경진대회 입선</p>
            <h2>🛠️Tech Stack</h2>
            <ul>
                <li>Android</li>
                <li>NextJS, Vercel</li>
                <li>Firebase</li>
            </ul>
            <h2>👥 Team</h2>
            <ul>
                <li>기획자 1</li>
                <li>개발자 3</li>
            </ul>
            <h2>✋ Part</h2>
            <ul>
                <li> 웹사이트 전체 제작</li>
                <li>공공데이터를 받아오기 위한 firebase proxy server 제작</li>
            </ul>
        </div>
    );
}
